import {GameObject} from './GameObject';

/** A single char the scrolls diagonally across the screen. */
export class Scroller extends GameObject {
  /**
  * Builds a Scroller.
  * @param {string} char - A single character to be displayed.
  * @param {string} foregroundColor - Hex value for the character color. Ex: "#FFFFFF"
  * @param {boolean} background - Determines wheter a background should be drawn.
  * @param {string} backgroundColor - Hex value for the background color. Ex: "#FFFFFF"
  */
  constructor(char = "?", foregroundColor = "#FFFFFF", background = true, backgroundColor = "#000000") {
    super();
    /** The appearance of the scroller. */
    this.character = char;
    /** Is background rendering enabled? */
    this.background = background;
    /** The character color hex value. */
    this.cColor = foregroundColor;
    /** The background color hex value. */
    this.bColor = backgroundColor;
    /** The scroller movement timer. */
    this.shouldMove = 0;
  }

  step(deltatime) {}

  draw(renderer) {
    renderer.drawChar(this);

    //TODO Move logic below into step() once module is completed.
    this.shouldMove++;
    if(this.shouldMove % 100 === 0) {
      this.x++;
      this.y++;

      if(this.x >= renderer.gridX) this.x = 0;
      if(this.y >= renderer.gridY) this.y = 0;
    }
  }
}