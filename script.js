const startButton = document.getElementById("start-btn")
const questionConttainerElement = document.getElementById("question-contianer")

startButton.addEventListener("click", startQuiz)
//start quiz
function startQuiz(){
    console.log("start")
    startButton.classList.add("hide")
    questionConttainerElement.classList.remove("hide")
}
function startNextQuestion(){

}
function myAnswer(){

}
const question = [
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
        title: "What is the syntax for referencing an external script called 'abc.js'?",
        choices: ["<script class='abc.js'>", "<script href='abc.js'>", "<script link='abc.js'>", "<script src='abc.js'>"],
        answer: "<script src='abc.js'>"
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