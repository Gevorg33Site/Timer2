const startBtn = document.querySelector('.start'); 
const stopBtn = document.querySelector('.stop');
const laps= document.querySelector('.lap');
const reset = document.querySelector('.reset');
const timer = document.querySelector('.timer');
const ul = document.querySelector('ul');
let interval;
let hour = 0;
let minute = 0;
let second = 0; 

startBtn.addEventListener('click', function() {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    stopBtn.style.display = 'inline';
    laps.style.display = 'inline';
    reset.style.display = 'inline';

    interval = setInterval(timerFunction, 1000)
})

stopBtn.addEventListener('click', function() {
    startBtn.disabled = false;
    stopBtn.disabled = true;
    clearInterval(interval);
})

ul.addEventListener('click', function(event) {
    if(event.target.className == 'close') {
        event.target.parentElement.remove();
    }
})

laps.addEventListener('click', function() {
    const li = document.createElement('li');
    li.innerText = timer.innerText;
    li.innerHTML += '<span class="close">&times;</span>'
    ul.appendChild(li);
})

reset.addEventListener('click', function() {
    hour = minute = second = 0;
    ul.innerHTML = '';
    startBtn.disabled = false;
    stopBtn.style.display = 'none';
    laps.style.display = 'none';
    reset.style.display = 'none';
    timer.innerText = addZero(hour) + ':' + addZero(minute) + ':' + addZero(second);
    clearInterval(interval);
})

function timerFunction() {
    second++;

    if(second == 60) {
        second = 0;
        minute++;

        if(minute == 60) {
            minute = 0;
            hour++;
        }
    }

    timer.innerText = addZero(hour) + ':' + addZero(minute) + ':' + addZero(second);
}

function addZero(num) {
    if(num < 10) {
        return '0' + num;
    }

    return num;
}