import { EntityGrid } from './EntityGrid';
import { GameObject } from './GameObject';
import { Map } from './Map';
import { StairsUp } from './StairsUp';

/** The player character. */
export class Player extends GameObject {
  /** Builds a Player. */
  constructor(x, y) {
    super();
    /** The appearance of the player. */
    this.character = '@';
    /** Is background rendering enabled? */
    this.background = true;
    /** The character color hex value. */
    this.cColor = '#00FF00';
    /** The background color hex value. */
    this.bColor = '#000000';
    this.isTicking = true;
    this.x = x;
    this.y = y;
    this.layer = 'player';
    this.collisionValue = 0;

    this.walkable = ['.', '#'];
    this.timeTillWalk = 0;
    this.MAP = null;
    this.walkCoolDown = 200;
    this.grid = null;

    this.firstTime = true;
  }

  init() {
    this.MAP = this.GE.getObjectByType(Map);
    this.grid = this.GE.getObjectByType(EntityGrid);

    let playerExistsInLevel = false;

    for (const row of this.grid.grid) {
      if(!row) continue;
      for (const space of row) {
        if(!space) continue;
        for (const ent of space) {
          if(!ent) continue;
          if(ent === this) playerExistsInLevel = true;
        }
      }
    }

    if(!playerExistsInLevel) this.grid.addEntity(this);

    if(this.firstTime) {
      let startStairs = new StairsUp(this.x, this.y);
      startStairs.topLevelExit = true;
      this.GE.mountedGame.levels[this.GE.mountedGame.levelIndex].objects.push(startStairs);
      this.GE.addObject(startStairs);
      this.firstTime = false;

      this.MAP.setSpace(this.x, this.y, { character: "." });
    }
  }

  step(deltatime, input) {
    if (!this.MAP) {
      this.MAP = this.GE.getObjectByType(Map);
      if (!this.MAP) return;
    }

    if (!this.grid) {
      this.grid = this.GE.getObjectByType(EntityGrid);
      if (!this.grid) return;
      this.grid.addEntity(this);
    }

    this.collisionValue += 0 + input.wasKeyPressed("p");
    this.collisionValue *= (this.collisionValue <= 2);

    switch (this.collisionValue) {
      case 0:
        this.character = "@";
        break;
      case 1:
        this.character = "d";
        break;
      case 2:
        this.character = "g";
    }

    this.timeTillWalk -= deltatime;

    if (this.timeTillWalk <= 0) {
      let XVector =
        0 + !!input.KEYS_DOWN['a'] * -1 + !!input.KEYS_DOWN['d'] * 1;
      let YVector =
        0 + !!input.KEYS_DOWN['w'] * -1 + !!input.KEYS_DOWN['s'] * 1;

      if (this.x + XVector < 0 || this.x + XVector >= this.GE.renderer.gridX) XVector = 0;
      if (this.y + YVector < 0 || this.y + YVector >= this.GE.renderer.gridY) YVector = 0;

      if(YVector === 0 && XVector === 0) return;

      if (
        this.checkWalkable(
          this.MAP.getCollisionAt(this.x + XVector, this.y + YVector),
        )
      ) {
        this.x += XVector;
        this.y += YVector;
        this.timeTillWalk = this.walkCoolDown;
        this.grid.updateEntity(this);
        return;
      }

      XVector *= this.checkWalkable(
        this.MAP.getCollisionAt(this.x + XVector, this.y),
      );
      YVector *= this.checkWalkable(
        this.MAP.getCollisionAt(this.x, this.y + YVector),
      );

      if (XVector != 0 && YVector != 0) YVector = 0;

      this.x += XVector;
      this.y += YVector;

      if (XVector != 0 || YVector != 0) {
        this.timeTillWalk = this.walkCoolDown;
        this.grid.updateEntity(this);
      }
    }
  }

  checkWalkable(value) {
    return value <= this.collisionValue;
  }

  draw(renderer) {
    renderer.drawChar(this);
  }
}
