/**
 * The Coding Game Javascript File
 */

 // Using DOM to target the quiz, start button, and score tracking section of game.
var quiz = document.getElementById("quiz");
var startBtn = document.getElementById("start-btn");
var score = document.getElementById("score-tracker");
var homeScreen = document.getElementById("home-screen");
var submit = document.getElementById("submit");
var goBack = document.getElementById("go-back");
var clear = document.getElementById("clear-score");
var questionElement = document.getElementById("questions");
var currentQuestion = 0;

// Using object method to store questions and answers
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

// A function to start the quiz and cycle through the questions
function startGame(){
    console.log("start game");
    // homeScreen.setAttribute("class", "hide");
   if (homeScreen.style.display.none === ""){
        homeScreen.style.display 
   }
   theQuiz();
}

// Function for the quiz
function theQuiz(){
    var h2El = document.createElement("h2");
    h2El.textContent = qna[currentQuestion].question
    questionElement.appendChild(h2El);
    console.log(qna[currentQuestion].question)
    for (i = 0; i < qna[currentQuestion].choices.length; i++) {
        var buttonOne = document.createElement("button");
        buttonOne.textContent = qna[currentQuestion].choices[i]
        
        
        //change to javascript for adding an element
        // questionItems.text(qna[i]);
        //change to javascript for appending
        
        console.log(qna[currentQuestion].choices[i]);
    }
}

// Function to get the results of the quiz
function theScore(){}


document.getElementById("submit").onClick

// This event listener is going to be linked to a function that is created to show the results of a user taking the quiz.
score.addEventListener("click", function(){
    // insert the logic here
});
document.getElementById("start-btn").onClick = startGame;