function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
function randomColor() {
    return "rgb(" + randomInteger(0, 255) + "," +  randomInteger(0, 255) + ", " + randomInteger(0, 255) + ")";
}
function clock(){
    setInterval(() => {

        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        let hoursElement = document.getElementById("hours");
        let minutesElement = document.getElementById("minutes");
        let secondsElement = document.getElementById("seconds");
        
        hoursElement.innerHTML = hours;
        minutesElement.innerHTML = minutes;
        secondsElement.innerHTML = seconds;
        
        hoursElement.style.color = randomColor();
        minutesElementt.style.color = randomColor();
        secondsElement.style.color = randomColor();

    }, 1000)
}

clock();