# Travis CI
criar um arquivo de configuração
.travis.yml

yml precisa ter 4 para cada valor caso haja quebra de linha
after_success:
  - "yarn test:coverage"
before_script:
  - "yarn build:all"
cache:
  directories: node_modules
language: node_js
node_js:
  - "7"
