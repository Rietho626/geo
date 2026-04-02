export default function getFlagSettings(SettingsHandler){
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
                        ["for", "flag-quiz-q-type"]
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
                        ["class", "flag-input"],
                        ["id", "country-flag-q-type"],
                        ["value", "country-flag"],
                        ["selected", "true"]
                    ],
                    text_content: "Country -> flag",
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
                    text_content: "flag -> Country",
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
                        ["for", "flag-quiz-mode"]
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
                        ["class", "flag-input"],
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
                        ["class", "flag-input"],
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

