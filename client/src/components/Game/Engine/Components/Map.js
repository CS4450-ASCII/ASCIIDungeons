import _ from 'lodash';
import { GameObject } from './GameObject';

/** World map object. */
export class Map extends GameObject {
  /**
   * Builds a map object.
   * @param {object} map - Raw map data.
   */
  constructor(mapProps) {
    super();
    this.layer = 'world';
    this.gridItems = _.get(mapProps, 'gridItems');
    this.mapProps = mapProps;
  }

  init() {
    this.collisionGrid = [];

    for (let i = 0; i < this.GE.renderer.gridY; i++) {
      this.collisionGrid[i] = new Array(this.GE.renderer.gridX).fill(1);
    }

    for (const item of this.gridItems) {
      this.collisionGrid[item.y][item.x] = this.convertToCollisionValue(item.character);
    }
  }

  draw(renderer) {
    renderer.drawMap(this);
  }

  getCollisionAt(x, y) {
    return this.collisionGrid[y][x];
  }

  convertToCollisionValue(char) {
    if (char === "." || char === "#") return 0;
    else return 2;
  }

  getCharAt(x, y) {
    const object = _.find(this.gridItems, { x, y });
    if (!object) return 'ζ';

    return object.character;
  }

  setSpace(x, y, gameObject) {
    const newObject = {
      ...gameObject,
      x,
      y,
    };
    const object = _.find(this.gridItems, { x, y });
    if (object) {
      _.merge(object, newObject);
    } else {
      this.gridItems.push(newObject);
    }

    _.invoke(this.mapProps, 'onSpaceChange', [...this.gridItems]);
    this.GE.renderer.redrawBackground = true;

    this.collisionGrid[y][x] = this.convertToCollisionValue(gameObject.character);
  }

  clearSpace(x, y) {
    if (!this.gridItems[y]) this.gridItems[y] = [];

    this.gridItems[y][x] = undefined;
    this.GE.renderer.redrawBackground = true;

    this.collisionGrid[y][x] = 1;
  }
}
