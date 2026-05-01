const languagePack =  {
    "english": {
        "general":{
            area: "area",
            areaCapital: "Area",
            population: "population",
            populationCapital: "Population",
            capital: "capital",
            capitalCapital: "Capital",
            flag: "flag",
            flagCapital: "Flag",
            country: "country",
            countryCapital: "Country",
            question: "Question"
        },
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
            chooseQuizTopic: "Quiz Topics",
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
            continentContainer: "Add Continent to Quiz (no continent = all continents)",
            startQuizButton: "Start Quiz",
            createNewQuizButton: "Create New Quiz",
            editQuiz: "Edit Quiz",
            mixedQuestions: "Mixed Questions",
            multipleChoice: "Multiple-Choice-Mode",
            typeInMode: "Type-In-Mode",
            noTimeLimit: "Unlimited",
            notEnoughContinents: function (numCon, numQues){
                return `The number of countries in the continents of your choice (${numCon}) is smaller than the chosen amount of questions (${numQues}). Choose at most ${numCon} questions for these settings, or add more continents to your selection.`;
            },
            typeInFlag: "Contrats, you found a combination that does not work. You can't type in flags. Go choose different settings."

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
            displayed: "displayed",
            capitalMC: "Choose the Capital of {Object}!",
            capitalTI: "Find the Capital of {Object}!",
            countryQ: "Find the country, whose {Type} is {Object}!",
            flagMC: "Choose the Flag of {Object}!",
            populationTI: "Find the Population of {Object}? (2026)",
            populationMC : "Choose the correct Population for {Object}!",
            areaTI: "What is the Area of {Object} in square Kilometer?",
            areaMC: "Choose the correct Area of {Object}!",
            correctQuestions: "Correct",
            wrongQuestions: "Incorrect",
            timeUp: "Time Up!",
            quizOver: "Quiz Over!",
            correct: "correct",
            clickHere: "Click Here to continue!",
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
        },
        "countries":{

        }
    },
    "german": {
        "general":{
            area: "fläche",
            areaCapital: "Fläche",
            population: "einwohner",
            populationCapital: "Einwohnerzahl",
            capital: "hauptstadt",
            capitalCapital: "Hauptstadt",
            flag: "flagge",
            flagCapital: "Flagge",
            country: "land",
            countryCapital: "Land",
            question: "Frage"

        },
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
            chooseQuizTopic: "Quiz Themen",
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
            continentContainer: "Kontinente zum Quiz hinzufügen (kein Kontinent = alle Kontinente)",
            startQuizButton: "Quiz Starten",
            createNewQuizButton: "Quiz erstellen",
            editQuiz: "Quiz Bearbeiten",
            mixedQuestions: "Gemischte Fragen",
            multipleChoice: "Auswahlmodus",
            typeInMode: "Eingabemodus",
            noTimeLimit: "Unlimitert",
            notEnoughContinents: function (numCon, numQues){
                return `Die Anzahl der Länder in den Kontinenten deiner Wahl (${numCon}) ist geringer als die Anzahl der Fragen (${numQues}). Wähle Maximal ${numCon} Fragen für diese Einstellungen, oder füge deiner Auswahl weitere Kontinente hinzu.`;
            },
            typeInFlag: "Gratuliere, du hast eine Kombination gefunden, die nicht funktioniert - Flaggen kann man leider nicht eingeben. Wähle eine andere Einstellung."

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
            displayed: "angezeigt",
            capitalMC: "Wähle die Hauptstadt von: {Object}!",
            capitalTI: "Finde die Hauptstadt von: {Object}!",
            countryQ: "Finde das Land, dessen {Type} {Object} ist!",
            flagMC: "Wähle die Flagge von {Object}!",
            populationTI: "Wie viele Einwhoner hat {Object}? (2026)",
            populationMC : "Wähle die Einwohnerzahl von: {Object}!",
            areaTI: "Finde die Fläche von: {Object} in Quadratkilometern!",
            areaMC: "Wähle die Fläche von: {Object} in Quadratkilometern!",
            correctQuestions: "Richtig",
            wrongQuestions: "Falsch",
            timeUp: "Zeit Abgelaufen!",
            clickHere: "Hier klicken um fortzufahren",
            heading: "Frage ",
            quizOver: "Quiz Vorbei!",
            correct: "Richtig",
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
            typeInCorrAnswer: "Die RICHTIGE Antwort ist: ",
            responseFieldStart: {
                "default": [""],
                "capital" : [""],
                "flag": [""],
                "population": [""],
                "area": [""]
            }
        },
        "countries":{
            "Zimbabwe":{
                translatedName: "Simbabwe",
                translatedCapital: "Harare"
            },
            "Kiribati":{
                translatedName: "Kiribati",
                translatedCapital: "Süd-Tarawa"
            },
            "Ghana":{
                translatedName: "Ghana",
                translatedCapital: "Accra"
            },
            "North Korea":{
                translatedName: "Nordkorea",
                translatedCapital: "Pjöngjang"
            },
            "Spain":{
                translatedName: "Spanien",
                translatedCapital: "Madrid"
            },
            "Jordan":{
                translatedName: "Jordanien",
                translatedCapital: "Amman"
            },
            "San Marino":{
                translatedName: "San Marino",
                translatedCapital: "San Marino"
            },
            "Ivory Coast":{
                translatedName: "Elfenbeinküste",
                translatedCapital: "Yamoussoukro"
            },
            "Brazil":{
                translatedName: "Brasilien",
                translatedCapital: "Brasília"
            },
            "Colombia":{
                translatedName: "Kolumbien",
                translatedCapital: "Bogotá"
            },
            "Heard Island and McDonald Islands":{
                translatedName: "Heard- und McDonald-Inseln",
                translatedCapital: "Keine Hauptstadt"
            },
            "Dominica":{
                translatedName: "Dominica",
                translatedCapital: "Roseau"
            },
            "Djibouti":{
                translatedName: "Dschibuti",
                translatedCapital: "Dschibuti"
            },
            "Slovenia":{
                translatedName: "Slowenien",
                translatedCapital: "Ljubljana"
            },
            "Anguilla":{
                translatedName: "Anguilla",
                translatedCapital: "The Valley"
            },
            "North Macedonia":{
                translatedName: "Nordmazedonien",
                translatedCapital: "Skopje"
            },
            "Solomon Islands":{
                translatedName: "Salomonen",
                translatedCapital: "Honiara"
            },
            "Chad":{
                translatedName: "Tschad",
                translatedCapital: "N'Djamena"
            },
            "Burundi":{
                translatedName: "Burundi",
                translatedCapital: "Gitega"
            },
            "Italy":{
                translatedName: "Italien",
                translatedCapital: "Rom"
            },
            "Ethiopia":{
                translatedName: "Äthiopien",
                translatedCapital: "Addis Abeba"
            },
            "Vietnam":{
                translatedName: "Vietnam",
                translatedCapital: "Hanoi"
            },
            "Togo":{
                translatedName: "Togo",
                translatedCapital: "Lomé"
            },
            "Martinique":{
                translatedName: "Martinique",
                translatedCapital: "Fort-de-France"
            },
            "Poland":{
                translatedName: "Polen",
                translatedCapital: "Warschau"
            },
            "Portugal":{
                translatedName: "Portugal",
                translatedCapital: "Lissabon"
            },
            "Christmas Island":{
                translatedName: "Weihnachtsinsel",
                translatedCapital: "Flying Fish Cove"
            },
            "Israel":{
                translatedName: "Israel",
                translatedCapital: "Jerusalem"
            },
            "Argentina":{
                translatedName: "Argentinien",
                translatedCapital: "Buenos Aires"
            },
            "Afghanistan":{
                translatedName: "Afghanistan",
                translatedCapital: "Kabul"
            },
            "Papua New Guinea":{
                translatedName: "Papua-Neuguinea",
                translatedCapital: "Port Moresby"
            },
            "New Zealand":{
                translatedName: "Neuseeland",
                translatedCapital: "Wellington"
            },
            "El Salvador":{
                translatedName: "El Salvador",
                translatedCapital: "San Salvador"
            },
            "Czechia":{
                translatedName: "Tschechien",
                translatedCapital: "Prag"
            },
            "Cameroon":{
                translatedName: "Kamerun",
                translatedCapital: "Jaunde"
            },
            "Yemen":{
                translatedName: "Jemen",
                translatedCapital: "Sanaa"
            },
            "Panama":{
                translatedName: "Panama",
                translatedCapital: "Panama-Stadt"
            },
            "Timor-Leste":{
                translatedName: "Osttimor",
                translatedCapital: "Dili"
            },
            "Cuba":{
                translatedName: "Kuba",
                translatedCapital: "Havanna"
            },
            "Russia":{
                translatedName: "Russland",
                translatedCapital: "Moskau"
            },
            "Antigua and Barbuda":{
                translatedName: "Antigua und Barbuda",
                translatedCapital: "Saint John's"
            },
            "Saint Barthélemy":{
                translatedName: "Saint-Barthélemy",
                translatedCapital: "Gustavia"
            },
            "Bolivia":{
                translatedName: "Bolivien",
                translatedCapital: "Sucre"
            },
            "Australia":{
                translatedName: "Australien",
                translatedCapital: "Canberra"
            },
            "United States Minor Outlying Islands":{
                translatedName: "Kleinere abgelegene Inseln der Vereinigten Staaten",
                translatedCapital: "Washington DC"
            },
            "Fiji":{
                translatedName: "Fidschi",
                translatedCapital: "Suva"
            },
            "Myanmar":{
                translatedName: "Myanmar",
                translatedCapital: "Naypyidaw"
            },
            "São Tomé and Príncipe":{
                translatedName: "São Tomé und Príncipe",
                translatedCapital: "São Tomé"
            },
            "Madagascar":{
                translatedName: "Madagaskar",
                translatedCapital: "Antananarivo"
            },
            "Tuvalu":{
                translatedName: "Tuvalu",
                translatedCapital: "Funafuti"
            },
            "Guernsey":{
                translatedName: "Guernsey",
                translatedCapital: "St. Peter Port"
            },
            "Cocos (Keeling) Islands":{
                translatedName: "Kokosinseln",
                translatedCapital: "West Island"
            },
            "Hungary":{
                translatedName: "Ungarn",
                translatedCapital: "Budapest"
            },
            "Egypt":{
                translatedName: "Ägypten",
                translatedCapital: "Kairo"
            },
            "Kyrgyzstan":{
                translatedName: "Kirgistan",
                translatedCapital: "Bischkek"
            },
            "Indonesia":{
                translatedName: "Indonesien",
                translatedCapital: "Jakarta"
            },
            "Tunisia":{
                translatedName: "Tunesien",
                translatedCapital: "Tunis"
            },
            "American Samoa":{
                translatedName: "Amerikanisch-Samoa",
                translatedCapital: "Pago Pago"
            },
            "Oman":{
                translatedName: "Oman",
                translatedCapital: "Maskat"
            },
            "French Polynesia":{
                translatedName: "Französisch-Polynesien",
                translatedCapital: "Papeetē"
            },
            "United States":{
                translatedName: "Vereinigte Staaten",
                translatedCapital: "Washington, D.C."
            },
            "Falkland Islands":{
                translatedName: "Falklandinseln",
                translatedCapital: "Stanley"
            },
            "Saint Martin":{
                translatedName: "Saint-Martin",
                translatedCapital: "Marigot"
            },
            "Suriname":{
                translatedName: "Suriname",
                translatedCapital: "Paramaribo"
            },
            "Azerbaijan":{
                translatedName: "Aserbaidschan",
                translatedCapital: "Baku"
            },
            "Netherlands":{
                translatedName: "Niederlande",
                translatedCapital: "Amsterdam"
            },
            "Palestine":{
                translatedName: "Palästina",
                translatedCapital: "Ramallah"
            },
            "Slovakia":{
                translatedName: "Slowakei",
                translatedCapital: "Bratislava"
            },
            "Uganda":{
                translatedName: "Uganda",
                translatedCapital: "Kampala"
            },
            "Cayman Islands":{
                translatedName: "Kaimaninseln",
                translatedCapital: "George Town"
            },
            "Saint Lucia":{
                translatedName: "St. Lucia",
                translatedCapital: "Castries"
            },
            "Libya":{
                translatedName: "Libyen",
                translatedCapital: "Tripoli"
            },
            "Northern Mariana Islands":{
                translatedName: "Nördliche Marianen",
                translatedCapital: "Saipan"
            },
            "Armenia":{
                translatedName: "Armenien",
                translatedCapital: "Jerewan"
            },
            "Comoros":{
                translatedName: "Komoren",
                translatedCapital: "Moroni"
            },
            "Guyana":{
                translatedName: "Guyana",
                translatedCapital: "Georgetown"
            },
            "United Arab Emirates":{
                translatedName: "Vereinigte Arabische Emirate",
                translatedCapital: "Abu Dhabi"
            },
            "Turkey":{
                translatedName: "Türkei",
                translatedCapital: "Ankara"
            },
            "Samoa":{
                translatedName: "Samoa",
                translatedCapital: "Apia"
            },
            "Germany":{
                translatedName: "Deutschland",
                translatedCapital: "Berlin"
            },
            "Gambia":{
                translatedName: "Gambia",
                translatedCapital: "Banjul"
            },
            "Mongolia":{
                translatedName: "Mongolei",
                translatedCapital: "Ulan Bator"
            },
            "Serbia":{
                translatedName: "Serbien",
                translatedCapital: "Belgrad"
            },
            "China":{
                translatedName: "China",
                translatedCapital: "Peking"
            },
            "Montenegro":{
                translatedName: "Montenegro",
                translatedCapital: "Podgorica"
            },
            "Guam":{
                translatedName: "Guam",
                translatedCapital: "Hagåtña"
            },
            "Cambodia":{
                translatedName: "Kambodscha",
                translatedCapital: "Phnom Penh"
            },
            "Liechtenstein":{
                translatedName: "Liechtenstein",
                translatedCapital: "Vaduz"
            },
            "Senegal":{
                translatedName: "Senegal",
                translatedCapital: "Dakar"
            },
            "United Kingdom":{
                translatedName: "Vereinigtes Königreich",
                translatedCapital: "London"
            },
            "Caribbean Netherlands":{
                translatedName: "Karibische Niederlande",
                translatedCapital: "Kralendijk"
            },
            "French Guiana":{
                translatedName: "Französisch-Guayana",
                translatedCapital: "Cayenne"
            },
            "Burkina Faso":{
                translatedName: "Burkina Faso",
                translatedCapital: "Ouagadougou"
            },
            "Qatar":{
                translatedName: "Katar",
                translatedCapital: "Doha"
            },
            "Ukraine":{
                translatedName: "Ukraine",
                translatedCapital: "Kiew"
            },
            "Mexico":{
                translatedName: "Mexiko",
                translatedCapital: "Mexiko-Stadt"
            },
            "Isle of Man":{
                translatedName: "Insel Man",
                translatedCapital: "Douglas"
            },
            "Antarctica":{
                translatedName: "Antarktis",
                translatedCapital: "Keine Hauptstadt"
            },
            "South Georgia":{
                translatedName: "Südgeorgien und die Südlichen Sandwichinseln",
                translatedCapital: "King Edward Point"
            },
            "Western Sahara":{
                translatedName: "Westsahara",
                translatedCapital: "El Aaiún"
            },
            "Turks and Caicos Islands":{
                translatedName: "Turks- und Caicosinseln",
                translatedCapital: "Cockburn Town"
            },
            "Albania":{
                translatedName: "Albanien",
                translatedCapital: "Tirana"
            },
            "Cyprus":{
                translatedName: "Zypern",
                translatedCapital: "Nicosia"
            },
            "Guatemala":{
                translatedName: "Guatemala",
                translatedCapital: "Guatemala-Stadt"
            },
            "Nauru":{
                translatedName: "Nauru",
                translatedCapital: "Yaren"
            },
            "Saint Helena, Ascension and Tristan da Cunha":{
                translatedName: "St. Helena, Ascension und Tristan da Cunha",
                translatedCapital: "Jamestown"
            },
            "Latvia":{
                translatedName: "Lettland",
                translatedCapital: "Riga"
            },
            "Cook Islands":{
                translatedName: "Cookinseln",
                translatedCapital: "Avarua"
            },
            "Malta":{
                translatedName: "Malta",
                translatedCapital: "Valletta"
            },
            "Pitcairn Islands":{
                translatedName: "Pitcairninseln",
                translatedCapital: "Adamstown"
            },
            "South Korea":{
                translatedName: "Südkorea",
                translatedCapital: "Seoul"
            },
            "New Caledonia":{
                translatedName: "Neukaledonien",
                translatedCapital: "Nouméa"
            },
            "Mozambique":{
                translatedName: "Mosambik",
                translatedCapital: "Maputo"
            },
            "Luxembourg":{
                translatedName: "Luxemburg",
                translatedCapital: "Luxemburg"
            },
            "Ireland":{
                translatedName: "Irland",
                translatedCapital: "Dublin"
            },
            "Nigeria":{
                translatedName: "Nigeria",
                translatedCapital: "Abuja"
            },
            "Bahamas":{
                translatedName: "Bahamas",
                translatedCapital: "Nassau"
            },
            "Marshall Islands":{
                translatedName: "Marshallinseln",
                translatedCapital: "Majuro"
            },
            "Greece":{
                translatedName: "Griechenland",
                translatedCapital: "Athen"
            },
            "Maldives":{
                translatedName: "Malediven",
                translatedCapital: "Malé"
            },
            "Niue":{
                translatedName: "Niue",
                translatedCapital: "Alofi"
            },
            "Syria":{
                translatedName: "Syrien",
                translatedCapital: "Damascus"
            },
            "Ecuador":{
                translatedName: "Ecuador",
                translatedCapital: "Quito"
            },
            "Turkmenistan":{
                translatedName: "Turkmenistan",
                translatedCapital: "Aschgabat"
            },
            "Wallis and Futuna":{
                translatedName: "Wallis und Futuna",
                translatedCapital: "Mata-Utu"
            },
            "Brunei":{
                translatedName: "Brunei",
                translatedCapital: "Bandar Seri Begawan"
            },
            "Uzbekistan":{
                translatedName: "Usbekistan",
                translatedCapital: "Tashkent"
            },
            "Bahrain":{
                translatedName: "Bahrain",
                translatedCapital: "Manama"
            },
            "British Virgin Islands":{
                translatedName: "Britische Jungferninseln",
                translatedCapital: "Road Town"
            },
            "Moldova":{
                translatedName: "Moldau",
                translatedCapital: "Chișinău"
            },
            "Mauritius":{
                translatedName: "Mauritius",
                translatedCapital: "Port Louis"
            },
            "Tonga":{
                translatedName: "Tonga",
                translatedCapital: "Nuku'alofa"
            },
            "Seychelles":{
                translatedName: "Seychellen",
                translatedCapital: "Victoria"
            },
            "Angola":{
                translatedName: "Angola",
                translatedCapital: "Luanda"
            },
            "Estonia":{
                translatedName: "Estland",
                translatedCapital: "Tallinn"
            },
            "Bermuda":{
                translatedName: "Bermuda",
                translatedCapital: "Hamilton"
            },
            "Philippines":{
                translatedName: "Philippinen",
                translatedCapital: "Manila"
            },
            "Vatican City":{
                translatedName: "Vatikanstadt",
                translatedCapital: "Vatican City"
            },
            "Venezuela":{
                translatedName: "Venezuela",
                translatedCapital: "Caracas"
            },
            "Barbados":{
                translatedName: "Barbados",
                translatedCapital: "Bridgetown"
            },
            "India":{
                translatedName: "Indien",
                translatedCapital: "Neu-Delhi"
            },
            "Mali":{
                translatedName: "Mali",
                translatedCapital: "Bamako"
            },
            "Norfolk Island":{
                translatedName: "Norfolkinsel",
                translatedCapital: "Kingston"
            },
            "Belarus":{
                translatedName: "Belarus",
                translatedCapital: "Minsk"
            },
            "Saint Kitts and Nevis":{
                translatedName: "St. Kitts und Nevis",
                translatedCapital: "Basseterre"
            },
            "Guadeloupe":{
                translatedName: "Guadeloupe",
                translatedCapital: "Basse-Terre"
            },
            "Lithuania":{
                translatedName: "Litauen",
                translatedCapital: "Vilnius"
            },
            "Montserrat":{
                translatedName: "Montserrat",
                translatedCapital: "Plymouth"
            },
            "Niger":{
                translatedName: "Niger",
                translatedCapital: "Niamey"
            },
            "Equatorial Guinea":{
                translatedName: "Äquatorialguinea",
                translatedCapital: "Ciudad de la Paz"
            },
            "Iraq":{
                translatedName: "Irak",
                translatedCapital: "Bagdad"
            },
            "Mauritania":{
                translatedName: "Mauretanien",
                translatedCapital: "Nouakchott"
            },
            "Taiwan":{
                translatedName: "Taiwan",
                translatedCapital: "Taipei"
            },
            "Georgia":{
                translatedName: "Georgien",
                translatedCapital: "Tiflis"
            },
            "Puerto Rico":{
                translatedName: "Puerto Rico",
                translatedCapital: "San Juan"
            },
            "Paraguay":{
                translatedName: "Paraguay",
                translatedCapital: "Asunción"
            },
            "Sierra Leone":{
                translatedName: "Sierra Leone",
                translatedCapital: "Freetown"
            },
            "Botswana":{
                translatedName: "Botswana",
                translatedCapital: "Gaborone"
            },
            "Mayotte":{
                translatedName: "Mayotte",
                translatedCapital: "Mamoudzou"
            },
            "Finland":{
                translatedName: "Finnland",
                translatedCapital: "Helsinki"
            },
            "Jersey":{
                translatedName: "Jersey",
                translatedCapital: "Saint Helier"
            },
            "Faroe Islands":{
                translatedName: "Färöer",
                translatedCapital: "Tórshavn"
            },
            "Sweden":{
                translatedName: "Schweden",
                translatedCapital: "Stockholm"
            },
            "Sri Lanka":{
                translatedName: "Sri Lanka",
                translatedCapital: "Sri Jayawardenepura Kotte"
            },
            "Thailand":{
                translatedName: "Thailand",
                translatedCapital: "Bangkok"
            },
            "Greenland":{
                translatedName: "Grönland",
                translatedCapital: "Nuuk"
            },
            "Bulgaria":{
                translatedName: "Bulgarien",
                translatedCapital: "Sofia"
            },
            "Kenya":{
                translatedName: "Kenia",
                translatedCapital: "Nairobi"
            },
            "Hong Kong":{
                translatedName: "Hongkong",
                translatedCapital: "Hongkong"
            },
            "Romania":{
                translatedName: "Rumänien",
                translatedCapital: "Bukarest"
            },
            "Malawi":{
                translatedName: "Malawi",
                translatedCapital: "Lilongwe"
            },
            "Republic of the Congo":{
                translatedName: "Republik Kongo",
                translatedCapital: "Brazzaville"
            },
            "Honduras":{
                translatedName: "Honduras",
                translatedCapital: "Tegucigalpa"
            },
            "Aruba":{
                translatedName: "Aruba",
                translatedCapital: "Oranjestad"
            },
            "Monaco":{
                translatedName: "Monaco",
                translatedCapital: "Monaco"
            },
            "Bouvet Island":{
                translatedName: "Bouvetinsel",
                translatedCapital: "Keine Hauptstadt"
            },
            "Zambia":{
                translatedName: "Sambia",
                translatedCapital: "Lusaka"
            },
            "Andorra":{
                translatedName: "Andorra",
                translatedCapital: "Andorra la Vella"
            },
            "Liberia":{
                translatedName: "Liberia",
                translatedCapital: "Monrovia"
            },
            "Tanzania":{
                translatedName: "Tansania",
                translatedCapital: "Dodoma"
            },
            "Saint Pierre and Miquelon":{
                translatedName: "Saint-Pierre und Miquelon",
                translatedCapital: "Saint-Pierre"
            },
            "Iran":{
                translatedName: "Iran",
                translatedCapital: "Teheran"
            },
            "Iceland":{
                translatedName: "Island",
                translatedCapital: "Reykjavik"
            },
            "Guinea":{
                translatedName: "Guinea",
                translatedCapital: "Conakry"
            },
            "Svalbard and Jan Mayen":{
                translatedName: "Spitzbergen und Jan Mayen",
                translatedCapital: "Longyearbyen"
            },
            "Kuwait":{
                translatedName: "Kuwait",
                translatedCapital: "Kuwait-Stadt"
            },
            "Morocco":{
                translatedName: "Marokko",
                translatedCapital: "Rabat"
            },
            "Namibia":{
                translatedName: "Namibia",
                translatedCapital: "Windhoek"
            },
            "Tajikistan":{
                translatedName: "Tadschikistan",
                translatedCapital: "Duschanbe"
            },
            "Vanuatu":{
                translatedName: "Vanuatu",
                translatedCapital: "Port Vila"
            },
            "Jamaica":{
                translatedName: "Jamaika",
                translatedCapital: "Kingston"
            },
            "Palau":{
                translatedName: "Palau",
                translatedCapital: "Ngerulmud"
            },
            "Uruguay":{
                translatedName: "Uruguay",
                translatedCapital: "Montevideo"
            },
            "Bhutan":{
                translatedName: "Bhutan",
                translatedCapital: "Thimphu"
            },
            "DR Congo":{
                translatedName: "Demokratische Republik Kongo",
                translatedCapital: "Kinshasa"
            },
            "Kazakhstan":{
                translatedName: "Kasachstan",
                translatedCapital: "Astana"
            },
            "Eritrea":{
                translatedName: "Eritrea",
                translatedCapital: "Asmara"
            },
            "Gibraltar":{
                translatedName: "Gibraltar",
                translatedCapital: "Gibraltar"
            },
            "Gabon":{
                translatedName: "Gabun",
                translatedCapital: "Libreville"
            },
            "Peru":{
                translatedName: "Peru",
                translatedCapital: "Lima"
            },
            "Denmark":{
                translatedName: "Dänemark",
                translatedCapital: "Kopenhagen"
            },
            "Croatia":{
                translatedName: "Kroatien",
                translatedCapital: "Zagreb"
            },
            "Curaçao":{
                translatedName: "Curaçao",
                translatedCapital: "Willemstad"
            },
            "British Indian Ocean Territory":{
                translatedName: "Britisches Territorium im Indischen Ozean",
                translatedCapital: "Diego Garcia"
            },
            "Norway":{
                translatedName: "Norwegen",
                translatedCapital: "Oslo"
            },
            "Lesotho":{
                translatedName: "Lesotho",
                translatedCapital: "Maseru"
            },
            "Austria":{
                translatedName: "Österreich",
                translatedCapital: "Wien"
            },
            "Switzerland":{
                translatedName: "Schweiz",
                translatedCapital: "Bern"
            },
            "Belize":{
                translatedName: "Belize",
                translatedCapital: "Belmopan"
            },
            "Belgium":{
                translatedName: "Belgien",
                translatedCapital: "Brüssel"
            },
            "Nicaragua":{
                translatedName: "Nicaragua",
                translatedCapital: "Managua"
            },
            "United States Virgin Islands":{
                translatedName: "Amerikanische Jungferninseln",
                translatedCapital: "Charlotte Amalie"
            },
            "Singapore":{
                translatedName: "Singapur",
                translatedCapital: "Singapur"
            },
            "Dominican Republic":{
                translatedName: "Dominikanische Republik",
                translatedCapital: "Santo Domingo"
            },
            "Kosovo":{
                translatedName: "Kosovo",
                translatedCapital: "Pristina"
            },
            "Laos":{
                translatedName: "Laos",
                translatedCapital: "Vientiane"
            },
            "Chile":{
                translatedName: "Chile",
                translatedCapital: "Santiago de Chile"
            },
            "Costa Rica":{
                translatedName: "Costa Rica",
                translatedCapital: "San José"
            },
            "Rwanda":{
                translatedName: "Ruanda",
                translatedCapital: "Kigali"
            },
            "Trinidad and Tobago":{
                translatedName: "Trinidad und Tobago",
                translatedCapital: "Port of Spain"
            },
            "Malaysia":{
                translatedName: "Malaysia",
                translatedCapital: "Kuala Lumpur"
            },
            "South Africa":{
                translatedName: "Südafrika",
                translatedCapital: "Pretoria"
            },
            "Saudi Arabia":{
                translatedName: "Saudi-Arabien",
                translatedCapital: "Riad"
            },
            "Haiti":{
                translatedName: "Haiti",
                translatedCapital: "Port-au-Prince"
            },
            "French Southern and Antarctic Lands":{
                translatedName: "Französische Süd- und Antarktisgebiete",
                translatedCapital: "Port-aux-Français"
            },
            "Tokelau":{
                translatedName: "Tokelau",
                translatedCapital: "Fakaofo"
            },
            "Somalia":{
                translatedName: "Somalia",
                translatedCapital: "Mogadishu"
            },
            "Japan":{
                translatedName: "Japan",
                translatedCapital: "Tokio"
            },
            "Macau":{
                translatedName: "Macau",
                translatedCapital: "Keine Hauptstadt"
            },
            "Sudan":{
                translatedName: "Sudan",
                translatedCapital: "Khartum"
            },
            "Algeria":{
                translatedName: "Algerien",
                translatedCapital: "Algier"
            },
            "Eswatini":{
                translatedName: "Eswatini",
                translatedCapital: "Mbabane"
            },
            "France":{
                translatedName: "Frankreich",
                translatedCapital: "Paris"
            },
            "Sint Maarten":{
                translatedName: "Sint Maarten",
                translatedCapital: "Philipsburg"
            },
            "Bangladesh":{
                translatedName: "Bangladesch",
                translatedCapital: "Dhaka"
            },
            "Central African Republic":{
                translatedName: "Zentralafrikanische Republik",
                translatedCapital: "Bangui"
            },
            "Canada":{
                translatedName: "Kanada",
                translatedCapital: "Ottawa"
            },
            "Réunion":{
                translatedName: "Réunion",
                translatedCapital: "Saint-Denis"
            },
            "Saint Vincent and the Grenadines":{
                translatedName: "St. Vincent und die Grenadinen",
                translatedCapital: "Kingstown"
            },
            "Micronesia":{
                translatedName: "Mikronesien",
                translatedCapital: "Palikir"
            },
            "Cape Verde":{
                translatedName: "Kap Verde",
                translatedCapital: "Praia"
            },
            "Grenada":{
                translatedName: "Grenada",
                translatedCapital: "St. George's"
            },
            "Pakistan":{
                translatedName: "Pakistan",
                translatedCapital: "Islamabad"
            },
            "Nepal":{
                translatedName: "Nepal",
                translatedCapital: "Kathmandu"
            },
            "Bosnia and Herzegovina":{
                translatedName: "Bosnien und Herzegowina",
                translatedCapital: "Sarajevo"
            },
            "South Sudan":{
                translatedName: "Südsudan",
                translatedCapital: "Juba"
            },
            "Guinea-Bissau":{
                translatedName: "Guinea-Bissau",
                translatedCapital: "Bissau"
            },
            "Benin":{
                translatedName: "Benin",
                translatedCapital: "Porto-Novo"
            },
            "Lebanon":{
                translatedName: "Libanon",
                translatedCapital: "Beirut"
            },
            "Åland Islands":{
                translatedName: "Ålandinseln",
                translatedCapital: "Mariehamn"
            },
        }
    }
}


export default languagePack;
