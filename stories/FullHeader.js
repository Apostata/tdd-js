import React from 'react';
import { storiesOf } from '@storybook/react';
import FullHeader from '../src/FullHeader';

storiesOf('FullHeader', module)
  .add('with Title', () => (
    <FullHeader title="TDD" />
  ))
  .add('with Title and Subtitle', () => (
    <FullHeader title="TDD" subtitle="JS com TDD na pática" />
  ))
  .add('with Title, Subtitle and bgColor', () => (
    <FullHeader
      title="TDD"
      subtitle="JS com TDD na pática"
      bgColor="#3299BB"
    />
  ))
  .add('with Title, Subtitle, bgColor and textColor', () => (
    <FullHeader
      title="TDD"
      subtitle="JS com TDD na pática"
      bgColor="#3299BB"
      textColor="#FF9900"
    />
  ))
  .add('with Title, Subtitle, bgColor, textColor and font', () => (
    <FullHeader
      title="TDD"
      subtitle="JS com TDD na pática"
      bgColor="#3299BB"
      textColor="#FF9900"
      font="cursive"
    />
  ))
  .add('with Title, Subtitle, bgColor, textColor, font and bgImage', () => (
    <FullHeader
      title="TDD"
      subtitle="JS com TDD na pática"
      bgColor="#3299BB"
      textColor="#FF9900"
      font="cursive"
      bgImage="https://raw.githubusercontent.com/willianjusten/photo-examples/master/iceland-glacier.jpg"
    />
  ))
  .add('with Title, Subtitle, bgColor, textColor, font and bgVideo', () => (
    <FullHeader
      title="TDD"
      subtitle="JS com TDD na pática"
      bgColor="#3299BB"
      textColor="#FF9900"
      font="cursive"
      video="https://static.videezy.com/system/resources/previews/000/000/150/original/waterdrop.mp4"
    />
  ));
