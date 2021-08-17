import { EntityGrid } from './EntityGrid';
import { FinalScreen } from './FinalScreen';
import { GameObject } from './GameObject';
import { Map } from './Map';
import { Player } from './Player';

/** Stairs used to move to the next level. */
export class McGuffin extends GameObject {
  /** Builds a McGuffin. */
  constructor(x, y) {
    super();
    /** The appearance of the mcguffing. */
    this.character = '§';
    /** Is background rendering enabled? */
    this.background = true;
    /** The character color hex value. */
    this.cColor = '#FFFF00';
    /** The background color hex value. */
    this.bColor = '#000000';
    this.isTicking = true;
    this.x = x;
    this.y = y;
    this.layer = 'object';

    this.timeToWait = 1000;
    this.timeWated = 0;

    this.grid = null;
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

        if (this.timeWaited >= this.timeToWait) {
          this.GE.reset();
          this.GE.renderer.gridX = 65;
          this.GE.renderer.gridY = 10;
          this.GE.renderer.resize();
          this.GE.addObject(new FinalScreen());
        }
      }
    }

    if (!found) this.timeWaited = 0;
  }

  draw(renderer) {
    renderer.drawChar(this);
  }
}
