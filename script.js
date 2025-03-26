const startBtn = document.getElementById('start');
const menu = document.getElementById('menu');
const game = document.getElementById('game');
let number;
const numberInput = document.getElementById('numberinput');
const timeInput = document.getElementById('time');
const numberDisplay = document.getElementById('numberdisplay');
let plusminus;
const answerpage = document.getElementById('answer');
let expression = "";
let answer;
const answerInput = document.getElementById('answerinput')
const submit = document.getElementById('submit');
const yourAnswer= document.getElementById('youranswer')
const correctAnswer= document.getElementById('correctanswer')
const correct = document.getElementById('correct');
const playAgainBtn = document.getElementById('playagain');
const resultPage = document.getElementById('result')

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function startgame(){
    menu.style.display = 'none';
    game.style.display = 'flex';

    number = Math.floor(Math.random() * (12)) + 1;
    plusminus = Math.floor(Math.random() * (4)) + 1;
    if (plusminus===4){
        number*=-1;
    } else{
        number = "+" + String(number)
    }
    numberDisplay.textContent = number;
    expression += String(number);
    for (let i=0; i<parseInt(numberInput.value)-1; i++){
        await sleep(parseFloat(timeInput.value.replace('s', ''))*1000);
        number = Math.floor(Math.random() * (12)) + 1;
        plusminus = Math.floor(Math.random() * (4)) + 1;
        if (plusminus===4){
            number*=-1;
        } else{
            number = "+" + String(number)
        }
        numberDisplay.textContent = number;
        expression += String(number);
        if (i%2===0){
            game.style.backgroundColor = '#2aab11'
        } else{
            game.style.backgroundColor = '#20880c'
        }
    }
    await sleep(parseFloat(timeInput.value.replace('s', ''))*1000);
    game.style.display = 'none';
    answerpage.style.display = 'flex';
    answer = eval(expression);
}

function submitanswer(){
    answerpage.style.display = 'none';
    resultPage.style.display = 'flex';
    if (parseInt(answer) === parseInt(answerInput.value)){
        correct.textContent = 'Correct'
    } else{
        correct.textContent = 'Incorrect'
    }

    correctAnswer.textContent = `Correct answer: ${answer}`;
    yourAnswer.textContent = `Your answer: ${answerInput.value}`;
}

function playagain(){
    resultPage.style.display = 'none';
    menu.style.display = 'flex';
    expression = ""
    game.style.backgroundColor = '#20880c'
}
playAgainBtn.addEventListener('click', playagain)
submit.addEventListener('click', submitanswer)
startBtn.addEventListener('click', startgame)