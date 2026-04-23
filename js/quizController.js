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
const expandTopics = document.getElementById("expand-topics");
const navUl = document.querySelector("#cover > ul");

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

expandTopics.addEventListener("click", (e)=>{
    console.log(document.documentElement.clientWidth);
    navUl.style.transform = "translateX(0px)";
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
settingsHandler.enableSettingsListener(initiateQuiz);
settingsHandler.enableNavListener();

function initiateQuiz(settings){
    const compiler = createQuizCompiler(settings);
    compiler.compileQuiz();
    const quiz = compiler.quiz;
    startingScreen(quiz);
}

function startingScreen(quiz){
    quizDomActions.startingScreen(quiz, startQuiz);
}

async function checkAnswer(answered, logic, answerBoxId){
    quizDomActions.stopTimer();
    quizDomActions.toggleEnabled(false);
    const hasQuizEnded = logic.hasQuizConcluded;
    const isCorrect = logic.handleInput(answered);
    if(answered !== "timeout"){
        await quizDomActions.displayAnswerCheck(isCorrect, answerBoxId, logic.answer);
    }
    if(hasQuizEnded){
        quizDomActions.quizEnd(logic);
    }else{
        logic.updateActive();
        quizDomActions.updateQuestion(logic, checkAnswer);
        quizDomActions.toggleEnabled(true);
    }
}

function startQuiz(quiz){
    const logic = getQuizLogic(quiz);
    quizDomActions.resetQuiz();
    quizDomActions.constructQuiz(logic.mode, checkAnswer);
    quizDomActions.updateQuestion(logic, checkAnswer);
    quizDomActions.enabled = true;
}

