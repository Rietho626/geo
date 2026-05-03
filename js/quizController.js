import getQuizDomActions from "./quizDomActions.js";
import getQuizLogic from "./quizLogic.js";
import createQuizCompiler from "./quizCompiler.js";
import getSettingsHandler from "./settingsHandler.js";
import languagePack from "./settings/languagePack.js";
import updateLang from "./updateLang.js";
import applyMenuListeners from "./menus.js";

applyMenuListeners(languagePack);

let settingsHandler = getSettingsHandler(languagePack);
let quizDomActions = getQuizDomActions(languagePack);
settingsHandler.enableSettingsListener(initiateQuiz);
settingsHandler.enableNavListener();

function initiateQuiz(settings){
    const compiler = createQuizCompiler(settings);
    const compilerResponse = compiler.compileQuiz();
    if(compilerResponse === true){
        const quiz = compiler.quiz;
        startingScreen(quiz);
    }else{
        window.alert(compilerResponse)
    }  
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

