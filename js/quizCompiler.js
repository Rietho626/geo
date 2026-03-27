import countries from "./countries.js";
import countryArray from "./countryArray.js";

export default function createQuizCompiler(quizSettings){
    return new QuizCompiler(quizSettings);
}

class QuizCompiler{
    constructor(quizSettings){
        this.settings = quizSettings;
        this.quizCountries = {};
        const continents = [
            "europe",
            "asia",
            "north-america",
            "south-america",
            "africa",
            "oceania",
            "antarctica"
        ];
        this.continents = [];
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
        if(this.continents.length !== 7){
            for(let country in countries){
                let isCountryElig = true;
                countries[country].continents.forEach(cc=>{
                    if(!this.continents.find(tc=>tc===cc.toLowerCase().replaceAll(" ", "-"))){
                        isCountryElig = false;
                    }
                })
                if(isCountryElig)this.quizCountries[country] = countries[country];
            }
        }
        console.log(this.quizCountries);
    }

    testSettings(){
        console.log(this.quiz)
    }

    getWrongAnswers(){
        
    }
}

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
            wrongAnswers: ["Prague", "Kopenhagen", "Lisbon"] // or false if different quiz mode
        },
        {
            questionMode: "multipleChoice", // or typeIn bzw. search
            questionType: "country->capital", // or capital->country, Maybe this is not needed
            questionText: "What is the capital of",
            questionObject: "Austria",
            answer: "Vienna",
            wrongAnswers: ["Prague", "Kopenhagen", "Lisbon"] // or false if different quiz mode
        }
    ]
    
}