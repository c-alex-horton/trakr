let timeButton = document.getElementById('time-btn');

let counting = false;

trackTime = () => {
    if (timeButton.innerHTML === 'Start') {
        timeButton.innerHTML = 'Stop';
        counting = true;
        clockFunc();

    } else {
        timeButton.innerHTML = 'Start';
        counting = false;
    }

}

let hour = 0;
let minute = 0;
let second = 0;
let currentTime = "0";

clockFunc = () => {
    if (counting === true) {
        hour = parseInt(hour);
        minute = parseInt(minute);
        second = parseInt(second);

        second += 1;

        if (second === 60) {
            second = 0;
            minute += 1;
        }

        if (minute === 60) {
            minute = 0;
            hour += 1;
        }

        if (second < 10) {
            second = '0' + second;
        }

        if (minute < 10) {
            minute = '0' + minute;
        }
        
        if (hour < 10) {
            hour = '0' + hour;
        }



        currentTime = `${hour}:${minute}:${second}`;
        document.getElementById("timer").innerHTML = currentTime;

        setTimeout(clockFunc, 1000);
    }
}



timeButton.onclick = function(){trackTime()};


