import { Message } from './Message';

/** Displays text on the screen with a type writer animation. */
export class TimedMessage extends Message {
  /** Builds a Message. */
  constructor(message, x = 0, y = 0, hangTime = 2000, mouseEnabled = false) {
    super(message, x, y, mouseEnabled);

    this.hangTime = hangTime;
  }

  step(deltatime, input) {
    super.step(deltatime, input);

    if (this.totalTime > this.hangTime) {
      this.GE.removeObject(this);
    }
  }
}