// sB = startButton
const sB = document.getElementById("start-btn")
// nB = nextButton
const nB = document.getElementById("next-btn")
// hSB = highScoreButton
const hSB = document.getElementById("highScore-btn")
// hSB = highScoreButton
const save = document.getElementById("save-btn")
// qCE = questionContainerElement
const qCE = document.getElementById("questions-container")
// qE = questionElement
const qE = document.getElementById("questions")
// aBE = answerButtonsElement
const aBE = document.getElementById("answer-buttons")
// sQ = shuffledQuestions, cQI = currentQuestionIndex
let sQ, cQI
var base = document.getElementById("score");
// link to highscore.html
document.getElementById("highScore-btn").onclick = function(){
    location.href = "highscores.html";
}
sB.addEventListener("click", startQuiz)
nB.addEventListener("click", () => {
  cQI++
  setNextQuestion()
})

function startQuiz() {
    sB.classList.add("hide")
    hSB.classList.add("hide")
    sQ = questions.sort(() => Math.random() - .5)
    cQI = 0
    qCE.classList.remove("hide")
    setNextQuestion()
}

function setNextQuestion() {
    reset()
    showQuestion(sQ[cQI])
}

function showQuestion(questions) {
    qE.innerText = questions.question
    questions.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        aBE.appendChild(button)
    })
}

function reset() {
    clearStatusClass(document.body)
    nB.classList.add("hide")
    while (aBE.firstChild) {
        aBE.removeChild(aBE.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    adjustScore(correct)
    setStatusClass(document.body, correct)
    Array.from(aBE.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (sQ.length > cQI + 1) {
        nB.classList.remove("hide")
    } else {
    sB.innerText = "Restart"
    sB.classList.remove("hide")
    save.classList.remove("hide")
    hSB.classList.remove("hide")
    }
}
function adjustScore (correct){
    var score = base.innerHTML;
    var add = 25;
    if(correct){
        points = score + add
        console.log("yay")
    } else{
        console.error()
    }
}
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
}
function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}
function saveScore(){
    localStorage.setItem("name", base.val());
}
var stored = localStorage.getItem("name", base);
const questions = [
        {
        question: "when calling Javascript, what is the correct tag you would use?",
        answers: [
            { text: "<div>", correct: false},
            { text: "<section>", correct: false},
            { text: "<script>", correct: true },
            { text: "<header>", correct: false}
        ]
    },
    {
        question: "The condition in an if/else statement is enclosed within ______.",
        answers: [
            { text: "quotes", correct: false},
            { text: "brackets", correct: false},
            { text: "parentheses", correct: true},
            { text: "square brackets", correct: false}
        ]
    },
    {
        question: "Is JavaScript case-sensitive?",
        answers: [
            { text: "Yes", correct: true},
            { text: "No", correct: false},
            { text: "Idk", correct: false},
            { text: "depends", correct: false}
        ]
    },
        {
        question: "Which type of pop up, allows a user to type a response?",
        answers: [
            { text: "input", correct: false},
            { text: "prompt", correct: true},
            { text: "alert", correct: false},
            { text: "confirm", correct: false}
        ]
    }
]