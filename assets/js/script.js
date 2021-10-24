let questionSection = document.getElementById('question');
let answerSection = document.getElementById("answer");
let timerSection = document.getElementById("timer");
let rightWrong = document.getElementById('right-wrong');
let gameStarted = false;
let questionCounter = 0;
let timer = 100;

// question objects in an array
let questions = [
    {
        question: "Arrays in JavaScript can be used to store _____ ?",
        answers: {
            a: "integers",
            b: "booleans",
            c: "strings",
            d: "All of the above"
        },
        correct: this.d,
        wasAsked: false
    },

    {
        question: "How would you make an object in Javascript?",
        answers: {
            a: "var object = []",
            b: "ver object[] = []",
            c: "var object = {}"
        },

        correct: this.c,
        wasAsked: false
    },

    {
        question: "What is an if statement enclosed in?",
        answers: {
            a: "''",
            b: "()",
            c: "{}",
            d: "[]"
        },

        correct: this.b,
        wasAsked: false
    },

    {
        question: "What does a recursive function in javaScript look like?",
        answers: {
            a: "function func() { // func() // } ",
            b: "function func(text) {console.log(text)} func('hello world!')",
            c: "function func() {console.log('Hello world!');}"
        }, 

        correct: this.a,
        wasAsked: false
    }, 

    {
        question: "How would you make a float into an integer in JavaScript?",
        answers: {
            a: "floor()",
            b: "Math.random()",
            c: "float.floor()",
            d: "Math.floor()"
        },

        correct: this.d,
        wasAsked: false
    }
]

if(gameStarted == false)
    document.getElementById("start-button").addEventListener('click', startGame);

function startGame() {
    gameStarted = true; 
    console.log('game has started');
    game();
    mainGame();
    document.getElementById('start-button').remove();
}

function game() {
    let gameTimer = setInterval(() => {
        timer--;
        if(timer <= 0) {
            clearInterval(gameTimer);
            endGame();
        }

        timerSection.textContent = "time: " + timer;
        

    }, 1000);
}

function mainGame() {
    switch (questionCounter) {
        case 0:
            questionSection.innerHTML = "<h2>" + questions[0].question + "</h2>";
            let btnA = document.createElement('button');
            let btnB = document.createElement("button");
            let btnC = document.createElement("button");
            let btnD = document.createElement("button");
            let btnArr = [btnA, btnB, btnC, btnD];
            for(let i = 0; i < btnArr.length; i++) {
                answerSection.appendChild(btnArr[i]);
            }
            questionCounter++

            //Add event listeners for each button here until you can find a different way of doing it that is neater.
            break;
    
        default:
            break;
    }
}

function endGame() {
    if(timer <= 0) 
        questionSection.innerHTML = "<h2>GAME OVER!</h2>";
    else 
        questionSection.textContent = "You completed the quiz! Nice.";
    
    gameStarted = false;
}