/**
 * The Coding Game Javascript File
 */

 // Global Elements are used throughout the js script. I am getting elements from my html page.
var startBtn = document.getElementById("start-btn");
var score = document.getElementById("score-tracker");
var homeScreen = document.getElementById("home-screen");
var submit = document.getElementById("submit");
var goBack = document.getElementById("go-back");
var clear = document.getElementById("clear-score");
var questionElement = document.getElementById("questions");
var theTimer = document.getElementById("timer");
var currentQuestion = 0;
var timeLeft = 60;

// Start game. A function that clears the homescreen and calls the quiz and timer.
function startGame(){

    // I am creating a function that starts the game when button is clicked. First, I call the document and get the "welcome" div element by id. Then I set the id to .innerHTML so that I can replace the content. I replace the content with "" so that there is nothing inside of the div.
    document.getElementById("home-screen").innerHTML = "";

    // I then want to target the start button. I call the document and get the #start-btn. I add an event listener to the string so that an action is taken when #start-btn is clicked. I set the arguments to "click" as the event type and then lastly outside of the callback function i insert a call to the startGame() function itself.
    startBtn.addEventListener("click", function(){
        console.log("this function is working");
    });
    theQuiz();
    timer();
}

// Timer. The timer was based off of an activity done in class. I am using a function that contains a variable describing the time left and another variable that defines the interval of time that is being counted down. the last part of this function is a conditional statement that clears the interval after it has reached zero.
function timer(){
    var interval = setInterval(function()
    {theTimer.textContent = timeLeft + " seconds left.";
    timeLeft--;

    if (timeLeft === 0){
        theTimer.textContent = "";
        clearInterval(interval);
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
    h2El.textContent = qna[currentQuestion].question
    questionElement.appendChild(h2El);
    console.log(qna[currentQuestion].question);
    for (i = 0; i < qna[currentQuestion].choices.length; i++) {
        console.log(qna[currentQuestion].choices[i]);
        var buttonEl = document.createElement("button");
        questionElement.append(buttonEl);
        buttonEl.textContent = qna[currentQuestion].choices[i];
        buttonEl.style.display= "block";
        buttonEl.style.margin= "10px";
        buttonEl.addEventListener("click", quizButtons);
        }
}

function quizButtons(){
    if (qna[currentQuestion].answer === event.target.textContent){
            console.log("correct!");

    } else {
        timeLeft-=15;
    };
    if (currentQuestion < qna.length-1){
        currentQuestion++;
        theQuiz();
    //local storage information goes into this else statement.
    }else {
        
    }
}

// Function to get the results of the quiz
function theScore(){}

function highScores(){}

startBtn.addEventListener("click", startGame);