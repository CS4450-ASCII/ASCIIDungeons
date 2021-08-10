import { EntityGrid } from './EntityGrid';
import { GameObject } from './GameObject';
import { Map } from "./Map";

/** The player character. */
export class Player extends GameObject {
  /** Builds a Player. */
  constructor(x,y) {
    super();
    /** The appearance of the player. */
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

    this.walkable = [".","#"];
    this.timeTillWalk = 0;
    this.MAP = null;
    this.walkCoolDown = 200;
    this.grid = null;
  }

  step(deltatime, input) {
    if(!this.MAP) {
      this.MAP = this.GE.getObjectByType(Map);
      if(!this.MAP) return;
    }

    if(!this.grid) {
      this.grid = this.GE.getObjectByType(EntityGrid);
      if(!this.grid) return;
      this.grid.addEntity(this);
    }

    this.timeTillWalk -= deltatime;

    if(this.timeTillWalk <= 0) {
      let XVector = 0+(!!(input.KEYS_DOWN["a"])*-1)+(!!(input.KEYS_DOWN["d"])*1);
      let YVector = 0+(!!(input.KEYS_DOWN["w"])*-1)+(!!(input.KEYS_DOWN["s"])*1);

      if(this.checkBackgroundWalkable(this.MAP.getCharAt(this.x+XVector,this.y+YVector))) {
        this.x += XVector;
        this.y += YVector;
        this.timeTillWalk = this.walkCoolDown;
        this.grid.updateEntity(this);
        return;
      }

      XVector *= this.checkBackgroundWalkable(this.MAP.getCharAt(this.x+XVector,this.y));
      YVector *= this.checkBackgroundWalkable(this.MAP.getCharAt(this.x,this.y+YVector));

      if(XVector != 0 && YVector != 0) YVector = 0;

      this.x += XVector;
      this.y += YVector;
      
      if(XVector != 0 || YVector != 0) {
        this.timeTillWalk = this.walkCoolDown;
        this.grid.updateEntity(this);
      }
    }
  }

  checkBackgroundWalkable(slot) {
    for (const walk of this.walkable) {
      if(walk === slot) return true;
    }
    return false;
  }

  draw(renderer) {
    renderer.drawChar(this);
  }
}