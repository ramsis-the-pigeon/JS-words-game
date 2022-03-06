var check = document.getElementById('check');
check.addEventListener('click', getInputValue);
check.disabled = true
var downTimer = document.getElementById('timer');
//generate random letter
var char;
var startGame = document.getElementById('start');

startGame.addEventListener('click', function() {
    startGame.disabled = true
    check.disabled = false
    getNewLetter()
    countDown()
});

function getNewLetter() {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    char = characters[Math.floor(Math.random() * characters.length)];
    var text = document.getElementById("letter");
    text.style.display = 'block';
    text.innerHTML = "Your letter is: " + char;
    downTimer.style.display = 'grid';

    ///move to next field
    for (let i = 0; i < inputs.length; i++){
        function keyPress (e) {
            if (e.key === "Enter") {
                inputs[i].focus();
            }
        }
    }
}

var inputs = document.querySelectorAll("input");
//check first letter for every input
let list = [];
function getInputValue() {
    downTimer.style.display = 'none';
    var flag = true;
    for (let i = 0; i < inputs.length; i++) {
        list.push(inputs[i].value);
    }
    for (let i = 0; i < list.length; i++) {
        
        if (list[i].charAt(0).toLowerCase() === char) {
            inputs[i].parentElement.style.background = '#7dffc2';
            document.getElementById("result").innerHTML = "You Win";
        }
        else {
            inputs[i].parentElement.style.background = '#ff7d7d';
            document.getElementById("result").innerHTML = "Try again";
        } 
    }   
    
}

//restart
var btnRestart = document.getElementById('restart');
btnRestart.addEventListener('click', function(){
    window.location.reload();
});

//countdown timer

function countDown() {

    var min = document.getElementById('min');
    var secc = document.getElementById('sec');

    var minute = 1;
    var sec = 59;
    setInterval(function() {
        secc.innerHTML = sec;
        min.innerHTML = minute;
        sec--;
        if (sec == -1) {
            minute--;
            sec = 59;
            if (minute == -1) {
                downTimer.innerHTML = 'Time Over';
                startGame.disabled = false;
            }
        }
        if (sec == 0 && minute == 0) {
            downTimer.classList.add('time-over');
            getInputValue()
            startGame.disabled = true
            downTimer.classList.remove('timer-grid');
        }
    }, 1000);
}
