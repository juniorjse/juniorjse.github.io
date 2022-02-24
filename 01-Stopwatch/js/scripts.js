window.onload = function () {
    var seconds = 00;
    var tens = 00;

    var appendSeconds = document.getElementById("seconds");
    var appendTens = document.getElementById("tens");
    var buttonStart = document.getElementById("btn-start");
    var buttonStop = document.getElementById("btn-stop");
    var buttonReset = document.getElementById("btn-reset");

    var Interval ;

    buttonStart.onclick = function () {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = function () {
        clearInterval(Interval);
    }

    buttonReset.onclick = function () {
        clearInterval(Interval);
        seconds = 00;
        tens = 00;
        appendSeconds.innerHTML = "00";
        appendTens.innerHTML = "00";
    }

    function startTimer() {
        tens++;
        if(tens <= 9) {
            appendTens.innerHTML = "0" + tens;
        }

        if(tens > 9) {
            appendTens.innerHTML = tens;
        }

        if(tens > 99) {
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }

        if(seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }
    }
}