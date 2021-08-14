import { GameObject } from './GameObject';
import { Message } from './Message';

/** Displayes the welcom screen. */
export class WelcomeScreen extends GameObject {
  /** Builds a WelcomeScreen. */
  constructor() {
    super();
    this.mcGuffinOwners = ['Steven Hawking', 'Batman', 'Merlin'];

    this.mcGuffinAdjs = ['Stinky', 'Legendary', 'Blue'];

    this.mcGuffinObjs = ['Cheese', 'Amulet', 'Hat'];

    this.totalTime = 0;
    this.startTime = 2000;
    this.animationState = 0;
    this.isTicking = true;
  }

  init() {
    this.dungeonMessage = new Message(
      'Welcome to ' + this.GE.mountedGame.title + '!',
    );
    this.mcGuffinMessage = new Message(
      'Your mission is to find ' + this.genMcGuffin() + '.',
      0,
      1,
    );
    this.beginMessage = new Message('BEGIN', 0, 3, true);
    this.beginMessage.clickCallback = function () {
      this.GE.loadGameLevel(this.GE.mountedGame.nextLevel());
    };
  }

  step(deltatime) {
    this.totalTime += deltatime;
    if (this.totalTime < this.startTime) return;

    switch (this.animationState) {
      case 0:
        this.GE.addObject(this.dungeonMessage);
        this.animationState = 1;
        break;
      case 1:
        if (this.dungeonMessage.text === this.dungeonMessage.fullText)
          this.animationState = 2;
        break;
      case 2:
        this.GE.addObject(this.mcGuffinMessage);
        this.animationState = 3;
        break;
      case 3:
        if (this.mcGuffinMessage.text === this.mcGuffinMessage.fullText)
          this.animationState = 4;
        break;
      case 4:
        this.GE.addObject(this.beginMessage);
        this.animationState = 5;
        break;
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

  genMcGuffin() {
    return (
      this.mcGuffinOwners[
        Math.floor(Math.random() * this.mcGuffinOwners.length)
      ] +
      "'s " +
      this.mcGuffinAdjs[Math.floor(Math.random() * this.mcGuffinAdjs.length)] +
      ' ' +
      this.mcGuffinObjs[Math.floor(Math.random() * this.mcGuffinObjs.length)]
    );
  }
}
