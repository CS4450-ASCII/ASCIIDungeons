import { GameObject } from './GameObject';
import { Message } from './Message';

/** Displayes the failed screen. */
export class FailedScreen extends GameObject {
  /** Builds a FailedScreen. */
  constructor(reason = null) {
    super();

    this.totalTime = 0;
    this.startTime = 1000;
    this.animationState = 0;
    this.isTicking = true;
    this.reason = reason;
  }

  init() {
    this.sadMessage = new Message(
      'Tough luck ' + this.GE.playerName + '.',
    );

    this.sadMessageCont = !!(this.reason) ? new Message(
      this.reason,
      0,
      1,
    ) : new Message(
      'You were unable to find ' + this.GE.mountedGame.mcGuffin + '.',
      0,
      1,
    );

    this.timeMessage = new Message(
      'You survived a total of: ',
      0,
      2,
    );
  }

  step(deltatime) {
    this.totalTime += deltatime;
    if (this.totalTime < this.startTime) return;

    switch (this.animationState) {
      case 0:
        this.GE.addObject(this.sadMessage);
        this.animationState = 1;
        break;
      case 1:
        if (this.sadMessage.text === this.sadMessage.fullText)
          this.animationState = 2;
        break;
      case 2:
        this.GE.addObject(this.sadMessageCont);
        this.animationState = 3;
        break;
      case 3:
        if (this.sadMessageCont.text === this.sadMessageCont.fullText)
          this.animationState = 4;
        break;
      case 4:
        this.timeMessage.fullText += this.getFormattedTime();
        this.GE.addObject(this.timeMessage);
        this.animationState = 5;
        break;
      case 5:
        if (this.timeMessage.text === this.timeMessage.fullText)
          this.animationState = 6;
        break;
      /*case 4:
        this.GE.addObject(this.beginMessage);
        this.animationState = 5;
        break;*/
      default:
        break;
    }
  }

  draw(renderer) {}

  remove() {
    this.GE.removeObject(this.beginMessage);
    this.GE.removeObject(this.dungeonMessage);
    this.GE.removeObject(this.mcGuffinMessage);
  }

  getFormattedTime() {
    let time = this.GE.behaviour.CURRENT_TIME;

    time /= 1000;

    let seconds = time % 60;

    time = Math.trunc(time) - Math.trunc(seconds);

    let minutes = (time % 3600) / 60;

    time -= minutes * 60;

    let hours = time / 3600;

    let timeString =
      hours.toString().padStart(2, '0') +
      ':' +
      minutes.toString().padStart(2, '0') +
      ':' +
      Math.trunc(seconds).toString().padStart(2, '0') +
      '.' +
      ((seconds - Math.trunc(seconds)).toFixed(3) * 1000)
        .toString()
        .padStart(3, '0');
    console.log(this.GE.behaviour);
    return timeString;
  }
}
