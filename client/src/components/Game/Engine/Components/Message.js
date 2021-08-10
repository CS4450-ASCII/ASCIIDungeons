import { GameObject } from './GameObject';

/** Displays text on the screen with a type writer animation. */
export class Message extends GameObject {
  /** Builds a Message. */
  constructor(message, x = 0, y = 0, mouseEnabled = false) {
    super();
    this.fullText = message;
    this.x = x;
    this.y = y;
    this.tColor = "#FFFFFF"
    this.listenForMouse = mouseEnabled;

    this.text = "";
    this.totalTime = 0;
    this.timePerChar = 75;
    this.clickCallback = ()=>{};
    this.isTicking = true;
  }

  step(deltatime, input) {
    this.totalTime += deltatime;
    this.text = this.fullText.substr(0,Math.floor(this.totalTime/this.timePerChar));

    if(!this.listenForMouse) return;

    let tX = Math.floor(
      (input.MOUSE_POS.x / (this.GE.renderer.mainCanvas.width + 5)) *
        this.GE.renderer.gridX,
    );

    let tY = Math.floor(
      (input.MOUSE_POS.y / (this.GE.renderer.mainCanvas.height + 5)) *
        this.GE.renderer.gridY,
    );

    if(tX >= this.x && tX < this.x + this.fullText.length && tY === this.y) {
      this.tColor = "#FF0000";

      if(input.MOUSE_CLICK) {
        this.clickCallback();
      }
    }
    else {
      this.tColor = "#FFFFFF";
    }
  }

  draw(renderer) {
    renderer.drawText(this);
  }
}