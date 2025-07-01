let randomNumber = Math.floor(Math.random()*100) + 1
console.log(randomNumber)
const guess = document.querySelector('#guessed')
const submit = document.querySelector('#submit')
const remaining = document.querySelector('#remain')
const prev = document.querySelector('#pre')
const LoworHigh = document.querySelector('#LoworHigh')
const Node = document.querySelector('p')
const startNew = document.querySelector('#startNew')
let guessNo = 1
let startNewButton = null
let playGame = true
let wonGame = false
if(playGame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault()
        let currGuess = guess.value
        if(isNaN(currGuess)){
            alert(`Guess a valid number`)
        }else if(currGuess < 1){
            alert(`Guess a number greater than 1`)
        }else if(currGuess > 100){
            alert(`Guess a number less than 100`)
        }else{
            checkNumber(currGuess)
        }
    })
}
function checkNumber(guess){
    guess = Number(guess)
    if(guess === randomNumber){
        displayMessage(`You won`)
        calculate(guess)
        wonGame =true
        endGame()
    }else if(guess > randomNumber){
        displayMessage(`Guess a smaller number`)
        calculate(guess)
    }
    else{
        displayMessage(`Guess a larger number`)
        calculate(guess)
    }
    guess.value = '';
}

function calculate(guess){
    if(!wonGame){
        if(guessNo >= 11){
            displayMessage(`Game Over`)
            endGame()
        }else{
            remaining.innerHTML = `${10 - guessNo}`
            guessNo++
            prev.innerHTML += ` ${guess}`
        }
    }
}

function displayMessage(message){
   const msg = document.createElement('p');
    msg.textContent = message;
    LoworHigh.innerHTML = '';
    LoworHigh.appendChild(msg);
}

function endGame(){
    playGame = false
    if (!startNewButton) {
        startNewButton = document.createElement('span');
        startNewButton.id = 'startNewButton';
        startNewButton.innerHTML = 'Start New Game';
        startNewButton.style.cursor = 'pointer';
        startNewButton.style.color = 'blue';
        startNewButton.style.marginLeft = '10px';
        startNew.appendChild(startNewButton);

        startNewButton.addEventListener('click', () => {
            newGame();
        });
    }
}

function newGame(){
    wonGame = false
    randomNumber = Math.floor(Math.random()*100) + 1
    console.log(randomNumber)
    playGame = true
    prev.innerHTML = ''
    guessNo = 1
    remaining.innerHTML = `10`
    LoworHigh.innerHTML=''
    if (startNewButton) {
        startNew.removeChild(startNewButton);
        startNewButton = null;
    }
}


