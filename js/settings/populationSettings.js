export default function getPopulationSettings(SettingsHandler, lang){
    return  [
        {
            type: "select",
            attributes: [
                ["class", "population-input"],
                ["id", "population-quiz-q-type"],
                ["name", "quiz-q-type"]
            ],
            text_content: false,
            listener: false,
            siblings: [
                {
                    type: "label",
                    attributes: [
                        ["class", "input-label"],
                        ["for", "population-quiz-q-type"]
                    ],
                    text_content: lang.startingScreen.questionTypeContainer,
                    listener: false,
                    siblings: false,
                    children: false
                }
            ],
            children: [
                {
                    type: "option",
                    attributes: [
                        ["class", "population-input"],
                        ["id", "country-population-q-type"],
                        ["value", "country-population"],
                        ["selected", "true"]
                    ],
                    text_content: lang.general.countryCapital + "->" + lang.general.populationCapital,
                    listener: false,
                    siblings: false,
                    children: false
                },
                {
                    type: "option",
                    attributes: [
                        ["class", "population-input"],
                        ["id", "population-country-q-type"],
                        ["value", "population-country"]
                    ],
                    text_content: lang.general.populationCapital + "->" + lang.general.countryCapital,
                    listener: false,
                    siblings: false,
                    children: false
                },
                {
                    type: "option",
                    attributes: [
                        ["class", "population-input"],
                        ["id", "population-mixed-q-type"],
                        ["value", "mixed"]
                    ],
                    text_content: lang.startingScreen.mixedQuestions,
                    listener: false,
                    siblings: false,
                    children: false
                }
            ]
        },
        {
            type: "select",
            attributes: [
                ["class", "population-input"],
                ["id", "population-quiz-mode"],
                ["name", "quiz-mode"]
            ],
            text_content: false,
            listener: ["change", SettingsHandler.enableMultipleChoiceCb],
            siblings: [
                {
                    type: "label",
                    attributes: [
                        ["class", "input-label"],
                        ["for", "population-quiz-mode"]
                    ],
                    text_content: lang.startingScreen.questionModeContainer,
                    listener: false,
                    siblings: false,
                    children: false
                }
            ],
            children: [
                {
                    type: "option",
                    attributes: [
                        ["class", "population-input"],
                        ["id", "multiple-choice-mode"],
                        ["value", "multiple-choice"],
                        ["selected", "true"]
                    ],
                    text_content: lang.startingScreen.multipleChoice,
                    listener: false,
                    siblings: false,
                    children: false
                },
                {
                    type: "option",
                    attributes: [
                        ["class", "population-input"],
                        ["id", "type-in-mode"],
                        ["value", "type-in-mode"]
                    ],
                    text_content: lang.startingScreen.typeInMode,
                    listener: false,
                    siblings: false,
                    children: false
                }
            ]
        },
        
    ];
}

