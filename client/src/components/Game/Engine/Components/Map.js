import {GameObject} from "./GameObject";

/** World map object. */
export class Map extends GameObject {
  /**
   * Builds a map object.
   * @param {object} map - Raw map data.
   */
  constructor(map = []) {
    super();
    this.layer = "world";
    this.grid = map;
  }

  draw(renderer) {
    renderer.drawMap(this);
  }

  getCharAt(x,y) {
    if(!this.grid[y]) return "ζ";
    if(!this.grid[y][x]) return "ζ";
    return this.grid[y][x].character;
  }

  setSpace(x, y, character = "?", cColor = "#FFFFFF", bColor = "#000000", background = false) {
    if(!this.grid[y]) this.grid[y] = [];

    this.grid[y][x] = {character,cColor,bColor,background,x,y};
    this.GE.renderer.redrawBackground = true;
  }

  clearSpace(x, y) {
    if(!this.grid[y]) this.grid[y] = [];

    this.grid[y][x] = undefined;
    this.GE.renderer.redrawBackground = true;
  }
}