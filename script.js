
 function stateANumber() {
    let num = Math.floor(Math.random()*101);
    return num;
}
stateANumber();
let secretnumber = stateANumber();


function guessNumber() {

    let number;

    function enterYourNumber() {
        number = prompt('Угадай число от 1 до 100');
        if (isNaN(number)) {
            alert('Введи число!');            
            enterYourNumber();
        } else if (number === null) {
            alert('Game over');
            return;                                                                                                        
        }  
        return number;                    
    }        
    
    enterYourNumber();  
       
    if (number > secretnumber) {
        alert('Загаданное число меньше');
        guessNumber();             
    } else if (number < secretnumber) {
        alert('Загаданное число больше');
        guessNumber();        
    } else if (parseFloat(number) === secretnumber) {
        alert('Поздравляю, вы угадали!!!');
    }  
}

guessNumber(); 