/** Game object parent class. */
export class GameObject {
  static GE = {};

  /** Builds a basic game object. */
  constructor() {
    this.GE = GameObject.GE;
    this.x = 0;
    this.y = 0;
    this.layer = 'object';
    this.isTicking = false;
  }

  /**
   * Called before every frame.
   * @param {number} deltatime - The time in milliseconds since last frame.
   */
  step(deltatime) {}

  /**
   * Called on frame draw.
   * @param {object} renderer - A reference to the renderer module.
   */
  draw(renderer) {}

  /**
   * Called when the object is destroyed.
   */
  remove() {}
}
