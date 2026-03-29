import countries from "./countries.js";
//import countryArray from "./countryArray.js";

export default function createQuizCompiler(quizSettings){
    return new QuizCompiler(quizSettings);
}

class QuizCompiler{
    constructor(quizSettings){
        this.settings = quizSettings;
        this.quizCountries = {};
        this.quizCountryNamesAll = [];
        this.quizCountryNames = [];
        this.continents = [];
        const continents = [
            "europe",
            "asia",
            "north-america",
            "south-america",
            "africa",
            "oceania"
        ];
        
        if(this.settings["continents"]){
            continents.forEach(continent=>{
                if(this.settings["continents"].includes(continent)){
                    this.continents.push(continent);
                }
            })
        }else{
            this.continents = continents;
        }
        this.quiz = {
            time: this.settings["time-questions"],
            numQuestions: this.settings["num-questions"],
            continents: this.continents,
            questions: []
        }
    }

    filterContinents(){
            for(let country in countries){
                let isCountryElig = true;
                countries[country].continents.forEach(cc=>{
                    if(!this.continents.find(tc=>tc===cc.toLowerCase().replaceAll(" ", "-"))){
                        isCountryElig = false;
                    }
                })
                if(isCountryElig){
                    this.quizCountries[country] = countries[country]
                    this.quizCountryNamesAll.push(country);
                    this.quizCountryNames.push(country);               
                };
            }
        
        console.log(this.quizCountries);
    }

    testSettings(){
        console.log(this.settings)
    }

    getWrongAnswers(answer, answerType, numAnswers = 4){
        const wrongAnswers = [];
        while(wrongAnswers.length < numAnswers-1){
            const rndCountry = this.quizCountryNamesAll[Math.floor(Math.random()*this.quizCountryNamesAll.length)];
            const wrongAnswer = answerType === "country" ? rndCountry : this.quizCountries[rndCountry][answerType];
            if(!wrongAnswers.includes(wrongAnswer) && wrongAnswer!==answer){
                wrongAnswers.push(wrongAnswer);
            }
        }
        return wrongAnswers;
    }

    getQuestionType(){
        const types = quizTypes.get(this.settings["topic"]);
        return this.settings["quiz-q-type"] === "mixed"
                ? types[Math.floor(Math.random()*types.length)]
                : this.settings["quiz-q-type"];
    }

    getQuestionText(qObject, aType, qType){
        switch(aType){
            case "capital":
            return `What is the capital of ${qObject}?`;
            case "country":
            return `Find the country, whose ${qType} is ${qObject}!`;
            case "flag":
            return `Which Flag is the Flag of ${qObject}?`;
        }
    }

    compileQuiz(){
        while(this.quiz.questions.length < this.quiz.numQuestions){
            const rndCountry = this.quizCountryNames[Math.floor(Math.random()*this.quizCountryNames.length)];
            const qType = this.getQuestionType();
            const aType = qType.split("-")[1];
            const qObjectType = qType.split("-")[0];
            const answer = aType === "country" ? rndCountry : this.quizCountries[rndCountry][aType];
            const qObject = qObjectType === "country" ? rndCountry : this.quizCountries[rndCountry][qObjectType];

            const activeQuestion = {
                questionMode: this.settings["quiz-mode"], //maybe mixed question modes will be enabled in the future
                questionType: qType,
                questionText: this.getQuestionText(qObject, aType, qObjectType),
                questionObject: qObject,
                answer: answer,
                wrongAnswers: this.settings["quiz-mode"] === "multiple-choice" ? this.getWrongAnswers(answer, aType) : false
            }   
            this.quizCountryNames[this.quizCountryNames.indexOf(rndCountry)] = this.quizCountryNames[0];
            this.quizCountryNames.shift();
            this.quiz.questions.push(activeQuestion);
        }
        console.log(this.quiz);
    }
}

const quizTypes = new Map(
    [
        ["capital", ["country-capital", "capital-country"]]
    ]
)



const quizOutputModel = {

    time: "10",
    numQestions: "40",
    continents: ["euprope", "africa"],
    questions:[
        {
            questionMode: "multipleChoice", // or typeIn bzw. search
            questionType: "country->capital", // or capital->country, Maybe this is not needed
            questionText: "What is the capital of",
            questionObject: "Austria",
            answer: "Vienna",
            wrongAnswers: ["Prague", "Copenhagen", "Lisbon"] // or false if different quiz mode
        },
        {
            questionMode: "multipleChoice", // or typeIn bzw. search
            questionType: "country->capital", // or capital->country, Maybe this is not needed
            questionText: "What is the capital of",
            questionObject: "Austria",
            answer: "Vienna",
            wrongAnswers: ["Prague", "Copenhagen", "Lisbon"] // or false if different quiz mode
        }
    ]
    
}