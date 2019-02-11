## Setando um aplicação CLI(command line interface).json
````
{
  ...
  "preferGlobal": true
}
````
para poder ser usado no terminal em qualquer path, não só na path do projeto

````
{
  ...
  "bin": {
    "btc-converter" : "bin/main.js"
  }
}
````
passa o caminho do binário que será executado com o comando correto "btc-converter"


## linkando os comandos do projeto com o npm
`npm link`
