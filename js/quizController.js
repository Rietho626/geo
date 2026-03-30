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

function startQuiz(quiz){
    const logic = getQuizLogic(quiz);
    quizDomActions.resetQuiz();
    quizDomActions.constructQuiz(logic.getMode());
    quizDomActions.updateQuestion(logic);
}

function resetForm(){

}

