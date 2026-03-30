export default function getCapitalSettings(SettingsHandler){
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
                    text_content: "Choose Quiz Questions Type",
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
                    text_content: "Country -> Capital",
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
                    text_content: "Capital -> Country",
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
                    text_content: "Mixed Questions",
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
                    text_content: "Choose Quiz Mode",
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
                    text_content: "Multiple Choice",
                    listener: false,
                    siblings: false,
                    children: false
                },
                {
                    type: "option",
                    attributes: [
                        ["class", "capital-input"],
                        ["id", "search-mode"],
                        ["value", "search-mode"]
                    ],
                    text_content: "Search Mode",
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
                    text_content: "Type-in Mode",
                    listener: false,
                    siblings: false,
                    children: false
                }
            ]
        },
        
    ];
}

