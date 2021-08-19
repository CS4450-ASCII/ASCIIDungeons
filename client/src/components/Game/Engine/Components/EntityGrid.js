import { GameObject } from './GameObject';

/** Grid containing entities, used for collision checks and entity interaction. */
export class EntityGrid extends GameObject {
  /** Builds a EntityGrid. */
  constructor() {
    super();
    this.grid = [];
  }

  step(deltatime) {}

  updateEntity(entity) {
    this.validateSpace(entity.gX, entity.gY);

    this.grid[entity.gY][entity.gX] = this.grid[entity.gY][entity.gX].filter(function (el) {
      return el != entity;
    });

    this.validateSpace(entity.x, entity.y);

    this.grid[entity.y][entity.x].push(entity);

    entity.gX = entity.x;
    entity.gY = entity.y;
  }

  addEntity(entity) {
    entity.gX = entity.x;
    entity.gY = entity.y;

    this.validateSpace(entity.x, entity.y);

    this.grid[entity.y][entity.x].push(entity);
  }

  validateSpace(x,y) {
    if(!this.grid[y]) this.grid[y] = [];
    if(!this.grid[y][x]) this.grid[y][x] = [];
  }

  getSpace(x,y) {
    if(!this.grid[y]) return [];
    if(!this.grid[y][x]) return [];
    return this.grid[y][x];
  }

  removeEntity(entity) {
    this.grid[entity.gY][entity.gX] = this.grid[entity.gY][entity.gX].filter(function (el) {
      return el != entity;
    });
  }
}