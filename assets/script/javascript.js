/**
 * The Coding Game Javascript File
 */

// Global Elements are used throughout the js script.
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
    var interval = setInterval(function(){
        theTimer.textContent = timeLeft + " seconds left.";
        timeLeft--;
        if (timeLeft <= 0){
        theTimer.textContent = "";
        clearInterval(interval);
        endOfQuiz();
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
    if (currentQuestion < 4){
        var h2El = document.createElement("h2");
    questionElement.textContent = "";
    questionElement.style.display = "block";
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
    
    }
    if (currentQuestion === 4) {
        qna[currentQuestion].answer.onClick = questionElement.textContent = "";
        alert("Correct!");
        endOfQuiz();
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
}

// Function to get the results of the quiz. After the last answer is chosen, the quiz is cleared, "game over is displayed", my final score is displayed, and a box for entering in my initials is displayed.
function endOfQuiz(){

    function theScore(){
        enterInitials.style.display= "block";
    }
    // function highScores(){
    //     var highscoreHead = document.createElement("h1");
    //     highScores.textContent = "";
    //     highscoreHead.textContent = "Highscores";
    
    // }
    theScore();
}

// setting up local storage that will run along with the quiz to store the results....
// in this first line of code I am declaring a variable that is equal to my object variable containing my questions
var storage = JSON.stringify(qna);
// now I am going to create a variables that takes apart the stringify and makes it look like a regular object again
var storageOrganized = JSON.parse(localStorage.getItem("qna"));
// now I am going to set up the local storage so that it displays the value of 'qna' in the console when the web page is opened
localStorage.setItem("qna", storage);
// After my initials have been entered in and the "submit" button has been clicked, the highscore page appears and lets me see my score and the score of anyone else that has taken the quiz also. The information is stored in local storage.
function highScores(){
    var highscoreHead = document.createElement("h1");
    highScores.textContent = "";
    highscoreHead.textContent = "Highscores";

}

startBtn.addEventListener("click", startGame);

 