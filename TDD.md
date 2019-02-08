#TDD (Test Driven Development - Desenvolvimento guiado por testes )
## 3 etapas do TDD
1. escreve o teste que falha
2. escreve o teste que funciona
3. refatora se precisar

## Como testar
1. O que o código do método precisa fazer.métodos com responsabilidade únicas
2. Que dados o método recebe.
3.  Que dados o método retorna.
4. Quais ações desecadeiam o método. Que evento trigga o ele

## Ordem de testes a serem fetos.
1. Smoke test - se existe ou foi definido
2. Testar Método por método


# Coverage - Cobertura
Analisa se os testes rodaram em cada linha

## Padrão do teste
  "Ele deve fazer isso quando aquilo" - "It should do that when this"

  ### Exemplo de código:
  ````
  if('should return when receive 2, 2'){
      expect(sum(2,2)).to.equal(4);
  }
  ````

## Tipos de teste
  ### Unit ou Unitário:
    Testes unitarios, como métodos funcionam de form isolada.
    "É um simples e pequeno teste automatizado que prova o comportamento de um único método".
      - Isole os testes, todo teste tem que ser independente (Isolado).
          Usar beforeEach e afterEach para limpar as variaveis globais.
      - Escolha os melhores assets para cada momento.
      - Procure usar Mocks(resposta fake) para chamadas externas.
      - Aproveitar o teste para organizar o design do código

    *Muitos testes rápidos

  ### Services ou Serviços(intregração):
        Componente ja testado, testa intregração entre os metodos sem mocks,
        ver se o teste funciona de fato.
        "Valida se componentes funcionam em conjunto".
            - Não criar testes inuteis, não refazer teste unitário, só se
            eles funcionam em conjunto.
            - Isole o máximo possível os ambientes.

        *Alguns testes de velocidade média

  ### UI ou testes de Aceitação:
        Verifica como se um usuário estivesse navegando de fato
        (ou navegar de fato).
        "Avalia a qualidade externa do produto e, na medida do possível,
        também a qualidade em uso".
            - Valide apenas o fluxo de funcionamento do projeto.
            se foi de um lugar para o outro

        Regressão:
            mudandça de css que quebra um componente por exemplo.

        *Poucos testes lentos

  ## Spies, Stubs e Mocks (todos eles são conceitualmente mokcs)
  ### Spies:
    "Vigiam chamadas de métodos"
    Se um método foi chamado, quantas vezes, quais argumentos
    foram passados e etc.

    Utilidade: testar callbacks e como métodos são usados.
        Permite verificar se outro metodo foi chamado dentro
        de do metodo que voce está testando.

    Exemplo:
        it("should insppect jQuery.getJSON's usage of jQuery.ajax", function(){
            sinon.spy(jQuery, 'ajax');
            jQuery.getJSON("/some/resource");
            assert(jQuery.ajax.calledOnce)
        });

  ### Stubs:
      "Substituem a função alvo"
      Podendo inclusive modar o comportamento assim como os valores
      e exceções.

      Utilidade:
          - Controlar comportamento de um teste. Forçar uma exceção.
          - Pular uma parte não necessária do código, exemplo uma chamada de BD
          - Simplificar teste assíncrono.

  ### Mocks (sinon)
      "Metodos falsos(similares aos spies) com comportamento pré-programado
      (similar aos stubs) e respostas/expectations pré-programados".

      Utilidade: quando precisar de um stub(controlar um comportamento),
      mas precisa verificar multiplos comportamentos em um ponto.
          - exemplo, fake de um banco do dados.]

      Exemplo:
      ````
          it("should pass object with correct values to save only once", function(){
              var info = { name:'test' };
              var expectedUser = { nameLowerCase: info.name.toLowerCase() };
              var database = sinon.mock(Database);
              database.expects('save').once().withArgs(expectedUser);

              setupNewUser(info, function(){ });
              database.verify();
              database.restore();
          })
      ````
