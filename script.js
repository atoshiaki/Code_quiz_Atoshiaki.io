// sB = startButton
const sB = document.getElementById("start-btn")
// nB = nextButton
const nB = document.getElementById("next-btn")
// qCE = questionContainerElement
const qCE = document.getElementById("questions-container")
// qE = questionElement
const qE = document.getElementById("questions")
// aBE = answerButtonsElement
const aBE = document.getElementById("answer-buttons")
// sQ = shuffledQuestions, cQI = currentQuestionIndex
let sQ, cQI

sB.addEventListener("click", startQuiz)
nB.addEventListener("click", () => {
  cQI++
  setNextQuestion()
})

function startQuiz() {
  sB.classList.add("hide")
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
  qE.innerText = questions.questions
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
  setStatusClass(document.body, correct)
  Array.from(aBE.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (nextButtonsQ.length > cQI + 1) {
    nB.classList.remove("hide")
  } else {
    sB.innerText = "Restart"
    sB.classList.remove("hide")
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

const questions = [
        {
        title: "when calling Javascript, what is the correct tag you would use?",
        choices: ["<div>", "<section>", "<script>", "<header>"],
        answer: "<script>"
    },
    {
        title: "The condition in an if/else statement is enclosed within ______.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Is JS case-sensitive?",
        choices: ["Yes", "No", "I have no clue", "Only when it feels like it."],
        answer: "Yes"
    },
        {
        title: "Which type of pop up box will allow a user to type a response?",
        choices: ["input", "prompt", "alert", "confirm"],
        answer: "prompt"
    },
]