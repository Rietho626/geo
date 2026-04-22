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
            allCountries: this.transformCountriesObj(this.countries, "country"),
            countriesByCapital: this.transformCountriesObj(this.countries, "capital"),
            tlCountries: this.transformCountriesObj(this.settings.lang.countries, "country"),
            tlCapitals: this.transformCountriesObj(this.settings.lang.countries, "capital"),
            lang: this.settings.lang,
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

    getQuestionText(aType, mode){
        switch(aType){
            case "capital":
            console.log(mode, this.settings.lang.quiz)
            return this.settings.lang.quiz[(mode === "multiple-choice" ? "capitalMC" : "capitalTI")];
            case "country":
            return this.settings.lang.quiz["countryQ"];
            case "flag":
            return this.settings.lang.quiz["falgMC"];
            case "population":
            return this.settings.lang.quiz[(mode === "multiple-choice" ? "populationMC" : "populationTI")];
            case "area":
            return this.settings.lang.quiz[(mode === "multiple-choice" ? "areaMC" : "areaTI")];
        }
    }
    transliterate(str){
        let word = str.toLowerCase();
        transliterate.forEach((val, key)=>{
           word = word.replaceAll(key, val);
        })
        return word;
    }

    compileQuiz(){
        this.filterContinents();
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
                questionText: this.getQuestionText(qObject, aType, qObjectType, this.settings["quiz-mode"]),
                questionObject: qObject,
                answer: answer,
                wrongAnswers: this.settings["quiz-mode"] === "multiple-choice" ? this.getWrongAnswers(answer, aType) : false
            }   
            this.quizCountryNames[this.quizCountryNames.indexOf(rndCountry)] = this.quizCountryNames[0];
            this.quizCountryNames.shift();
            this.quiz.questions.push(activeQuestion);
        }
    }

    transformCountriesObj(obj, type){
        if(!obj) return {};
        const arr = Object.entries(obj).map(([key, value])=>{
            value["country"] = this.transliterate(key);
            if(value.translatedName){
                return (type === "capital")
                ? [this.transliterate(value.translatedCapital), value]
                : [this.transliterate(value.translatedName), value];
            }else{
                 return (type === "capital")
                ? [this.transliterate(value.capital), value]
                : [this.transliterate(key), value];
            }
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