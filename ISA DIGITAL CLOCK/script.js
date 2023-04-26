function updateClock() {
    const now = new Date();
    const hours = now.getHours() % 12 || 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const session = now.getHours() < 12 ? "AM" : "PM";
    const date = now.toLocaleDateString();

    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("session").innerHTML = session;
    document.getElementById("date").innerHTML = date;
}

setInterval(updateClock, 1000);
