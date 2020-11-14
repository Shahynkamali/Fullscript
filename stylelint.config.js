module.exports = {
    extends: ["stylelint-config-standard"],
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
        "color-hex-lenght": null,
        "declaration-empty-line-before": null,
    },
};