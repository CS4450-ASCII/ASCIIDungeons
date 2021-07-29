import { Character } from './Character';
import {GameObject} from './GameObject';
import { Map } from "./Map";

/** A cursor that tracks the mouse position. */
export class Cursor extends GameObject {
  static gameObject = {character: " ", cColor: "#000000", bColor: "#FFFFFF"}

  /** Builds a Cursor. */
  constructor() {
    super();
    this.x = -1;
    this.y = -1;
    /** The selected character of the cursor. */
    this.character = " ";
    /** Is background rendering enabled? */
    this.background = true;
    /** The character color hex value. */
    this.cColor = "#000000";
    /** The background color hex value. */
    this.bColor = "#FFFFFF";
    this.isTicking = true;
    this.MAP = null;
  }

  step(deltatime, input) {
    if(!this.MAP) {
      this.MAP = this.GE.getObjectByType(Map);
      if(!this.MAP) return;
    }

    if(!input.MOUSE_ON_CANVAS) {
      this.x = -1;
      this.y = -1;
      return;
    }

    this.character = Cursor.gameObject.character;
    this.cColor = Cursor.gameObject.cColor;
    this.bColor = Cursor.gameObject.bColor;

    this.x = Math.floor((input.MOUSE_POS.x/(this.GE.renderer.mainCanvas.width+5))*this.GE.renderer.gridX);
    this.y = Math.floor((input.MOUSE_POS.y/(this.GE.renderer.mainCanvas.height+5))*this.GE.renderer.gridY);

    if(input.KEYS_PRESSED.length > 0) Cursor.gameObject.character = input.KEYS_PRESSED[input.KEYS_PRESSED.length-1][0];
    
    if(input.MOUSE_CLICK || input.MOUSE_DOWN) {
      this.MAP.setSpace(this.x,this.y,this.character);
    }
  }

  draw(renderer) {
    renderer.drawChar(this);
  }
}