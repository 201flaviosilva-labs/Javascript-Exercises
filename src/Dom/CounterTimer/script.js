// DOM
const startButton = document.getElementById("Start");
const output = document.getElementById("Timer");

let timerInterval; // Interval
let isStarted = true;

// Time
let seconds = 0;
let minutes = 0;
let hours = 0;

startButton.addEventListener("click", () => {
	startTime = new Date().getTime();
	if (isStarted) {
		timerInterval = setInterval(update, 1000);
		startButton.innerHTML = "Stop";
	}
	else {
		clearInterval(timerInterval);
		startButton.innerHTML = "Continue";
	}
	isStarted = !isStarted;
});

function update() {
	seconds++;
	if (seconds >= 60) {
		seconds = 0;
		minutes++;
		if (minutes >= 60) {
			minutes = 0;
			hours++;
		}
	}
	output.innerHTML = `
		${hours > 9 ? hours : "0" + hours} :
		${minutes > 9 ? minutes : "0" + minutes} :
		${seconds > 9 ? seconds : "0" + seconds}
		`;
}

document.getElementById("Reset").addEventListener("click", () => {
	seconds = 0;
	minutes = 0;
	hours = 0;
	isStarted = true;
	clearInterval(timerInterval);
	startButton.innerHTML = "Start";
	output.innerHTML = `00 : 00 : 00`;
});
