export default function getQuizLogic(quiz){
    return new QuizLogic(quiz);
}

class QuizLogic{
    constructor(quiz){
        this.quiz = quiz;
        this.wrongQuestions = [];
        this.correctQuestions = []; 
        this.activeQuestion = quiz.questions.shift();
    }

    getAnswer = () => this.activeQuestion.answer;

    getNumCorrectQuestions = () => this.correctQuestions.length;

    getNumWrongQuestions = () => this.wrongQuestions.length;

    getTime = () => this.activeQuestion.time;

    getMode = () => this.quiz.mode;

    getWrongAnswers = () => this.activeQuestion.wrongAnswers;    

    getQuestion = () => this.activeQuestion.questionText;

    getQuestionNr = () => this.correctQuestions.length + this.wrongQuestions.length + 1;

    checkAnswer = (answer) => answer === this.activeQuestion.answer;

    handleInput(answer){
        const isCorrect = this.checkAnswer(answer);
        isCorrect ? this.correctQuestions.push(this.activeQuestion) :  this.wrongQuestions.push(this.activeQuestion);

        this.activeQuestion = this.quiz.questions.unshift();
        return isCorrect;
    }

    randomizeAnswers(answers, randomAnswers = []){
        if(randomAnswers.length == 4){
            return randomAnswers;
        }else{
            const rndm = answers[Math.floor(Math.random()*answers.length)];
            answers[answers.indexOf(rndm)] = answers[0];
            answers.shift();
            randomAnswers.push(rndm);
            return this.randomizeAnswers(answers, randomAnswers);
        }
    }

}