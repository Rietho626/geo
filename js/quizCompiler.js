import countries from "./countries.js";
import transliterate from "./transliterate.js";

export default function createQuizCompiler(quizSettings){
    return new QuizCompiler(quizSettings);
}

class QuizCompiler{
    constructor(quizSettings){
        this.settings = quizSettings;
        this.countries = countries;
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
            topic: this.settings["topic"],
            mode: this.settings["quiz-mode"],
            type: this.settings["quiz-q-type"],
            continents: this.continents,
            allCountries: this.countries,
            countriesByCapital: QuizCompiler.transformCountriesObj(this.countries),
            questions: []
        }
        console.log(this.quiz);
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
    }

    getWrongAnswers(answer, answerType, numAnswers = 4){
        const wrongAnswers = [];
        while(wrongAnswers.length < numAnswers-1){
            const rndCountry = this.quizCountryNamesAll[Math.floor(Math.random()*this.quizCountryNamesAll.length)];
            const wrongAnswer = answerType === "country" ? rndCountry : this.quizCountries[rndCountry][answerType];
            if(!wrongAnswers.includes(wrongAnswer) && wrongAnswer!==answer){
                wrongAnswers.push(this.format(wrongAnswer));
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
            return `Which flag is the flag of ${qObject}?`;
            case "population":
            return `What is the population of ${qObject}? (2026)`;
            case "area":
            return `What is the area of ${qObject} in square Kilometer?`;
        }
    }
    transliterate(str){
        let word = str;
        transliterate.forEach((val, key)=>{
           word = word.replaceAll(key, val);
        })
        return word;
    }

    format = (str) => Boolean(Number(str)) ? new Intl.NumberFormat("at-AT").format(Number(str)) : str;

    compileQuiz(){
        this.filterContinents();
        while(this.quiz.questions.length < this.quiz.numQuestions){
            const rndCountry = this.quizCountryNames[Math.floor(Math.random()*this.quizCountryNames.length)];
            const qType = this.getQuestionType();
            const aType = qType.split("-")[1];
            const qObjectType = qType.split("-")[0];
            const answer = aType === "country" ? rndCountry : this.format(this.quizCountries[rndCountry][aType]);
            const qObject = qObjectType === "country" ? rndCountry : this.format(this.quizCountries[rndCountry][qObjectType]);

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
    }

    static transformCountriesObj(obj){
        const arr = Object.entries(obj).map(([key, value])=>{
            value["country"] = key;
            return [this.transliterate(value.capital.toLowerCase()), value];
        })
        return Object.fromEntries(arr);
    }
}

const quizTypes = new Map(
    [
        ["capital", ["country-capital", "capital-country"]],
        ["flag", ["country-flag"]],
        ["population", ["country-population", "population-country"]],
        ["area", ["country-area", "area-country"]]
    ]
)


/*
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

*/