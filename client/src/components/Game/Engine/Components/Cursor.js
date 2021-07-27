import _ from 'lodash';
import { Character } from './Character';
import { GameObject } from './GameObject';

/** A cursor that tracks the mouse position. */
export class Cursor extends GameObject {
  static gameObject = {};

  /** Builds a Cursor. */
  constructor(ge) {
    super();
    /** The selected character of the cursor. */
    this.character = null;
    /** Is background rendering enabled? */
    this.background = false;
    /** The character color hex value. */
    this.cColor = '#ffffff';
    /** Reference to the renderer. */
    this.RENDERER = {};
    this.GE = ge;
  }

  step(deltatime, input) {
    if (this.RENDERER === {} || !this.RENDERER.canvas) return;

    this.character = _.get(Cursor, 'gameObject.character', ' ');

    if (!input.MOUSE_ON_CANVAS) {
      this.x = -1;
      this.y = -1;
      return;
    }

    this.x = Math.floor(
      (input.MOUSE_POS.x / (this.RENDERER.canvas.width + 25)) *
        this.RENDERER.gridX,
    );
    this.y = Math.floor(
      (input.MOUSE_POS.y / (this.RENDERER.canvas.height + 25)) *
        this.RENDERER.gridY,
    );

    // if (input.KEYS_PRESSED.length > 0)
    //   this.character = input.KEYS_PRESSED[input.KEYS_PRESSED.length - 1][0];

    if (input.MOUSE_CLICK || input.MOUSE_DOWN) {
      let paintedChar = new Character(this.character);
      paintedChar.x = this.x;
      paintedChar.y = this.y;
      this.GE.addComponent(paintedChar);
    }
  }

  draw(renderer) {
    renderer.drawChar(this);
    this.RENDERER = renderer;
  }
}