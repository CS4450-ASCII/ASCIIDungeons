import { GameObject } from './GameObject';
import { Message } from './Message';

/** Displayes the final screen. */
export class FinalScreen extends GameObject {
  /** Builds a FinalScreen. */
  constructor() {
    super();

    this.totalTime = 0;
    this.startTime = 1000;
    this.animationState = 0;
    this.isTicking = true;
  }

  init() {
    this.congratsMessage = new Message(
      'Congratulations ' + this.GE.playerName + '!!!',
    );
    this.timeMessage = new Message(
      'You found ' + this.GE.mountedGame.mcGuffin + ' in: ',
      0,
      1,
    );
  }

  step(deltatime) {
    this.totalTime += deltatime;
    if (this.totalTime < this.startTime) return;

    switch (this.animationState) {
      case 0:
        this.GE.addObject(this.congratsMessage);
        this.animationState = 1;
        break;
      case 1:
        if (this.congratsMessage.text === this.congratsMessage.fullText)
          this.animationState = 2;
        break;
      case 2:
        this.timeMessage.fullText += this.getFormattedTime();
        this.GE.addObject(this.timeMessage);
        this.animationState = 3;
        break;
      case 3:
        if (this.timeMessage.text === this.timeMessage.fullText)
          this.animationState = 4;
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
