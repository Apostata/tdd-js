import { configure } from '@storybook/react';
import '../css/main.css';

function loadStories() {
  require('../stories/FullHeader.js');
  // You can require as many stories as you need.
}
configure(loadStories, module);
