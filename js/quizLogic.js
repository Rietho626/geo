import transliterate from "./transliterate.js";
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

    updateActive = () => this.activeQuestion = this.quiz.questions.shift();

    getAnswer = () => this.activeQuestion.answer;

    getNumCorrectQuestions = () => this.correctQuestions.length;

    getNumWrongQuestions = () => this.wrongQuestions.length;

    getTime = () => this.quiz.time;

    getMode = () => this.quiz.mode;

    getWrongAnswers = () => this.activeQuestion.wrongAnswers;    

    getQuestion = () => this.activeQuestion.questionText;

    getQuestionObject = () => this.activeQuestion.questionObject;

    getAnswerType = () => this.activeQuestion.questionType.split("-")[1];

    getQuestionNr = () => this.correctQuestions.length + this.wrongQuestions.length + 1;

    checkAnswer = (answer) => this.transliterate(answer.toLowerCase()) === this.transliterate(this.activeQuestion.answer.toLowerCase());

    checkForQuizEnd = () => (!this.quiz.questions.length) ? true : false;

    getDecrementor(time){
        return function(){
            time--;
            return time;
        }
    }

    transliterate(str){
        let word = str;
        transliterate.forEach((val, key)=>{
           word = word.replaceAll(key, val);
        })
        return word;
    }

    validateInput(input){
        const aType = this.getAnswerType();
        const formattedInput = this.transliterate(input.toLowerCase());
        if(aType === "country"){
            return (this.quiz.allCountries[formattedInput] || this.quiz.tlCountries[formattedInput]) ? true : false;
        }else if(aType === "capital"){
            return (this.quiz.countriesByCapital[formattedInput] || this.tlCapitals[formattedInput]) ? true : false;
        }
    }

    handleInput(answer){
        const isCorrect = this.checkAnswer(answer);
        isCorrect ? this.correctQuestions.push(this.activeQuestion) :  this.wrongQuestions.push(this.activeQuestion);
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