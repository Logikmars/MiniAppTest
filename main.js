let tg = window.Telegram.WebApp;

let fBtn = document.getElementsByClassName("f-btn")[0];
let sBtn = document.getElementsByClassName("s-btn")[0];

const form = document.getElementsByClassName("test-form")[0];
const plane = document.getElementById("plane");
const imageplane = document.getElementById("imageplane");
// Скрыть главный блок и показать форму
fBtn.addEventListener("click", () => {
    plane.style.transition = "2s cubic-bezier(0.68, -0.55, 0.27, 1.55)";
    plane.style.transform = "translateY(-100dvh)";    
});

// Отправка данных
// sBtn.addEventListener("click", (event) => {
//     event.preventDefault(); // Предотвращает стандартное поведение кнопки

//     let title = document.getElementsByClassName("title-inp")[0].value;
//     let description = document.getElementsByClassName("desc-inp")[0].value;
//     let text = document.getElementsByClassName("text-inp")[0].value;
//     document.getElementsByClassName("Main")[0].style.display = "flex";
//     let data = {
//         title: title,
//         desc: description,
//         text: text
//     };

//     tg.sendData(JSON.stringify(data));
// });
