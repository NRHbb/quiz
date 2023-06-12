const questions = [
    {
        question: "Which programming language is used for adding interactivity and dynamic behavior to a webpage?",
        answers: [
            {text:"HTML", correct:false},
            {text:"CSS", correct:false},
            {text:"JavaScript", correct:true},
            {text:"PHP", correct:false},
        ]
    },
    {
        question: "Which JavaScript method is used to add an element to the end of an array?",
        answers: [
            {text:"pop()", correct:false},
            {text:"push()", correct:true},
            {text:"shift()", correct:false},
            {text:"unshift()", correct:false},
        ]
    },
    {
        question: "Which CSS property is used to change the background color of an element",
        answers: [
            {text:"color", correct:false},
            {text:"background-color", correct:true},
            {text:"font-color", correct:false},
            {text:"text-color", correct:true},
        ]
    },
    {
        question: "Which HTML attribute is used to specify the source of an image?",
        answers: [
            {text:"src", correct:true},
            {text:"href", correct:false},
            {text:"alt", correct:false},
            {text:"img", correct:false},
        ]
    },
    {
        question: "How do you write a single-line comment in Javascript",
        answers: [
            {text:"(This is a comment)", correct:false},
            {text:"// This is a comment", correct:true},
            {text:"/* This is a comment */", correct:false},
            {text:"## This is a comment", correct:false},
        ]
    },
    {
        question: "Which JavaScript method is used to change the text content of an HTML element?",
        answers: [
            {text:"getElementById()", correct:false},
            {text:"innerHTML", correct:true},
            {text:"addEventListener()", correct:false},
            {text:"appendChild()", correct:false},
        ]
    },
    {
        question: "How do you declare a variable in JavaScript?",
        answers: [
            {text:"var myVariable", correct:false},
            {text:"variable myVariable", correct:false},
            {text:"let myVariable", correct:true},
            {text:"const myVariable", correct:false},
        ]
    },
    {
        question: "What is the correct syntax for creating a function in JavaScript?",
        answers: [
            {text:"function myFunction()", correct:true},
            {text:"myFunction()", correct:false},
            {text:"create function myFunction()", correct:false},
            {text:"function = myFunction()", correct:false},
        ]
    },
    {
        question: "Which JavaScript function is used to select an HTML element by its ID?",
        answers: [
            {text:"querySelector()", correct:false},
            {text:"selectElementByID()", correct:false},
            {text:"getElementsByClass()", correct:false},
            {text:"getElementById()", correct:true},
        ]
    },
    {
        question: "Which JavaScript method is used to convert a string to an integer?",
        answers: [
            {text:"toInt()", correct:false},
            {text:"parseInteger()", correct:false},
            {text:"parseInt()", correct:true},
            {text:"convertToInt()", correct:false},
        ]
    },
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-btn");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
} 

function showQuestion(){
    resetState()
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Your Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block"
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    } else {
        startQuiz()
    }
})

startQuiz();


// versi refaktor
// const questionElement = document.getElementById("question");
// const answerButton = document.getElementById("answer-btn");
// const nextButton = document.getElementById("next-btn");
// const resetButton = document.getElementById("reset-btn");


// let currentQuestionIndex = 0;
// let score = 0;

// function startQuiz() {
//     currentQuestionIndex = 0;
//     score = 0;
//     nextButton.innerHTML = "Next";
//     showQuestion();
// }

// function showQuestion() {
//     const currentQuestion = questions[currentQuestionIndex];
//     const questionNo = currentQuestionIndex + 1;
//     questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;

//     answerButton.innerHTML = "";
//     currentQuestion.answers.forEach(answer => {
//         const button = document.createElement("button");
//         button.innerHTML = answer.text;
//         button.classList.add("btn");
//         button.addEventListener("click", () => {
//             if (answer.correct) {
//                 score++;
//             }
//             currentQuestionIndex++;
//             if (currentQuestionIndex < questions.length) {
//                 showQuestion();
//             } else {
//                 finishQuiz();
//             }
//         });
//         answerButton.appendChild(button);
//     });

//     resetButton.addEventListener("click", () => {
//         startQuiz();
//         resetButton.style.display = "none";
//     });
// }

// function finishQuiz() {
//     questionElement.innerHTML = "Quiz finished!";
//     answerButton.innerHTML = `Your score: ${score}/${questions.length}`;
//     nextButton.style.display = "none";
//     resetButton.style.display = "block";
// }

// startQuiz();