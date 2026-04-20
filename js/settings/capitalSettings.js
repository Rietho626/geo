export default function getCapitalSettings(SettingsHandler, lang){
    return  [
        {
            type: "select",
            attributes: [
                ["class", "capital-input"],
                ["id", "capital-quiz-q-type"],
                ["name", "quiz-q-type"]
            ],
            text_content: false,
            listener: false,
            siblings: [
                {
                    type: "label",
                    attributes: [
                        ["class", "input-label"],
                        ["for", "capital-quiz-q-type"]
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
                        ["class", "capital-input"],
                        ["id", "country-capital-q-type"],
                        ["value", "country-capital"],
                        ["selected", "true"]
                    ],
                    text_content: lang.general.countryCapital + " -> " + lang.general.capitalCapital,
                    listener: false,
                    siblings: false,
                    children: false
                },
                {
                    type: "option",
                    attributes: [
                        ["class", "capital-input"],
                        ["id", "capital-country-q-type"],
                        ["value", "capital-country"]
                    ],
                    text_content: lang.general.capitalCapital + " -> " + lang.general.countryCapital,
                    listener: false,
                    siblings: false,
                    children: false
                },
                {
                    type: "option",
                    attributes: [
                        ["class", "capital-input"],
                        ["id", "capital-mixed-q-type"],
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
                ["class", "capital-input"],
                ["id", "capital-quiz-mode"],
                ["name", "quiz-mode"]
            ],
            text_content: false,
            listener: ["change", SettingsHandler.enableMultipleChoiceCb],
            siblings: [
                {
                    type: "label",
                    attributes: [
                        ["class", "input-label"],
                        ["for", "capital-quiz-mode"]
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
                        ["class", "capital-input"],
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
                        ["class", "capital-input"],
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

