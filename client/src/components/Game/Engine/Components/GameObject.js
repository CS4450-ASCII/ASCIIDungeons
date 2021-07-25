/** Game object parent class. */
export class GameObject {
  /** Builds a basic game object. */
  constructor() {
    this.x = 0;
    this.y = 0;
    this.layer = 'object';
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
}
