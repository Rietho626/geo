import getQuizDomActions from "./quizDomActions.js";
import getQuizLogic from "./quizLogic.js";
import createQuizCompiler from "./quizCompiler.js";
import getSettingsHandler from "./settingsHandler.js";

const settingsLink = document.getElementById("theme-settings");
const settingsUl = document.getElementById("settings-ul");
const themesUl = document.getElementsByTagName("themes-ul");
const languagesUl = document.getElementById("languages-ul");

const settings = document.getElementById("settings");

settingsLink.href = "./css/" + (localStorage.getItem("theme") || "baseTheme.css")

settings.addEventListener("click", (e)=>{
    if(e.target.id === "settings-button"){
        settingsUl.classList.toggle("invisible");
    }else if(e.target.id === "themes-button"){
        themesUl.classList.toggle("invisible");
    }else if(e.target.id === "languages-button"){
        languagesUl.classList.toggle("invisible");
    }
})

let settingsHandler = getSettingsHandler();
let quizDomActions = getQuizDomActions();
settingsHandler.enableListener(initiateQuiz);

function initiateQuiz(settings){
    const compiler = createQuizCompiler(settings);
    compiler.compileQuiz();
    const quiz = compiler.quiz;
    startingScreen(quiz);
}

function startingScreen(quiz){
    quizDomActions.startingScreen(quiz, startQuiz, newQuiz);
}

async function checkAnswer(answered, logic, answerBoxId){
    quizDomActions.stopTimer();
    quizDomActions.toggleEnabled(false);
    const hasQuizEnded = logic.checkForQuizEnd();
    const prevAnswer = logic.getAnswer();
    const isCorrect = logic.handleInput(answered);
    if(answered !== "timeout"){
        await quizDomActions.displayAnswerCheck(isCorrect, answerBoxId, prevAnswer);
    }
    if(hasQuizEnded){
        quizDomActions.quizEnd(logic);
    }else{
        quizDomActions.updateQuestion(logic, checkAnswer);
        quizDomActions.toggleEnabled(true);
    }
}

function newQuiz(){
    quizDomActions = getQuizDomActions();
    settingsHandler = getSettingsHandler();
    settingsHandler.enableListener(initiateQuiz);
}

function startQuiz(quiz){
    const logic = getQuizLogic(quiz);
    quizDomActions.resetQuiz();
    quizDomActions.constructQuiz(logic.getMode(), checkAnswer);
    console.log(logic.quiz, logic.activeQuestion)
    quizDomActions.updateQuestion(logic, checkAnswer);
}

function resetForm(){

}

