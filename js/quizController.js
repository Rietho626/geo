import getQuizDomActions from "./quizDomActions.js";
import getQuizLogic from "./quizLogic.js";
import createQuizCompiler from "./quizCompiler.js";
import getSettingsHandler from "./settingsHandler.js";
import languagePack from "./settings/languagePack.js";
import updateLang from "./updateLang.js";

const settingsLink = document.getElementById("theme-settings");
const settingsUl = document.getElementById("settings-ul");
const themesUl = document.getElementById("themes-ul");
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
    }else if(e.target.id.endsWith("-theme")){
        activateTheme(e.target.id.split("-")[0]);
    }else if(e.target.id.startsWith("lang-")){
        updateLang(languagePack, (languages.get(e.target.id) ?? "english"));
    }
})

const themes = new Map([
    ["base", "baseTheme.css"],
    ["sunset", "sunsetTheme.css"]
])

const languages = new Map([
    ["lang-en", "english"],
    ["lang-de", "german"]
])

function activateTheme(theme){
    settingsLink.href = "./css/" + themes.get(theme);
    localStorage.setItem("theme", themes.get(theme))
}


let settingsHandler = getSettingsHandler(languagePack);
let quizDomActions = getQuizDomActions(languagePack);
settingsHandler.enableSetttingsListener(initiateQuiz);
settingsHandler.enableNavListener();

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
    const isCorrect = logic.handleInput(answered);
    if(answered !== "timeout"){
        await quizDomActions.displayAnswerCheck(isCorrect, answerBoxId, logic.getAnswer());
    }
    if(hasQuizEnded){
        quizDomActions.quizEnd(logic);
    }else{
        logic.updateActive();
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

