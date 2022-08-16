let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

const game = document.getElementById('game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn')
      guessInput = document.querySelector('#guess-input')
      message = document.querySelector('.message')

minNum.textContent = min;
maxNum.textContent = max;

guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);
    if(guess > max || guess < min || isNaN(guess)){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }
    else if (guess === winningNum){
        guessInput.disabled = true
        guessInput.style.borderColor = 'green';
        setMessage(`${guess} is correct!`, 'green')
    }
    else{
        guessesLeft--;
        guessInput.style.borderColor = 'red'
        if(guessesLeft === 0){
            guessInput.disabled = true
            setMessage(`You lost, the correct number was ${winningNum}.`)
        }
        else{
            guessInput.value = ''
            setMessage(`${guess} is incorrect. You have ${guessesLeft} left.` )
        }
        
    }
})

function setMessage(msg, color){
    message.style.color = color
    message.textContent = msg;
}
