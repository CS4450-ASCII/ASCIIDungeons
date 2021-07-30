import {GameModule} from './GameModule';

/** Handles all input for the engine and provides hooks that components can use*/
export class InputHandler extends GameModule {
  /** Builds a InputHandler. */
  constructor() {
    super();

    this.TYPES = {
      MOUSE: 0,
      KEY: 1
    }

    this.MOUSE_EVENTS = [];
    this.KEY_EVENTS = [];
    this.EVENT_LOG = [];

    this.CANVAS = null;

    this.MOUSE_POS = {x: 0, y: 0};
    this.MOUSE_ON_CANVAS = false;
    this.MOUSE_CLICK = false;
    this.MOUSE_RIGHT_CLICK = false;
    this.MOUSE_DOWN = false;

    this.KEYS_PRESSED = [];
    this.KEYS_DOWN = {};
  }
  
  exec() {
    if(!this.CANVAS) {
      this.CANVAS = this.GE.renderer.foregroundCanvas;
      if(this.CANVAS) {
        this.CANVAS.addEventListener("mousemove", this.mouseMoveEvent.bind(this));
        this.CANVAS.addEventListener("mouseenter", this.mouseEnterEvent.bind(this));
        this.CANVAS.addEventListener("mouseleave", this.mouseLeaveEvent.bind(this));
        this.CANVAS.addEventListener("click", this.mouseClickEvent.bind(this));
        this.CANVAS.addEventListener("contextmenu", this.mouseRightClickEvent.bind(this));
        this.CANVAS.addEventListener("mousedown", this.mouseDownEvent.bind(this));
        this.CANVAS.addEventListener("mouseup", this.mouseUpEvent.bind(this));
        document.addEventListener("keypress", this.keyPressedEvent.bind(this));
        document.addEventListener("keydown", this.keyDownEvent.bind(this));
        document.addEventListener("keyup", this.keyUpEvent.bind(this));
      }
    }
    else this.run();
  }

  run() {
    this.EVENT_LOG = [];
    this.MOUSE_CLICK = false;
    this.MOUSE_RIGHT_CLICK = false;
    this.KEYS_PRESSED = [];
  }

  mouseMoveEvent(e) {
    let bounds = this.CANVAS.getBoundingClientRect();
    let x = e.clientX - bounds.left;
    let y = e.clientY - bounds.top;
    this.EVENT_LOG.push({type:"mousemove",info:this.calcCoords(e)});
    this.MOUSE_POS.x = x;
    this.MOUSE_POS.y = y;
  }

  mouseEnterEvent(e) {
    this.MOUSE_ON_CANVAS = true;
    this.EVENT_LOG.push({type:"mouseenter",info:this.calcCoords(e)});
    this.CANVAS.focus();
  }

  mouseLeaveEvent(e) {
    this.MOUSE_ON_CANVAS = false;
    this.EVENT_LOG.push({type:"mouseleave",info:this.calcCoords(e)});
  }

  mouseClickEvent(e) {
    this.MOUSE_CLICK = true;
    this.EVENT_LOG.push({type:"mouseclick",info:this.calcCoords(e)});
  }

  mouseRightClickEvent(e) {
    e.preventDefault();
    this.MOUSE_RIGHT_CLICK = true;
    this.EVENT_LOG.push({type:"mouserightclick",info:this.calcCoords(e)});
  }

  mouseDownEvent(e) {
    this.MOUSE_DOWN = true;
    this.EVENT_LOG.push({type:"mousedown",info:this.calcCoords(e)});
  }

  mouseUpEvent(e) {
    this.MOUSE_DOWN = false;
    this.EVENT_LOG.push({type:"mouseup",info:this.calcCoords(e)});
  }

  keyPressedEvent(e) {
    if(this.CANVAS)
    this.KEYS_PRESSED.push(e.key);
    this.EVENT_LOG.push({type:"keypressed",info:{key:e.key,x:this.MOUSE_POS.x,y:this.MOUSE_POS.y}});
  }

  keyDownEvent(e) {
    this.KEYS_DOWN[e.key] = true;
    this.EVENT_LOG.push({type:"keydown",info:{key:e.key,x:this.MOUSE_POS.x,y:this.MOUSE_POS.y}});
  }

  keyUpEvent(e) {
    this.KEYS_DOWN[e.key] = false;
    this.EVENT_LOG.push({type:"keyup",info:{key:e.key,x:this.MOUSE_POS.x,y:this.MOUSE_POS.y}});
  }

  calcCoords(e) {
    let bounds = this.CANVAS.getBoundingClientRect();
    let x = e.clientX - bounds.left;
    let y = e.clientY - bounds.top;
    return {x:x,y:y};
  }
}