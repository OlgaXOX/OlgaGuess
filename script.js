
 function stateANumber() {
    let num = Math.floor(Math.random()*101);
    return num;
}

function guessNumber() {
    let secretnumber = stateANumber();
    let number;

    function enterYourNumber() {
        number = prompt('Угадай число от 1 до 100');  
        checkNumber();                                                  
    }   

    function checkNumber() {         
        if (isNaN(number)) {
            alert('Введи число!');
            enterYourNumber();            
        } else if (number > secretnumber) {
            alert('Загаданное число меньше');
            enterYourNumber();                        
        } else if (number < secretnumber) {
            alert('Загаданное число больше');
            enterYourNumber();                    
        } else if (parseFloat(number) === secretnumber) {
            alert('Поздравляю, вы угадали!!!');
        } else if (number === null) {
            alert('Game over');                                                                                                            
        }         
    }
}

guessNumber();
