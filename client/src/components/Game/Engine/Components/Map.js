import {GameObject} from "./GameObject";

/** World map object. */
export class Map extends GameObject {
  /**
   * Builds a map object.
   * @param {object} map - Raw map data.
   */
  constructor(map) {
    super();
    this.layer = "world";
    this.rMap = map;
  }

  draw(renderer) {
    renderer.drawMap(this);
  }
}