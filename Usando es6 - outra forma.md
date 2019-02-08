# Usando o es6 nos teste (outra forma)
Estamos usando o webpack apra traspilar via babel.
ourta forma seria instalando o @babel/register, que vai
pegar os imports e transpilar em require do node.

no package.json:
````
...
"scripts":{
  "test"./node_modules/.bin/mocha --require @babel/register tests/**/*.test.js
}
...
````
