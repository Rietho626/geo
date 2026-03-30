import getQuizDomActions from "./quizDomActions";
import getQuizLogic from "./quizLogic";
import createQuizCompiler from "./quizCompiler";
import getSettingsHandler from "./js/settingsHandler";

const settingsHandler = getSettingsHandler();
settingsHandler.enableListener(initiateQuiz);

function initiateQuiz(settings){
    const compiler = createQuizCompiler(settings);
    compiler.compileQuiz();
    const quiz = compiler.quiz;
    scopeTest(quiz);
}

function scopeTest(quiz){
    console.log(quiz)
}

