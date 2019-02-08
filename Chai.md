# Chai
Chai é o responsavel por de fato realizas os testes.

## Should, Expect, Assert
No final são todos iguais.

Should e Expect são mais comportamentais, enquanto que o asset é mais de valor.

### chains
São  adjetivos que linkam os testes.
Exemplo:
````
...
it('Should object to not have property b', ()=>{
  expect({a: 1}).to.not.have.property('b');
});
````


[list of chains](https://www.chaijs.com/api/bdd/);
