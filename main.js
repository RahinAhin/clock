function digitalClock() {
    let latestTime = new Date();
    document.querySelector("h1").innerHTML = latestTime.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',

        }
    )};

setInterval(digitalClock, 1000);
