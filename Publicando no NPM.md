# publicar
Definir uma versão no package JSON

* Comittar
* Criar uma Tag com o número da versão

## npm pack
Cria o pacote

## Definindo arquivos que irão para a publicação do pacote

no package.json:
´´´´

...,
"main": "lib/index.js",
"files":{
  "dist",
  "lib"
}
´´´´

neste caso só as pastas "dist" e "lib" e passando como arquivo principal
o index.js da pasta lib

## Publicando
precisa estar logado no npm e digitar:
npm publish
