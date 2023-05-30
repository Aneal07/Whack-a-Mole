

const squares = document.querySelectorAll('.square');
const timeleft = document.querySelector('#time-left');
const score = document.querySelector('#score');

let result = 0;
let hitPosition;
let currentTime = 60;
let countDownTimerId;
let timerId;

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole');
    });

    let randomSquare = squares[Math.floor(Math.random() * 8)];
    randomSquare.classList.add('mole');
    hitPosition = randomSquare.id;
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    });
});

function moveMouse() {
    timerId = setInterval(randomSquare, 1000);
}

moveMouse();

function countDown() {
    currentTime--;
    timeleft.textContent = currentTime;
    if (currentTime === 0) {
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        alert('GAME OVER! Your final score is ' + result);
    }
}

countDownTimerId = setInterval(countDown, 1000);

randomSquare();
