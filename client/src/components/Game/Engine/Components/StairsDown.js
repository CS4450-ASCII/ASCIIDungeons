import { EntityGrid } from './EntityGrid';
import { GameObject } from './GameObject';
import { Map } from './Map';
import { Player } from './Player';
import { TimedMessage } from './TimedMessage';

/** Stairs used to move to the next level. */
export class StairsDown extends GameObject {
  /** Builds a StairsDown. */
  constructor(x, y) {
    super();
    /** The appearance of the scroller. */
    this.character = ">";
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

    this.grid = null;
    this.MAP = null;
    this.fakeMessage = null;
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
        this.timeWaited += deltatime;

        if (this.timeWaited >= this.timeToWait && this.GE.mountedGame.hasNextLevel()) this.GE.loadGameLevel(this.GE.mountedGame.nextLevel());
        else if (!this.GE.mountedGame.hasNextLevel() && this.timeWaited >= this.timeToWait) {
          if (!this.fakeMessage) {
            this.fakeMessage = new TimedMessage("DEAD END!");
            this.GE.addObject(this.fakeMessage);
          }

          this.fakeMessage.x = ent.x - 4;
          this.fakeMessage.y = ent.y - 1;
        }
      }
    }

    if (!found) {
      this.timeWaited = 0;
      if (this.fakeMessage) this.fakeMessage.hangTime = -1;
      this.fakeMessage = null;
    }
  }

  draw(renderer) {
    renderer.drawChar(this);
  }
}