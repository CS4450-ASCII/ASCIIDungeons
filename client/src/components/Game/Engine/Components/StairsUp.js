import { EntityGrid } from './EntityGrid';
import { FailedScreen } from './FailedScreen';
import { GameObject } from './GameObject';
import { Map } from './Map';
import { Player } from './Player';
import { StairsDown } from './StairsDown';
import { TimedMessage } from './TimedMessage';

/** Stairs used to move to the next level. */
export class StairsUp extends GameObject {
  /** Builds a StairsDown. */
  constructor(x, y, exit = {level: -1, x: -1, y: -1}) {
    super();
    /** The appearance of the scroller. */
    this.character = "<";
    /** Is background rendering enabled? */
    this.background = true;
    /** The character color hex value. */
    this.cColor = "#FFFFFF";
    /** The background color hex value. */
    this.bColor = "#000000";
    this.isTicking = true;
    this.x = x;
    this.y = y;
    this.layer = "object";

    this.timeToWait = 1000;
    this.timeWated = 0;

    this.exit = exit.level >= 0 ? exit : null;
    this.hasExit = false;

    this.activeLockTime = 10;
    this.activeLockLeft = 0;

    this.grid = null;
    this.MAP = null;
    this.fakeMessage = null;

    this.topLevelExit = false;
  }

  init() {
    this.hasExit = this.confirmExit(this.exit);
    this.activeLockLeft = this.activeLockTime;
  }

  step(deltatime) {
    if (!this.MAP) {
      this.MAP = this.GE.getObjectByType(Map);
      if (!this.MAP) return;
      this.MAP.setSpace(this.x, this.y, { character: "." });
    }

    if (!this.grid) {
      this.grid = this.GE.getObjectByType(EntityGrid);
      if (!this.grid) return;
      this.grid.addEntity(this);
    }

    let space = this.grid.getSpace(this.x, this.y);
    let found = false;

    for (const ent of space) {
      found = false;
      if (ent instanceof Player) {
        found = true;

        if(this.activeLockLeft >= 0) break;

        this.timeWaited += deltatime;

        if (this.timeWaited >= this.timeToWait && this.hasExit) {
          this.GE.mountedGame.player.x = this.exit.x;
          this.GE.mountedGame.player.y = this.exit.y;

          this.GE.mountedGame.levelIndex = this.exit.level;
          this.GE.loadGameLevel(this.GE.mountedGame.getLevel(this.exit.level));
        }
        else if (!this.hasExit && this.timeWaited >= this.timeToWait) {
          if(this.topLevelExit) {
            this.GE.reset();
            this.GE.renderer.gridX = 65;
            this.GE.renderer.gridY = 10;
            this.GE.renderer.resize();
            this.GE.addObject(new FailedScreen());
            return;
          }

          if (!this.fakeMessage) {
            this.fakeMessage = new TimedMessage("DEAD END!");
            this.fakeMessage.tColor = "#FF0000";
            this.GE.addObject(this.fakeMessage);
          }

          this.fakeMessage.x = ent.x - 4;
          this.fakeMessage.y = ent.y - 1;
        }
      }
    }

    if (!found) {
      this.activeLockLeft -= deltatime;
      this.timeWaited = 0;
      if (this.fakeMessage) this.fakeMessage.hangTime = -1;
      this.fakeMessage = null;
    }
  }

  confirmExit(exit) {
    if(!exit) return;
    if(!this.GE.mountedGame.getLevel(exit.level)) return false;

    console.log(exit);
    console.log(this.GE.mountedGame.getLevel(exit.level));
    
    for (const object of this.GE.mountedGame.getLevel(exit.level).objects) {
      console.log(object);
      if(object instanceof StairsDown) {
        if(object.x === exit.x && object.y === exit.y) return true;
      }
    }

    return false;
  }

  draw(renderer) {
    renderer.drawChar(this);
  }
}