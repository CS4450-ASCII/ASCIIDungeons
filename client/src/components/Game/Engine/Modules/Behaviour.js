import {GameModule} from './GameModule';

/** This module will cause game components to tick each frame. It also passes in relavent info like delta time and inputs. */
export class Behaviour extends GameModule {
  /** Builds a Behaviour. */
  constructor() {
    super();
    this.LAST_TIME = 0;
    this.CURRENT_TIME = 0;
    this.DELTA_TIME = 0;
    this.OBJECTS = [];
    this.INPUT = {};
  }

  exec() {
    this.DELTA_TIME = this.CURRENT_TIME - this.LAST_TIME;
    this.LAST_TIME = this.CURRENT_TIME;

    for(let object of this.OBJECTS) {
      object.step(this.DELTA_TIME, this.INPUT);
    }
  }

  addObject(object) {
    this.OBJECTS.push(object);
  }
}