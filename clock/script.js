const secondHand = document.querySelector('.second-hand');
const minsHands = document.querySelector('.min-hand');
const hourHands = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date()
    const seconds = now.getSeconds()
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes()
    const minsDegrees = ((mins / 60) * 360) + 90;
    minsHands.style.transform = `rotate(${minsDegrees}deg)`;

    const hours = now.getHours()
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hourHands.style.transform = `rotate(${hoursDegrees}deg)`;

    console.log(seconds);
}

setInterval(setDate, 1000);