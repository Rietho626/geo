export default function getAreaSettings(SettingsHandler, lang){
    return  [
        {
            type: "select",
            attributes: [
                ["class", "area-input"],
                ["id", "area-quiz-q-type"],
                ["name", "quiz-q-type"]
            ],
            text_content: false,
            listener: false,
            siblings: [
                {
                    type: "label",
                    attributes: [
                        ["class", "input-label"],
                        ["for", "area-quiz-q-type"]
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
                        ["class", "area-input"],
                        ["id", "country-area-q-type"],
                        ["value", "country-area"],
                        ["selected", "true"]
                    ],
                    text_content: lang.general.countryCapital + "->" + lang.general.areaCapital,
                    listener: false,
                    siblings: false,
                    children: false
                },
                {
                    type: "option",
                    attributes: [
                        ["class", "area-input"],
                        ["id", "area-country-q-type"],
                        ["value", "area-country"]
                    ],
                    text_content: lang.general.areaCapital + "->" + lang.general.countryCapital,
                    listener: false,
                    siblings: false,
                    children: false
                },
                {
                    type: "option",
                    attributes: [
                        ["class", "area-input"],
                        ["id", "area-mixed-q-type"],
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
                ["class", "area-input"],
                ["id", "area-quiz-mode"],
                ["name", "quiz-mode"]
            ],
            text_content: false,
            listener: ["change", SettingsHandler.enableMultipleChoiceCb],
            siblings: [
                {
                    type: "label",
                    attributes: [
                        ["class", "input-label"],
                        ["for", "area-quiz-mode"]
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
                        ["class", "area-input"],
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
                        ["class", "area-input"],
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

