# Usando o Babel para transpilar sem Webpack
Via package.json script, é possível transpilar uma pasta inteira utilizando o babel.
Exemplo no package.json:
`babel: "./node_modules/.bin/babel src -d dist"`
transpila todo o conteúdo da pasta src para dist as configurações do babel
serão as do arquivo `.babelrc` ou `babel.config.js`.
