/**
 * The Coding Game Javascript File
 */

 // Using DOM to target the quiz, start button, and score tracking section of game.
var quiz = document.getElementById("quiz");
var startBtn = document.getElementById("start-btn");
var score = document.getElementById("score-tracker");
var homeScreen = document.getElementById("home-screen");
var currentQuestion = 0;

// Using object method to store questions and answers
var qna = [
    {
        QuestionOne: "Commonly used data types DO NOT include:",
        1:"strings",
        2:"booleans",
        3:"alerts",
        4:"numbers",
        answer:"alerts"
    },

    {
        QuestionTwo: "The condition in an if / else statement is enclosed within ______.",
        1:"Quotes",
        2:"curly brackets",
        3:"parentheses",
        4:"square brackets"
    },

    {
        QuestionThree: "Arrays in JavaScript can be used to store ______.",
        1:"numbers and strings",
        2:"other arrays",
        3:"booleans",
        4:"all of the above"
    },

    {
        QuestionFour: "String values must be enclosed within ______ when being assigned to variables.",
        1:"commas",
        2:"curly brackets",
        3:"quotes",
        4:"parentheses"
    },

    {
        QuestionFive:"A very useful tool used during development and debugging for printing content to the debugger is:",
        1:"JavaScript",
        2:"terminal/bash",
        3:"for loops",
        4:"console.log"
    }
];

// A function to start the quiz and cycle through the questions
function startGame(){
    // homeScreen.setAttribute("class", "hide");
}

// Function for the quiz
function theQuiz(){}

// Function to get the results of the quiz
function theScore(){}

// calling the quiz
theQuiz();

// This event listener is going to be linked to a function that is created to show the results of a user taking the quiz.
score.addEventListener("click", function(){
    // insert the logic here
});
