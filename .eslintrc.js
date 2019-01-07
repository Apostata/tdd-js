module.exports = {
    "extends": "airbnb",
    "rules": {
        //"linebreak-style": 0,
        "import/no-extraneous-dependencies":
        ["error", {
            "devDependencies": true},
        ],
        "mocha/no-exclusive-tests": "error"
    },
    "plugins": [
      "mocha"
    ]
};
