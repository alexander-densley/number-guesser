let min = 1,
    max = 10,
    winningNum = Math.floor(Math.random() * (max - min +1) ) + min,
    guessesLeft = 3;

console.log(winningNum)

const game = document.getElementById('game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn')
      guessInput = document.querySelector('#guess-input')
      message = document.querySelector('.message')

minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown',function(e){
    if(e.target.className === 'play-again'){
        window.location.reload()
    }
})

guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);
    if(guess > max || guess < min || isNaN(guess)){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }
    else if (guess === winningNum){
        guessInput.disabled = true
        guessInput.style.borderColor = 'green';
        setMessage(`${guess} is correct, You win!`, 'green')
        gameOver()
    }
    else{
        guessesLeft--;
        guessInput.style.borderColor = 'red'
        if(guessesLeft === 0){
            guessInput.disabled = true
            setMessage(`You lost, the correct number was ${winningNum}.`, 'red')
            gameOver()
        }
        else{
            guessInput.value = ''
            setMessage(`${guess} is incorrect. You have ${guessesLeft} left.`,'red')
        }
        
    }
})

function gameOver(){ 
    guessBtn.value = "Play Again"
    guessBtn.className += 'play-again'
}

function setMessage(msg, color){
    message.style.color = color
    message.textContent = msg;
}
