import getQuizDomActions from "./quizDomActions.js";
import getQuizLogic from "./quizLogic.js";
import createQuizCompiler from "./quizCompiler.js";
import getSettingsHandler from "./settingsHandler.js";

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
    const hasQuizEnded = logic.checkForQuizEnd();
    const prevAnswer = logic.getAnswer();
    const isCorrect = logic.handleInput(answered);
    await quizDomActions.displayAnswerCheck(isCorrect, answerBoxId, prevAnswer);
    if(hasQuizEnded){
        quizDomActions.quizEnd(logic);
    }else{
        quizDomActions.updateQuestion(logic, checkAnswer);
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

