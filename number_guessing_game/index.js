function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function checkGuess(){
    let userGuess = Number(guessField.value);

    if(guessCount === 1){
        guesses.textContent = 'Previous guesss: ';
    }

    guesses.textContent += userGuess + ' ';

    if(userGuess === randomNumber){
        lastResult.textContent = 'Congatrulations! you got it right!';
        lastResult.style.background = 'green';
        lowOrHi.textContent = '';
        setGameOver()
    }else if(guessCount === 10){
        lastResult.textContent = '!!!GAME OVER!!!';
        lowOrHi.textContent = '';
        setGameOver()
    }else{
        lastResult.textContent = 'Wrong!';
        lastResult.style.background = 'red';

        if(userGuess < randomNumber){
            lowOrHi.textContent = 'Last guess was too low!';
        }else if(userGuess > randomNumber){
            lowOrHi.textContent = 'Last guess was too high!';
        }
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
}

function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new Game';
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame);
}


function resetGame(){
    guessCount == 1

    const resetParas = document.querySelectorAll('.resultParas p');

    for(let i = 0; i < resetParas.length; i++){
        resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton)
    
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.textContent = '';

    randomNumber = getRandomInt(MIN, MAX);
}

const MIN = 1;
const MAX = 100;

let randomNumber = getRandomInt(MIN,MAX);

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;


guessSubmit.addEventListener('click', checkGuess);