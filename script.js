let interval;
let isRunning = false;
let lapCount = 1;

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        updateButtonState();
        interval = setInterval(updateTimer, 1000);
    }
}

function stopTimer() {
    isRunning = false;
    console.log(isRunning);
    updateButtonState();
    clearInterval(interval);
}

function resetTimer() {
    stopTimer();
    document.getElementById('timer').textContent = '00 : 00 : 00';
    lapCount = 1;
    document.getElementById('lapList').innerHTML = '';
}

function recordLap() {
    if (isRunning) {
        const lapTime = document.getElementById('timer').textContent;
        const lapItem = document.createElement('li');
        lapItem.textContent = `Lap ${lapCount}: ${lapTime}`;
        document.getElementById('lapList').appendChild(lapItem);
        lapCount++;
    }
}

function updateTimer() {
    let time = document.getElementById('timer').textContent.split(':');
    let hours = parseInt(time[0]);
    let minutes = parseInt(time[1]);
    let seconds = parseInt(time[2]);

    seconds++;

    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }

    if (minutes >= 60) {
        minutes = 0;
        hours++;
    }

    document.getElementById('timer').textContent =
        `${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;
}

function updateButtonState() {
    document.getElementById('startButton').className = isRunning ? 'button inactive' : 'button active';
    document.getElementById('stopButton').className = isRunning ? 'button active' : 'button inactive';
    document.getElementById('resetButton').className = isRunning ? 'button inactive' : 'button active';
    document.getElementById('lapButton').className = isRunning ? 'button active' : 'button inactive';
}


document.getElementById('startButton').addEventListener('click', startTimer);
document.getElementById('stopButton').addEventListener('click', stopTimer);
document.getElementById('resetButton').addEventListener('click', resetTimer);
document.getElementById('lapButton').addEventListener('click', recordLap);

