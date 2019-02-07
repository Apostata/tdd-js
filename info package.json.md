## Informações adicionais no package.json
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
