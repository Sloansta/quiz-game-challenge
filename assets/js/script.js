let questionSection = document.getElementById('question');
let answerSection = document.getElementById("answer");
let timerSection = document.getElementById("timer");
let rightWrong = document.getElementById('right-wrong');
let gameStarted = false;
let questionCounter = 0;
let timer = 100;
let btnA = document.createElement('button');
let btnB = document.createElement("button");
let btnC = document.createElement("button");
let btnD = document.createElement("button");
let btnArr = [btnA, btnB, btnC, btnD];

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
            c: "var object = {}",
            d: "var object{} = {}"
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
            c: "function func() {console.log('Hello world!');}",
            d: "function func() = func();"
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

document.getElementById("load-score").addEventListener('click', loadFromLocal);

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
        if(timer <= 0 || !gameStarted) {
            clearInterval(gameTimer);
            endGame();
        }

        timerSection.textContent = "time: " + timer;

        

    }, 1000);
}

// messy code that I am not proud of. Will refactor later. 
function mainGame() {
    console.log(questionCounter);
    switch (questionCounter) {
        case 0:
           askQuizQuestion(0, questions[0].answers.d);
            break;
        case 1: 
            askQuizQuestion(1, questions[1].answers.c);
            break;
        case 2: 
            askQuizQuestion(2, questions[2].answers.b);
            break;
        case 3: 
            askQuizQuestion(3, questions[3].answers.a);
            break;
        case 4:
            askQuizQuestion(4, questions[4].answers.d);
            break;
            
    
        default:
            gameStarted = false;
            break;
    }
}

// finish up adding the function that allows saving to local storage and also loading from local storage.

function saveToLocal() {
    let initials = prompt("Please enter your initials");
    localStorage.setItem('score', initials + "-" + timer);
}


// asking the question function 
function askQuizQuestion(index, correctAnswer) {
    questionSection.innerHTML = "<h2>" + questions[index].question + "</h2>";
            for(let i = 0; i < btnArr.length; i++) {
                answerSection.appendChild(btnArr[i]);
                if(i == 0)
                    btnArr[i].textContent = questions[index].answers.a;
                else if(i == 1)
                    btnArr[i].textContent = questions[index].answers.b;
                else if(i == 2)
                    btnArr[i].textContent = questions[index].answers.c;
                else 
                    btnArr[i].textContent = questions[index].answers.d;
                
                btnArr[i].className = "btn";
            }
            answerSection.addEventListener('click', function listener(e) {
                if(e.target.className == "btn") {
                    if(e.target.textContent == correctAnswer) {
                        rightWrong.innerHTML = "<h2>Correct!</h2>";
                        answerSection.removeEventListener('click', listener);
                        questionCounter++;
                        mainGame();
                    } else {
                        rightWrong.innerHTML = "<h2>False!</h2>";
                        answerSection.removeEventListener('click', listener);
                        questionCounter++;
                        timer -= 10;
                        mainGame();
                    }
                }
               
            });
}

// work on getting this functional tomorrow
function loadFromLocal() {
    let score = localStorage.getItem('score');

    if(!score || score == null) 
        alert("You do not have a score saved");
    else 
        alert("Your current score: " + score); // this is just filler code for now until I figure out what I want to do from here.
}

function endGame() {
    if(timer <= 0) 
        questionSection.innerHTML = "<h2>GAME OVER!</h2>";
    else 
        questionSection.innerHTML = "<h2>You completed the quiz with a score of " + timer + "! </h2>";
    
    for(let i = 0; i < btnArr.length; i++) {
        btnArr[i].remove();
        rightWrong.innerHTML = "";
    }

    let scoreSaved = false;
    let saveButton = document.createElement("button");
    saveButton.className = "save-btn";
    saveButton.textContent = "Save your score!";

    questionSection.appendChild(saveButton);

    saveButton.addEventListener('click', () => {
        if(!scoreSaved) {
            saveToLocal();
            saveButton.textContent = "Score Saved!";
        }else
            alert("You already saved your score. Please play again if you would like to set a different score.");
    });
}