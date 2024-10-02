let tg = window.Telegram.WebApp;

let fBtn = document.getElementsByClassName("f-btn")[0]
let sBtn = document.getElementsByClassName("s-btn")[0]

const form = document.getElementsByClassName("test-form")[0];

fBtn.addEventListener("click", () => {
    document.getElementsByClassName("Main")[0].style.display = "none";
    form.style.display = "flex";
});

sBtn.addEventListener("click", () => {
    let title = document.getElementsByClassName("title-inp")[0];
    let description = document.getElementsByClassName("desc-inp")[0];
    let text = document.getElementsByClassName("text-inp")[0];

    
    let data = {
        title: title.value,
        desc: description.value,    
        text: text.value
    }

    tg.sendData(JSON.stringify(data));
});