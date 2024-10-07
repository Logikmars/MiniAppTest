import asyncio
import logging
import sqlite3
from aiogram import Bot, Dispatcher, types

logging.basicConfig(level=logging.INFO)

# Инициализация бота
bot = Bot("7555138409:AAGj1Lg9_nLEIFr58jGOH8n8DqRGE7EMHKY")  # Замените на токен вашего бота
dp = Dispatcher()


# Функция для создания БД, если её нет
def create_db():
    print("ДБ создалась")
    conn = sqlite3.connect('quiz.db')
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS quiz_data(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER UNIQUE,
            quiz INTEGER
        )
    ''')
    conn.commit()
    conn.close()

# Выполнить создание таблицы при запуске
create_db()

@dp.message()
async def start(message: types.Message):
    if message.text.lower() == "/start":
        webAppInfo = types.WebAppInfo(url="https://logikmars.github.io/MiniAppTest/")
        keyboard = types.InlineKeyboardMarkup(
            inline_keyboard=[
                [types.InlineKeyboardButton(text="Open QUIZ", web_app=webAppInfo)]
            ]
        )
        await message.answer("Hi! Click to open the quiz.", reply_markup=keyboard)

@dp.inline_query()
async def inline_query_handler(query: types.InlineQuery):
    print("Inline query received")
    user_id = query.from_user.id  # Получаем ID пользователя
    conn = sqlite3.connect('quiz.db')
    cursor = conn.cursor()
    
    # Проверка по user_id
    cursor.execute("SELECT * FROM quiz_data WHERE user_id = ?", (user_id,))
    result = cursor.fetchone()
    
    if result is None:
        cursor.execute("INSERT INTO quiz_data(user_id, quiz) VALUES (?, ?)", (user_id, 1))
        conn.commit()
        response_message = f"User with ID {user_id} added."
    else:
        response_message = f"User with ID {user_id} already exists."

    conn.close()

    # Возврат результата в inline-запросе
    results = [
        types.InlineQueryResultArticle(
            id="1",
            title="Quiz Interaction",
            input_message_content=types.InputTextMessageContent(response_message),
        )
    ]
    await bot.answer_inline_query(query.id, results, cache_time=0)

async def main():
    await bot.delete_webhook(drop_pending_updates=True)
    await dp.start_polling(bot)

if __name__ == "__main__":
    asyncio.run(main())
