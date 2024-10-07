let tg = window.Telegram.WebApp;

let fBtn = document.getElementsByClassName("f-btn")[0];
let sBtn = document.getElementsByClassName("s-btn")[0];

const form = document.getElementsByClassName("test-form")[0];
const plane = document.getElementById("plane");
const imageplane = document.getElementById("imageplane");
const title = document.getElementById("title");
// Блок с квизами
const quiz = document.getElementById("quiz");
// Получаем все элементы квизов
// const images = document.querySelectorAll('.freeimg');
// Скрыть главный блок и показать форму
fBtn.addEventListener("click", () => {
    let title = "try";
    let data = {
        title: title,
    };
    
    console.log("Отправляемые данные:", JSON.stringify(data)); // Добавьте это для отладки
    tg.sendData(JSON.stringify(data));
    tg.WebApp.expand(); 
    plane.style.transition = "2s cubic-bezier(0.68, -0.55, 0.27, 1.55)";
    plane.style.transform = "translateY(-100dvh)"; 
    setTimeout(() => {
        fBtn.style.transition = "4s ease";
        fBtn.style.transform = "translateY(150dvh)";
        title.style.transition = "2.5s ease";
        title.style.transform = "translateY(150dvh)";
        setTimeout(() => {
            imageplane.style.display = "none";
            fBtn.style.display = "none";
            title.style.display = "none";
        }, 1500);
        // Тут нужно что бы спускался экран с квизами
        quiz.style.transform = "translateY(100dvh)";
    }, 500);   
});
