/** A basic game engine module. */
export class GameModule {
  //static GE = {};

  /** Builds a basic module. */
  constructor() {
    this.GE = {};
  }
  /** For active modules, this is called by the pipeline each frame. */
  exec() {}

  /** Resets the modules object data. */
  reset() {}
}
