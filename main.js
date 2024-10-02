let tg = window.Telegram.WebApp;

let fBtn = document.getElementsByClassName("f-btn")[0];
let sBtn = document.getElementsByClassName("s-btn")[0];

const form = document.getElementsByClassName("test-form")[0];

// Скрыть главный блок и показать форму
fBtn.addEventListener("click", () => {
    document.getElementsByClassName("Main")[0].style.display = "none";
    form.style.display = "flex";
});

// Отправка данных
sBtn.addEventListener("click", (event) => {
    event.preventDefault(); // Предотвращает стандартное поведение кнопки

    let title = document.getElementsByClassName("title-inp")[0].value;
    let description = document.getElementsByClassName("desc-inp")[0].value;
    let text = document.getElementsByClassName("text-inp")[0].value;

    let data = {
        title: title,
        desc: description,
        text: text
    };

    tg.sendData(JSON.stringify(data));
});
