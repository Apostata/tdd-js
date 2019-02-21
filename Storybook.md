# Storybook
É uma biblioteca apra deocumentação com os estados de cada componente, criando uma história para cada um.

## @storybook/react

Para criar histórias usando react nos componentes.

### Iniciando o Storybook com React
1.  Criar um componente.
2.  Criar um arquivo congig.js na pasta Storybook com os seguintes dados

````
import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/main.js');
  // You can require as many stories as you need.
}
configure(loadStories, module);
````

3.  Criar um script no package.json para rodar o storybook (por padrão irá buscar o arquivo config.js):
`"storybook": "./node_modules/.bin/start-storybook -p 9001 -c ./storybook"`
4.  Criar uma Storie para cada componente na pasta `stories`, como apostado no `config.js`. Exemplo de uma Storie:
````
import React from 'react';
import { storiesOf } from '@storybook/react';
import Component from '../src/main';

storiesOf('Component', module)
  .add('with Rene name', () => (
    <Component name="Rene" />
  ))
  .add('with another name', () => (
    <Component name="another" />
  ));

````
5.  Rodar o script do storybook. Ele irá gerar um html como cada componente e os estados criados em cada storie para ser visualizado.

## StoriesOf
Cria uma história para um determinado componente ou função. É um contrato de como o componente deve funcionar

  ### add
  Adiciona um estado a ser testado.
