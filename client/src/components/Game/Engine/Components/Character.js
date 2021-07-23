import {GameObject} from './GameObject';

/** Just a static character. */
export class Character extends GameObject {
  /** Builds a Character. */
  constructor(char = "?", foregroundColor = "#FFFFFF", background = true, backgroundColor = "#000000") {
    super();
    /** The appearance of the character. */
    this.character = char;
    /** Is background rendering enabled? */
    this.background = background;
    /** The character color hex value. */
    this.cColor = foregroundColor;
    /** The background color hex value. */
    this.bColor = backgroundColor;
  }

  step(deltatime) {}

  draw(renderer) {
    renderer.drawChar(this);
  }
}