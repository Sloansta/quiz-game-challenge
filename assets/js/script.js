let questionSection = document.getElementById('question');
let answerSection = document.getElementById("answer");
let gameStarted = false;
let questionCounter = 0;
let timer = 100;


let questions = [
    {
        question: "Arrays in JavaScript can be used to store _____ ?",
        answers: {
            a: "integers",
            b: "booleans",
            c: "strings",
            d: "All of the above"
        },
        correct: this.d
    },

    {
        question: "How would you make an object in Javascript?",
        answers: {
            a: "var object = []",
            b: "ver object[] = []",
            c: "var object = {}"
        },

        correct: this.c
    },

    {
        question: "What is an if statement enclosed in?",
        answers: {
            a: "''",
            b: "()",
            c: "{}",
            d: "[]"
        },

        correct: this.b
    },

    {
        question: "What does a recursive function in javaScript look like?",
        answers: {
            a: "function func() { // func() // } ",
            b: "function func(text) {console.log(text)} func('hello world!')",
            c: "function func() {console.log('Hello world!');}"
        }, 

        correct: this.a
    }, 

    {
        question: "How would you make a float into an integer in JavaScript?",
        answers: {
            a: "floor()",
            b: "Math.random()",
            c: "float.floor()",
            d: "Math.floor()"
        },

        correct: this.d
    }
]

if(gameStarted == false)
    answerSection.addEventListener('click', startGame);

function startGame() {
    gameStarted = true; 
    console.log('game has started');
    game();
}

function game() {
    let gameTimer = setInterval(() => {
        timer--;
        if(timer <= 0) {
            clearInterval(gameTimer);
            endGame();
        }else {
            //Write code here
        }

    }, 1000);
}

function endGame() {
    if(timer <= 0) 
        questionSection.textContent = "GAME OVER!";
    else 
        questionSection.textContent = "You completed the quiz! Nice.";
    
    gameStarted = false;
}