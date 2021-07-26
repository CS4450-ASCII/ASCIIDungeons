import React from 'react';
import Container from './Container'
import {GameEngine} from './Engine/GameEngine'

let GE = new GameEngine();
GE.renderer.track("DEBUG TEXT!", "", "");
GE.renderer.gridLines = false;
GE.start();

function Creator(properties) {
  return (
    <Container />
  );
}

export default Creator;