const languagePack =  {
    "english": {
        "settings":{
            settings: "Settings",
            themes: "Themes",
            languages: "Languages",
            sunsetTheme: "Sunset Theme",
            baseTheme: "Base Theme",
            english: "English",
            german: "German"
        },
        "nav":{
            chooseQuizTopic: "Choose Quiz Topic",
            flags: "Flags",
            capitals: "Capitals",
            population: "Population",
            area: "Area"
        },
        "main":{
            createQuiz: "Create Quiz",
            chooseAboveMsg: "Select a Quiz-Topic above to get started!"
        },
        "startingScreen":{
            heading: "Quiz",
            questionModeContainer: "Question Mode: ",
            questionTypeContainer: "Question Type: ",
            timeLimitContainer: "Time per Question: ",
            numQuestionsContainer: "Number of Questions: ",
            continentContainer: "Continents: ",
            startQuizButton: "Start Quiz",
            createNewQuizButton: "Create New Quiz"
        },
        "continents":{
            europe: "Europe",
            asia: "Asia",
            "north-america": "North America",
            "south-america": "South America",
            africa: "Africa",
            oceania: "Oceania"
        },
        "quiz":{
            correctQuestions: "Correct",
            wrongQuestions: "Incorrect",
            heading: "Question ",
            typeInSubmit: "Submit Answer",
            typeInInvalid: "This is not a valid answer!",
            typeInValid: "This is a valid answer!",
            typeInCorrect: {
                "default": ["Correct! Nicely done!", "Correct! Good Job!"],
                "capital": ["Correct! True Capitalist!", "Now that's Capitalism!", "CORRECT CAPITAL"],
                "flag": ["Flagster!"],
                "population": ["Mousehold, Population Bomb! Wow, 10 Hits!"],
                "area": ["Nice! Area 51!"]
            },
            typeInIncorrect: {
                "default": ["Incorrect! Ooops!", "Had some bad luck at thinking, huh?"],
                "capital": ["Incorrect! You must be a Communist!", "Capitalism looks a little different to me!", "incorrect capital"],
                "flag": ["You got flagged!"],
                "population": ["Mousehold, Population Bomb! No, it missed!"],
                "area": ["You are no Aereal Ace!"]
            },
            typeInCorrAnswer: "The correct answer was: ",
            responseFieldStart: {
                "default": [""],
                "capital" : [""],
                "flag": [""],
                "population": [""],
                "area": [""]
            }
        }
    },
    "german": {
        "settings":{
            settings: "Einstellungen",
            themes: "Themen",
            languages: "Sprachen",
            sunsetTheme: "Sonnenuntergang",
            baseTheme: "Standard",
            english: "Englisch",
            german: "Deutsch"
        },
        "nav":{
            chooseQuizTopic: "Wähle ein Thema für Dein Quiz",
            flags: "Flaggen",
            capitals: "Hauptstädte",
            population: "Einwohner",
            area: "Fläche"
        },
        "main":{
            createQuiz: "Quiz Erstellen",
            chooseAboveMsg: "Wähle oben ein Thema für dein Quiz um zu beginnen!"
        },
        "startingScreen":{
            heading: "Quiz",
            questionModeContainer: "Fragenmodus: ",
            questionTypeContainer: "Fragentyp: ",
            timeLimitContainer: "Zeit pro Frage: ",
            numQuestionsContainer: "Anzahl der Fragen: ",
            continentContainer: "Kontinente: ",
            startQuizButton: "Quiz Starten",
            createNewQuizButton: "Quiz erstellen"
        },
        "continents":{
            europe: "Europa",
            asia: "Asien",
            "north-america": "Nordamerika",
            "south-america": "Südamerika",
            africa: "Afrika",
            oceania: "Ozeanien"
        },
        "quiz":{
            correctQuestions: "Richtig",
            wrongQuestions: "Falsch",
            heading: "Frage ",
            typeInSubmit: "Antwort Abgeben",
            typeInInvalid: "Dies ist keine Valide Antwort!",
            typeInValid: "Dies ist eine valide Antwort!",
            typeInCorrect: {
                "default": ["Richtig! Gut gemacht!", "Richtig! Gute Arbeit!"],
                "capital": ["Hauptstädte-Meister!"],
                "flag": ["Flaggelant!"],
                "population": ["Dein Geist hat eine hohe Bevölkerungsdichte!"],
                "area": ["Nicht flächt!"]
            },
            typeInIncorrect: {
                "default": ["Falsch! Ups!", "Pech beim Denken, eh?"],
                "capital": [""],
                "flag": ["Bist wohl kein Flaggelant!"],
                "population": ["Achtung! In deinem Gehirn herrscht Fachkräftemangel!"],
                "area": ["Flächt!"]
            },
            typeInCorrAnswer: "Die RICHTIGE Antowrt ist: ",
            responseFieldStart: {
                "default": [""],
                "capital" : [""],
                "flag": [""],
                "population": [""],
                "area": [""]
            }
        }
    }
}


export default languagePack;