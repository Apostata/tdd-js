module.exports = {
    "extends": "airbnb",
    "rules": {
        //"linebreak-style": 0,
        "import/no-extraneous-dependencies":
        ["error", {
            "devDependencies": true}
        ]
    },
    {
      "plugins": [
        "mocha"
      ],
      "rules": {
        "mocha/no-exclusive-tests": "error"
      }
    }
};
