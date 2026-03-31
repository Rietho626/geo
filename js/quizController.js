import getQuizDomActions from "./quizDomActions.js";
import getQuizLogic from "./quizLogic.js";
import createQuizCompiler from "./quizCompiler.js";
import getSettingsHandler from "./settingsHandler.js";

const settingsHandler = getSettingsHandler();
const quizDomActions = getQuizDomActions();
settingsHandler.enableListener(initiateQuiz);

function initiateQuiz(settings){
    const compiler = createQuizCompiler(settings);
    compiler.compileQuiz();
    const quiz = compiler.quiz;
    startingScreen(quiz);
}

function startingScreen(quiz){
    quizDomActions.startingScreen(quiz, startQuiz, resetForm);
}

async function checkAnswer(answered, logic, answerBoxId){
    const isCorrect = logic.handleInput(answered);
    await quizDomActions.displayAnswerCheck(isCorrect, answerBoxId, logic.getAnswer());
    quizDomActions.updateQuestion(logic, checkAnswer);
}

function nextQuestion(logic){

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

