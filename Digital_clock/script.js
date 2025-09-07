const clock = document.getElementById("clock");
const dateDisplay = document.getElementById("date");

function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = "AM";

    
    if (hours >= 12) {
        ampm = "PM";
        if (hours > 12) hours = hours - 12;
    }
    if (hours === 0) {
        hours = 12; 
    }


    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;


    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
    clock.textContent = timeString;

    
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateDisplay.textContent = now.toLocaleDateString("en-US", options);

    
    clock.style.color = getRandomColor();
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

setInterval(updateClock, 1000);
updateClock();
