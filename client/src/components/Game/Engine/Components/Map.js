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

  draw(renderer) {
    renderer.drawMap(this);
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
  }

  clearSpace(x, y) {
    if (!this.gridItems[y]) this.gridItems[y] = [];

    this.gridItems[y][x] = undefined;
    this.GE.renderer.redrawBackground = true;
  }
}
