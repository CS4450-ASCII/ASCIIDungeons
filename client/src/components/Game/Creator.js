import React from 'react';
import Container from './Container'
import {GameEngine} from './Engine/GameEngine'

let GE = new GameEngine();
GE.renderer.showGridLines(false);
GE.start();

function Creator(properties) {
  return (
    <Container />
  );
}

export default Creator;