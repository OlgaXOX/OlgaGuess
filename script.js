
 function stateANumber() {
    let num = Math.floor(Math.random()*101);
    return num;
}

function guessNumber() {
    let secretnumber = stateANumber();
    let number;

    function checkNumber() {                    
        if (number > secretnumber) {
            alert('Загаданное число меньше');
            enterYourNumber();                        
        } else if (number < secretnumber) {
            alert('Загаданное число больше');
            enterYourNumber();                    
        } else if (parseFloat(number) === secretnumber) {
            alert('Поздравляю, вы угадали!!!');                                                                                                                    
        }         
    }

    function enterYourNumber() {
        number = prompt('Угадай число от 1 до 100');
        if (number === null) {
            alert('Game over'); 
        } else if (isNaN(parseFloat(number)) || number === '') {
            alert('Введи число!');
            enterYourNumber();                        
        } else {
            checkNumber();
        }                                                     
    }
    enterYourNumber();
}

guessNumber();
