const nameArea = document.getElementById("myName");
const time = document.getElementById("myClock")
var userName = prompt("İsminizi giriniz.");

nameArea.innerText = userName;

window.addEventListener("load", () => {
    const d = new Date();
    let currentDate = d.getDate();
    let currentMonth = d.getMonth();
    let currentYear = d.getFullYear();
    time.innerHTML = currentDate + "/" + currentMonth + "/" + currentYear + " - " + day();
});

function day() {
    switch(new Date.getDay()) {
        case 0:
            return "Pazar";
            break;
        case 1:
            return "Pazartesi";
            break;
        case 2:
            return "Salı";
            break;
        case 3:
            return "Çarşamba";
            break;
        case 4:
            return "Perşembe";
            break;
        case 5:
            return "Cuma";
            break;
        case 6:
            return "Cumartesi";
            break;
    }

}