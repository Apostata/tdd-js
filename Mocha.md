# Mocha


## Describe, Context, It

### Describe
Descreve o bloco onde será testada a função ou método, separa métodos ou classes

Exemplo:
````
  describe('Class Main', function(){

    describe('Metodo A', function(){

    });

    describe('Metodo B', function(){

    });

  });
````

### Context
Descreve o caso de teste. separar os casos de teste

Exemplo:
````
...
describe('Metodo A', function(){
  context('Case1', funcion(){

  });

  context('Case1', function(){

  });
});
````

### It
É quem de fato executa o roda os testes, o que esperamos que aconteça

Exemplo:

````
  ...
  context('Case1', function(){
    it('should happen something', function(){

    });
  });
````

## Reporters
  yarn ou npm
  yarn test -- --reporters

  os dois traços antes do --reporters significa que vai jogar um comendo --reporters para dentro de ./node_modules/.bin/mocha tests/**/*.test.js, que é o comando "test" definido no package.json

  este comando retornará uma lista como tipo de relatório.

## Comandos Skip, Only e Bail

### Bail

Bail irá parar os testes assim que encontrar o primeiro que falhe.

yarn ou npm
yarn test -- -- bail


### Only
Só irá roda o caso em que only estiver definido.

Exemplo:

````
...
 context.only('Case1', () => {
      it('should happen blablabla', () => {

      });
    });
````

### skip
Não irá executar o teste
Exemplo:

````
...
 context('Case1', () => {
      it.skip('should happen blablabla', () => {

      });
  });
  context('Case2', () => {
      it('should happen mimimi', () => {

      });
  });
````

## Hooks
São gatilhos do Mocha para realizarem uma ação antes ou depois,
um exemplo definir um bd que será utilizado em todos os testes.

### Before
  Roda uma vez antes do teste (it)

  ````
  before(()=>{
    ...
  })
  ````

### After
  Roda uma vez depois do teste (it)

  ````
  after(()=>{
    ...
  })
  ````

### BeforeEach
  Roda todas as vezes antes de cada teste (it)

  ````
  beforeEach(()=>{
    ...
  })
  ````

### AfterEach
  Roda todas as vezes depois de cada teste (it)

  ````
  afterEach(()=>{
    ...
  })
  ````
