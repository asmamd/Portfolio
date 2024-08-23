let timeDisplay = document.getElementById('timeDisplay');
let startButton = document.getElementById('startButton');
let pauseButton = document.getElementById('pauseButton');
let resetButton = document.getElementById('resetButton');

let timerInterval;
let elapsedTime = 0;
let isRunning = false;

// Format time to display as HH:MM:SS
function formatTime(milliseconds) {
    let totalSeconds = Math.floor(milliseconds / 1000);
    let hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    let minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    let seconds = String(totalSeconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

// Update the timer display
function updateTimeDisplay() {
    timeDisplay.textContent = formatTime(elapsedTime);
}

// Start the timer
function startTimer() {
    if (!isRunning) {
        isRunning = true;
        startButton.disabled = true;
        pauseButton.disabled = false;
        resetButton.disabled = false;

        let startTime = Date.now() - elapsedTime;

        timerInterval = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            updateTimeDisplay();
        }, 1000);
    }
}

// Pause the timer
function pauseTimer() {
    if (isRunning) {
        isRunning = false;
        clearInterval(timerInterval);
        startButton.disabled = false;
        pauseButton.disabled = true;
    }
}

// Reset the timer
function resetTimer() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    isRunning = false;
    updateTimeDisplay();
    startButton.disabled = false;
    pauseButton.disabled = true;
    resetButton.disabled = true;
}

// Event listeners for buttons
startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

// Initialize timer display
updateTimeDisplay();