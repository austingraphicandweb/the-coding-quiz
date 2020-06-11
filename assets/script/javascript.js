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
    var timeLeft = 60;
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
        answer:"alerts"
    },

    {
        question: "The condition in an if / else statement is enclosed within ______.",
        1:"Quotes",
        2:"curly brackets",
        3:"parentheses",
        4:"square brackets"
    },

    {
        question: "Arrays in JavaScript can be used to store ______.",
        1:"numbers and strings",
        2:"other arrays",
        3:"booleans",
        4:"all of the above"
    },

    {
        question: "String values must be enclosed within ______ when being assigned to variables.",
        1:"commas",
        2:"curly brackets",
        3:"quotes",
        4:"parentheses"
    },

    {
       question:"A very useful tool used during development and debugging for printing content to the debugger is:",
        1:"JavaScript",
        2:"terminal/bash",
        3:"for loops",
        4:"console.log"
    }
];

// The quiz
function theQuiz(){
    var h2El = document.createElement("h2");
    h2El.textContent = qna[currentQuestion].question
    questionElement.appendChild(h2El);
    console.log(qna[currentQuestion].question);
    for (i = 0; i < qna[currentQuestion].choices.length; i++) {
        var buttonOne = document.createElement("button");
        buttonOne.textContent = qna[currentQuestion].choices[i];
        //change to javascript for adding an element
        // questionItems.text(qna[i]);
        //change to javascript for appending
        
        console.log(qna[currentQuestion].choices[i]);
    }
}

// Function to get the results of the quiz
function theScore(){}

startBtn.addEventListener("click", startGame);