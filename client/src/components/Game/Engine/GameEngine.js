import {Renderer} from './Modules/Renderer'
import {Map} from './Components/Map'
import { Scroller } from './Components/Scroller';
import { InputHandler } from './Modules/InputHandler';
import { Behaviour } from './Modules/Behaviour';
import { Cursor } from './Components/Cursor';
import { Player } from './Components/Player';

/** Runs all game based logic. */
export class GameEngine {
  /** The active game engine. */
  static active = null;

  /** Builds the game engine. */
  constructor() {
    /** List of current game objects. */
    GameEngine.active = this;

    this.container = null;

    this.objects = [
      new Map([
          [],
          [],
          [undefined,undefined,{character: "_",bColor: "#000000",background: false, cColor: "#FFFFFF",x:2,y:2},{character: "_",bColor: "#000000",background: false, cColor: "#FFFFFF",x:3,y:2},{character: "_",bColor: "#000000",background: false, cColor: "#FFFFFF",x:4,y:2},{character: "_",bColor: "#000000",background: false, cColor: "#FFFFFF",x:5,y:2},{character: "_",bColor: "#000000",background: false, cColor: "#FFFFFF",x:6,y:2},{character: "_",bColor: "#000000",background: false, cColor: "#FFFFFF",x:7,y:2},{character: "_",bColor: "#000000",background: false, cColor: "#FFFFFF",x:8,y:2},{character: "_",bColor: "#000000",background: false, cColor: "#FFFFFF",x:9,y:2},{character: "_",bColor: "#000000",background: false, cColor: "#FFFFFF",x:10,y:2}],
          [undefined,undefined,{character: "|",bColor: "#000000",background: false, cColor: "#FFFFFF",x:2,y:3},{character: ".",bColor: "#000000",background: false, cColor: "#FFFFFF",x:3,y:3},{character: ".",bColor: "#000000",background: false, cColor: "#FFFFFF",x:4,y:3},{character: ".",bColor: "#000000",background: false, cColor: "#FFFFFF",x:5,y:3},{character: ".",bColor: "#000000",background: false, cColor: "#FFFFFF",x:6,y:3},{character: ".",bColor: "#000000",background: false, cColor: "#FFFFFF",x:7,y:3},{character: ".",bColor: "#000000",background: false, cColor: "#FFFFFF",x:8,y:3},{character: ".",bColor: "#000000",background: false, cColor: "#FFFFFF",x:9,y:3},{character: "|",bColor: "#000000",background: false, cColor: "#FFFFFF",x:10,y:3}],
          [undefined,undefined,{character: "|",bColor: "#000000",background: false, cColor: "#FFFFFF",x:2,y:4},{character: ".",bColor: "#000000",background: false, cColor: "#FFFFFF",x:3,y:4},{character: ".",bColor: "#000000",background: false, cColor: "#FFFFFF",x:4,y:4},{character: ".",bColor: "#000000",background: false, cColor: "#FFFFFF",x:5,y:4},{character: ".",bColor: "#000000",background: false, cColor: "#FFFFFF",x:6,y:4},{character: ".",bColor: "#000000",background: false, cColor: "#FFFFFF",x:7,y:4},{character: ".",bColor: "#000000",background: false, cColor: "#FFFFFF",x:8,y:4},{character: ".",bColor: "#000000",background: false, cColor: "#FFFFFF",x:9,y:4},{character: "|",bColor: "#000000",background: false, cColor: "#FFFFFF",x:10,y:4}],
          [undefined,undefined,{character: "|",bColor: "#000000",background: false, cColor: "#FFFFFF",x:2,y:5},{character: ".",bColor: "#000000",background: false, cColor: "#FFFFFF",x:3,y:5},{character: ".",bColor: "#000000",background: false, cColor: "#FFFFFF",x:4,y:5},{character: ".",bColor: "#000000",background: false, cColor: "#FFFFFF",x:5,y:5},{character: ".",bColor: "#000000",background: false, cColor: "#FFFFFF",x:6,y:5},{character: ".",bColor: "#000000",background: false, cColor: "#FFFFFF",x:7,y:5},{character: ".",bColor: "#000000",background: false, cColor: "#FFFFFF",x:8,y:5},{character: ".",bColor: "#000000",background: false, cColor: "#FFFFFF",x:9,y:5},{character: "|",bColor: "#000000",background: false, cColor: "#FFFFFF",x:10,y:5}],
          [undefined,undefined,{character: "|",bColor: "#000000",background: false, cColor: "#FFFFFF",x:2,y:6},{character: "_",bColor: "#000000",background: false, cColor: "#FFFFFF",x:3,y:6},{character: "_",bColor: "#000000",background: false, cColor: "#FFFFFF",x:4,y:6},{character: "_",bColor: "#000000",background: false, cColor: "#FFFFFF",x:5,y:6},{character: "_",bColor: "#000000",background: false, cColor: "#FFFFFF",x:6,y:6},{character: "_",bColor: "#000000",background: false, cColor: "#FFFFFF",x:7,y:6},{character: "_",bColor: "#000000",background: false, cColor: "#FFFFFF",x:8,y:6},{character: "_",bColor: "#000000",background: false, cColor: "#FFFFFF",x:9,y:6},{character: "|",bColor: "#000000",background: false, cColor: "#FFFFFF",x:10,y:6}],
        ]),
      //new Scroller("&", "#00FF00", true, "#000000"),
      new Cursor(this),
      new Player(3,4)
    ];

    this.behaviour = new Behaviour();

    /** Refernce to the current input module. */
    this.input = new InputHandler();
    this.behaviour.INPUT = this.input;

    /** Refernce to the current renderer module. */
    this.renderer = new Renderer();

    /** List of modules to be executed. */
    this.pipeline = [
      this.behaviour,
      this.input,
      this.renderer
    ];

    for (const module of this.pipeline) {
      module.GE = this;
    }
  }

  /** On every animation frame, run the pipeline. */
  runPipeline(time) {
    this.behaviour.CURRENT_TIME = time;

    for(let module of this.pipeline){
      module.exec();
    }

    requestAnimationFrame(this.runPipeline.bind(this));
  }

  /** Starts the game engine. */
  start() {
    if(!this.container) {
      this.container = document.getElementById("gameContainer");
      if(!this.container) {
        requestAnimationFrame(this.start.bind(this));
        return;
      }
    }
    
    this.renderer.container = this.container;

    this.renderer.buildCanvases();

    this.buildLevel();

    requestAnimationFrame(this.runPipeline.bind(this));
  }

  /** Builds the current level. */
  buildLevel() {
    for (const object of this.objects) {
      object.GE = this;
      //Render Linking
      this.renderer.addObject(object, object.layer);
      if(object.isTicking) this.behaviour.addObject(object);
    }
  }

  addObject(component) {
      this.objects.push(component);
      this.renderer.addObject(component, component.layer);
      if(component.isTicking) this.behaviour.addObject(component);
  }

  removeObject(component) {
    this.objects = this.objects.filter(function(el){return el != component});
    this.renderer.removeObject(component, component.layer);
    if(component.isTicking) this.behaviour.removeObject(component);
  }

  getObjectByType(type) {
    for (const obj of this.objects) {
      if(obj instanceof type) return obj;
    }
    return null;
  }

  getObjectsByType(type) {
    let ret = [];

    for (const obj of this.objects) {
      if(obj instanceof type) ret.push(obj);
    }

    if(ret.length > 0) return ret;
    return null;
  }
}
