import {GameObject} from './GameObject';
import { Map } from "./Map";

/** The player character. */
export class Player extends GameObject {
  /** Builds a Player. */
  constructor(x,y) {
    super();
    /** The appearance of the scroller. */
    this.character = "@";
    /** Is background rendering enabled? */
    this.background = true;
    /** The character color hex value. */
    this.cColor = "#00FF00";
    /** The background color hex value. */
    this.bColor = "#000000";
    this.isTicking = true;
    this.x = x;
    this.y = y;
    this.layer = "player";

    this.walkable = ["."];
    this.timeTillWalk = 0;
    this.MAP = null;
    this.walkCoolDown = 200;
  }

  step(deltatime, input) {
    if(!this.MAP) {
      this.MAP = this.GE.getObjectByType(Map);
      if(!this.MAP) return;
    }

    this.timeTillWalk -= deltatime;
    if(input.KEYS_DOWN["w"] && this.timeTillWalk <= 0) {
      if(this.MAP.getCharAt(this.x,this.y-1) == ".") {
        this.y -= 1;
        this.timeTillWalk = this.walkCoolDown;
      }
    }
    if(input.KEYS_DOWN["s"] && this.timeTillWalk <= 0) {
      if(this.MAP.getCharAt(this.x,this.y+1) == ".") {
        this.y += 1;
        this.timeTillWalk = this.walkCoolDown;
      }
    }
    if(input.KEYS_DOWN["a"] && this.timeTillWalk <= 0) {
      if(this.MAP.getCharAt(this.x-1,this.y) == ".") {
        this.x -= 1;
        this.timeTillWalk = this.walkCoolDown;
      }
    }
    if(input.KEYS_DOWN["d"] && this.timeTillWalk <= 0) {
      if(this.MAP.getCharAt(this.x+1,this.y) == ".") {
        this.x += 1;
        this.timeTillWalk = this.walkCoolDown;
      }
    }
  }

  draw(renderer) {
    renderer.drawChar(this);
  }
}