/**
 * The Coding Game Javascript File
 */

// Global Elements are used throughout the js script. I am getting elements from my html page.
// var score = document.getElementById("score-tracker");
// var homeScreen = document.getElementById("home-screen");
// var submit = document.getElementById("submit");
// var goBack = document.getElementById("go-back");
// var clear = document.getElementById("clear-score");
var startBtn = document.getElementById("start-btn");
var questionElement = document.getElementById("questions");
var theTimer = document.getElementById("timer");
var enterInitials = document.getElementById("score");
var highScores = document.getElementById("highscores");
var currentQuestion = 0;
var timeLeft = 60;

// Start game. A function that clears the homescreen and calls the quiz and timer.
function startGame(){

    // I am creating a function that starts the game when button is clicked. First, I call the document and get the "welcome" div element by id. Then I set the id to .innerHTML so that I can replace the content. I replace the content with "" so that there is nothing inside of the div.
    document.getElementById("home-screen").innerHTML = "";
    theQuiz();
    timer();
}

// Timer. The timer was based off of an activity done in class. I am using a function that contains a variable describing the time left and another variable that defines the interval of time that is being counted down. the last part of this function is a conditional statement that clears the interval after it has reached zero.
function timer(){
    var interval = setInterval(function()
    {theTimer.textContent = timeLeft + " seconds left.";
    timeLeft--;

    if (timeLeft <= 0){
        theTimer.textContent = "";
        clearInterval(interval);
        theScore();
    }
    
    }, 1000);
    
}

// Question and answers
var qna = [
    {
        question: "Commonly used data types DO NOT include:",
        choices:["strings", "booleans", "alerts","numbers"],
        answer: "alerts"
    },

    {
        question: "The condition in an if / else statement is enclosed within ______.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "curly brackets"
    },

    {
        question: "Arrays in JavaScript can be used to store ______.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },

    {
        question: "String values must be enclosed within ______ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"
    },

    {
       question:"A very useful tool used during development and debugging for printing content to the debugger is:",
       choices: ["JavaScript", "terminal/bash", "for loops", " console.log"],
       answer: "console.log"
    }
];

// The quiz
function theQuiz(){
    questionElement.textContent = "";
    questionElement.style.display = "block";
    var h2El = document.createElement("h2");
    h2El.textContent = qna[currentQuestion].question;
    questionElement.appendChild(h2El);
    // this for loop is to cycle through the questions and answers.
    for (i = 0; i < qna[currentQuestion].choices.length; i++) {
        var buttonEl = document.createElement("button");
        questionElement.append(buttonEl);
        buttonEl.textContent = qna[currentQuestion].choices[i];
        buttonEl.style.display= "block";
        buttonEl.style.margin= "10px";
        buttonEl.addEventListener("click", quizButtons);
        }
    if (qna[currentQuestion] === [4]) {
        qna[currentQuestion].answer.onClick = questionElement.textContent = "";
    }
   
}


function quizButtons(){
    if (qna[currentQuestion].answer === event.target.textContent){
            alert("correct!");

    } else {
        timeLeft-=15;
    };
    currentQuestion++;
    theQuiz();
    // if(currentQuestion === qna.length){
    //     theQuiz.textContent = "";
    //     theScore();
    // }
}

// Function to get the results of the quiz. After the last answer is chosen, the quiz is cleared, "game over is displayed", my final score is displayed, and a box for entering in my initials is displayed.
function theScore(){
    // the.textContent = "";
    var h1El = document.createElement("h1");
    h1El.textContent = "Game Over";
    var h3El = document.createElement("h3");
    h3El.textContent = "Please enter your score";
    var formBox = document.createElement("form");
    formBox.textContent = "";
    enterInitials.appendChild(h1El);
    enterInitials.appendChild(h3El);
}

// After my initials have been entered in and the "submit" button has been clicked, the highscore page appears and lets me see my score and the score of anyone else that has taken the quiz also. The information is stored in local storage.
function highScores(){
    highScores.textContent = "";
    var highscoreHead = document.createElement("h1");
    highscoreHead.textContent = "Highscores";

}

startBtn.addEventListener("click", startGame);