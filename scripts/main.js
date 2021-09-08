function startTimer(duration, daysDisplay, hoursDisplay, minutesDisplay, secondsDisplay) {
    var seconds = duration;
    var days, hoursLeft, hours, minutesLeft, minutes, remainingSeconds;
  

    setInterval(function () {
        days        = Math.floor(seconds/24/60/60);
        hoursLeft   = Math.floor((seconds) - (days*86400));
        hours       = Math.floor(hoursLeft/3600);
        minutesLeft = Math.floor((hoursLeft) - (hours*3600));
        minutes     = Math.floor(minutesLeft/60);
        remainingSeconds = seconds % 60;

        days = days < 10 ? "0" + days : days;
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        remainingSeconds = remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;

        daysDisplay.textContent = days;
        hoursDisplay.textContent = hours;
        minutesDisplay.textContent = minutes;
        secondsDisplay.textContent = remainingSeconds;

        seconds--;
        
    }, 1000);
}

window.onload = function () {
    var fourteenDays = 60 * 60 * 24 * 14,
        daysDisplay = document.querySelector('#daysDisplay');
        hoursDisplay = document.querySelector('#hoursDisplay');
        minutesDisplay = document.querySelector('#minutesDisplay');
        secondsDisplay = document.querySelector('#secondsDisplay');
    startTimer(fourteenDays, daysDisplay, hoursDisplay, minutesDisplay, secondsDisplay);
};