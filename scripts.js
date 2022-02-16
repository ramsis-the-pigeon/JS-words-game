var downTimer = document.getElementById('timeout');
//generate random letter
var char;
var startGame = document.getElementById('startGame');

startGame.addEventListener('click', function() {
    getNewLetter()
    countDown()
});

function getNewLetter() {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    char = characters[Math.floor(Math.random() * characters.length)];
    var text = document.getElementById("new-letter");
    text.innerHTML = "Your letter is: " + char;
    downTimer.style.visibility = 'visible';

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
    var flag = true;
    for (let i = 0; i < inputs.length; i++) {
        list.push(inputs[i].value);
    }
    
    for (let i = 0; i < inputs.length; i++) {
        if (list[i].charAt(0).toLowerCase() === char) {
            inputs[i].style.background = '#00ff00';
            document.getElementById("result").innerHTML = "win";
        }

        else {
            inputs[i].style.background = '#ff0000';
            document.getElementById("result").innerHTML = "loss";
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
    var minute = 2;
    var sec = 0;
    setInterval(function() {
        downTimer.innerHTML = minute + ":" + sec;
        sec--;
        if (sec == -1) {
            minute--;
            sec = 59;
            if (minute == -1) {
                downTimer.style.visibility = 'hidden';
            }
        }
        if (sec == 0 && minute == 0) {
            getInputValue()
        }
    }, 1000);
}


