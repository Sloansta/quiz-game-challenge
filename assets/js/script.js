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
            questionSection.innerHTML = "<h2>" + questions[0].question + "</h2>";
            for(let i = 0; i < btnArr.length; i++) {
                answerSection.appendChild(btnArr[i]);
                if(i == 0)
                    btnArr[i].textContent = questions[0].answers.a;
                else if(i == 1)
                    btnArr[i].textContent = questions[0].answers.b;
                else if(i == 2)
                    btnArr[i].textContent = questions[0].answers.c;
                else 
                    btnArr[i].textContent = questions[0].answers.d;
                
                btnArr[i].className = "btn";
            }
            answerSection.addEventListener('click', function listener(e) {
                if(e.target.className == "btn") {
                    if(e.target.textContent == questions[0].answers.d) {
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
            break;
        case 1: 
            questionSection.innerHTML = "<h2>" + questions[1].question + "</h2>";
            for(let i = 0; i < btnArr.length; i++) {
                answerSection.appendChild(btnArr[i]);
                if(i == 0)
                    btnArr[i].textContent = questions[1].answers.a;
                else if(i == 1)
                    btnArr[i].textContent = questions[1].answers.b;
                else if(i == 2)
                    btnArr[i].textContent = questions[1].answers.c;
                else 
                    btnArr[i].textContent = questions[1].answers.d;
                btnArr[i].className = "btn"
            }
            answerSection.addEventListener('click', function listener(e) {
                if(e.target.className == "btn") {
                    if(e.target.textContent == questions[1].answers.c) {
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
            break;
        case 2: 
            questionSection.innerHTML = "<h2>" + questions[2].question + "</h2>";
            for(let i = 0; i < btnArr.length; i++) {
                answerSection.appendChild(btnArr[i]);
                if(i == 0)
                    btnArr[i].textContent = questions[2].answers.a;
                else if(i == 1)
                    btnArr[i].textContent = questions[2].answers.b;
                else if(i == 2)
                    btnArr[i].textContent = questions[2].answers.c;
                else 
                    btnArr[i].textContent = questions[2].answers.d;
                
                btnArr[i].className = "btn";
            }
            answerSection.addEventListener('click', function listener(e) {
                if(e.target.className == "btn") {
                    if(e.target.textContent == questions[2].answers.b) {
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
            break;
        case 3: 
            questionSection.innerHTML = "<h2>" + questions[3].question + "</h2>";
            for(let i = 0; i < btnArr.length; i++) {
                answerSection.appendChild(btnArr[i]);
                if(i == 0)
                    btnArr[i].textContent = questions[3].answers.a;
                else if(i == 1)
                    btnArr[i].textContent = questions[3].answers.b;
                else if(i == 2)
                    btnArr[i].textContent = questions[3].answers.c;
                else 
                    btnArr[i].textContent = questions[3].answers.d;

                btnArr[i].className = "btn";
            }
            answerSection.addEventListener('click', function listener(e) {
                if(e.target.className == "btn") {
                    if(e.target.textContent == questions[3].answers.a) {
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
            break;
            case 4:
                questionSection.innerHTML = "<h2>" + questions[4].question + "</h2>";
                for(let i = 0; i < btnArr.length; i++) {
                    answerSection.appendChild(btnArr[i]);
                    if(i == 0)
                        btnArr[i].textContent = questions[4].answers.a;
                    else if(i == 1)
                        btnArr[i].textContent = questions[4].answers.b;
                    else if(i == 2)
                        btnArr[i].textContent = questions[4].answers.c;
                    else 
                        btnArr[i].textContent = questions[4].answers.d;

                    btnArr[i].className = "btn";
                }
                answerSection.addEventListener('click', function listener(e) {
                    if(e.target.className == "btn") {
                        if(e.target.textContent == questions[4].answers.d) {
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
                break;
            
    
        default:
            gameStarted = false;
            break;
    }
}

// finish up adding the function that allows saving to local storage and also loading from local storage.

function saveToLocal() {
    localStorage.setItem('score', timer);
}

// work on getting this functional tomorrow
function loadFromLocal() {
    let score = localStorage.getItem('score');

    if(!score || score == null) 
        alert("You do not have a score saved");
    else 
        alert("Your current score is: " + score); // this is just filler code for now until I figure out what I want to do from here.
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