export default function getFlagSettings(SettingsHandler, lang){
    return  [
        {
            type: "select",
            attributes: [
                ["class", "flag-input"],
                ["id", "flag-quiz-q-type"],
                ["name", "quiz-q-type"]
            ],
            text_content: false,
            listener: false,
            siblings: [
                {
                    type: "label",
                    attributes: [
                        ["class", "input-label"],
                        ["for", "flag-quiz-q-type"],
                        ["id", "q-Type-container"]
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
                        ["class", "flag-input"],
                        ["id", "country-flag-q-type"],
                        ["value", "country-flag"],
                        ["selected", "true"]
                    ],
                    text_content: lang.general.countryCapital + " -> " + lang.general.flagCapital,
                    listener: false,
                    siblings: false,
                    children: false
                },
                {
                    type: "option",
                    attributes: [
                        ["class", "flag-input"],
                        ["id", "flag-country-q-type"],
                        ["value", "flag-country"]
                    ],
                    text_content: lang.general.flagCapital + " -> " + lang.general.countryCapital,
                    listener: false,
                    siblings: false,
                    children: false
                },
                {
                    type: "option",
                    attributes: [
                        ["class", "flag-input"],
                        ["id", "flag-mixed-q-type"],
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
                ["class", "flag-input"],
                ["id", "flag-quiz-mode"],
                ["name", "quiz-mode"]
            ],
            text_content: false,
            listener: ["change", SettingsHandler.enableMultipleChoiceCb],
            siblings: [
                {
                    type: "label",
                    attributes: [
                        ["class", "input-label"],
                        ["for", "flag-quiz-mode"],
                        ["id", "q-mode-container"]
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
                        ["class", "flag-input"],
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
                        ["class", "flag-input"],
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

