import _ from 'lodash';
import { GameObject } from './GameObject';

/** World map object. */
export class Map extends GameObject {
  /**
   * Builds a map object.
   * @param {object} map - Raw map data.
   */
  constructor(mapData = '[]') {
    super();
    this.layer = 'world';
    this.grid = JSON.parse(mapData);
  }

  draw(renderer) {
    renderer.drawMap(this);
  }

  getCharAt(x, y) {
    const object = _.find(this.grid, { x, y });
    if (!object) return 'ζ';

    return object.character;
  }

  setSpace(
    x,
    y,
    character = '?',
    cColor = '#FFFFFF',
    bColor = '#000000',
    background = false,
  ) {
    const newObject = {
      character,
      cColor,
      bColor,
      background,
      x,
      y,
    };
    const object = _.find(this.grid, { x, y });
    if (object) {
      _.merge(object, newObject);
    } else {
      this.grid.push(newObject);
    }

    this.GE.renderer.redrawBackground = true;
  }

  clearSpace(x, y) {
    if (!this.grid[y]) this.grid[y] = [];

    this.grid[y][x] = undefined;
    this.GE.renderer.redrawBackground = true;
  }
}
