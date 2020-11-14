module.exports = {
    extends: ["stylelint-config-standard"],
    ignoreFiles: [
        "src/assets/main.css"
    ],
    rules: {
        "at-rule-no-unknown": [
            true,
            {
                ignoreAtRules: [
                    "tailwind",
                    "apply",
                    "variants",
                    "responsive",
                    "screen",
                ],
            },
        ],
        "declaration-block-trailing-semicolon": null,
        "no-descending-specificity": null,
        "declaration-block-no-duplicate-properties": null,
        "declaration-empty-line-before": null,
    },
};