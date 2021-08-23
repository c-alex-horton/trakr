let timeButton = document.getElementById('time-btn');

trackTime = () => {
    if (timeButton.innerHTML === 'Start') {
        timeButton.innerHTML = 'Stop';
    } else {
        timeButton.innerHTML = 'Start';
    }

}

timeButton.onclick = function(){trackTime()};

