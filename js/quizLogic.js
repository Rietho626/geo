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

    updateActive(){
        this.activeQuestion = this.quiz.questions.shift();
    } 
 
    get answer(){
        return this.activeQuestion.answer;
    }

    get numCorrectQuestions(){
        return this.correctQuestions.length;
    } 

    get numWrongQuestions(){
        return this.wrongQuestions.length;
    }

    get time(){
        return this.quiz.time;
    } 

    get mode(){
        return this.quiz.mode;
    }

    get wrongAnswers(){
        return this.activeQuestion.wrongAnswers;  
    }  

    get question(){
        return this.activeQuestion.questionText;
    }

    get questionObject(){
        return this.activeQuestion.questionObject;
    } 

    get questionType(){
       return this.activeQuestion.questionCategory;
    }

    get answerType(){
        return this.activeQuestion.answerCategory;
    }

    get questionNr(){
        return this.correctQuestions.length + this.wrongQuestions.length + 1;
    }

    translate(str){
        const checkCountry = this.quiz.lang.countries[str];
        const checkCapital = this.quiz.tlOgCapitals[str];
        if(checkCountry){
            return checkCountry.translatedName;
        }else if(checkCapital){
            return checkCapital;
        }
        return str;
    }

    format(str){
        return Number.isFinite(Number(str)) ? new Intl.NumberFormat("at-AT").format(Number(str)) : this.translate(str);
    }

    checkAnswer(answer){
        const aType = this.answerType;
        const correctAnswer = this.answer;
        const numAnswer = Number(answer);
        if(Number.isFinite(numAnswer)){
            const numCorrAnswer = Number(correctAnswer);
            return (numAnswer >= numCorrAnswer * 0.95) && (numAnswer <= numCorrAnswer * 1.05);
        }else{
            const formattedAnswer = this.transliterate(answer);
            const formattedCorrectAnswer = this.transliterate(correctAnswer);
            if(aType === "capital"){
                const tlCapitalObj = this.quiz.tlCapitals[formattedAnswer];
                if(tlCapitalObj){
                    return (this.transliterate(this.quiz.allCountries[tlCapitalObj["country"]]["capital"]) === formattedCorrectAnswer || formattedAnswer === correctAnswer)
                }
            }else if(aType === "country"){
                const tlCountryObj = this.quiz.tlCountries[formattedAnswer];
                if(tlCountryObj){
                    return (tlCountryObj["country"] === formattedCorrectAnswer || formattedAnswer === formattedCorrectAnswer)
                }
            }
            return formattedAnswer === formattedCorrectAnswer;
        }
    }

    get hasQuizConcluded(){
        return !this.quiz.questions.length;
    }

    getDecrementor(time){
        return function(){
            time--;
            return time;
        }
    }

    transliterate(str){
        let word = str.toLowerCase();
        transliterate.forEach((val, key)=>{
           word = word.replaceAll(key, val);
        })
        return word;
    }

    validateInput(input){
        const aType = this.answerType;
        const formattedInput = this.transliterate(input);
        if(aType === "country"){
            return Boolean(this.quiz.allCountries[formattedInput] || this.quiz.tlCountries[formattedInput]);
        }else if(aType === "capital"){
            return Boolean(this.quiz.countriesByCapital[formattedInput] || this.quiz.tlCapitals[formattedInput]);
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