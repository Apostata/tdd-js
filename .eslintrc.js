module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "env": { //para o eslint reconhecer o mocha
      "mocha": true,
      "browser": true
    },
    "parserOptions":{
      "ecmaVersion": 8
    },
    "rules": {
      "no-unused-expressions": 0, // to reseto do chai friendly
      "chai-friendly/no-unused-expressions": 2, // to reseto do chai friendly,
      "no-unused-vars": [
        "error",
        {
          "varsIgnorePattern": "should|assert" //slint ignora o should e o asset também
        }
      ],
      "import/no-extraneous-dependencies":
      ["error", {
          "devDependencies": true},
      ,
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],]
    },
    "plugins": [ // to work with chai
      "chai-friendly"
    ]

};
