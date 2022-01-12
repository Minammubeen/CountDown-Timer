var hours = 12;
var min = 60;
var sec = 60;
var startBtn = document.getElementById("startBtn");
var pauseBtn = document.getElementById("pauseBtn");
var resetBtn = document.getElementById("resetBtn");

var interval;

function startTimer() {
    startBtn.disabled = true;
    pauseBtn.disabled = false;
    resetBtn.disabled = false;
    var displayHours = document.getElementById("displayHours").value;
    var displayMin = document.getElementById("displayMin").value;
    var displaySec = document.getElementById("displaySec").value;
    interval = setInterval(function(){
        sec--;
        if(sec == 0){
            sec = 60;
            min--;
            if(min == 0){
                hours--;
                min = 60;
            }
        }
        displayHours.value.innerHTML = hours;
        displayMin.value.innerHTML = min;
        displaySec.value.innerHTML = sec;
    }, 1000);
}
function pauseTimer() {
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    clearInterval(interval);
}
function resetTimer() {
    pauseTimer();
    hours = 0;
    min = 0;
    sec = 0;
    displayHours.innerHTML = hours;
    displayMin.innerHTML = min;
    displaySec.innerHTML = sec;
}