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
