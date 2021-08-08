// Digital Clock
setInterval(showCurrentTime, 1000);

const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
 
function showCurrentTime(){
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    hour.textContent = hr;
    minute.textContent = min;
    second.textContent = sec;

    if(hr > 12){
        hour.textContent = hr - 12;
    }
    if(min < 10){
        minute.textContent = "0" + min;
    }
    if(sec < 10){
        second.textContent = "0" + sec;
    }
}
showCurrentTime();


// Analog Clock js
setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60 
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60 
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12 
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()