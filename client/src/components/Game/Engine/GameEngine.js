import { EntityGrid } from './Components/EntityGrid';
import { GameObject } from './Components/GameObject';
import { Behaviour } from './Modules/Behaviour';
import { GameModule } from './Modules/GameModule';
import { InputHandler } from './Modules/InputHandler';
import { Renderer } from './Modules/Renderer';

/** Runs all game based logic. */
export class GameEngine {
  /** The active game engine. */
  static active = null;

  /** Builds the game engine. */
  constructor() {
    /** List of current game objects. */
    GameEngine.active = this;
    GameObject.GE = this;
    GameModule.GE = this;

    this.mountedGame = null;

    this.container = null;

    this.objects = [
      
    ];

    this.behaviour = new Behaviour();

    /** Refernce to the current input module. */
    this.input = new InputHandler();
    this.behaviour.INPUT = this.input;

    /** Refernce to the current renderer module. */
    this.renderer = new Renderer();

    /** List of modules to be executed. */
    this.pipeline = [this.behaviour, this.input, this.renderer];

    for (const module of this.pipeline) {
      module.GE = this;
    }
  }

  /** On every animation frame, run the pipeline. */
  runPipeline(time) {
    this.behaviour.CURRENT_TIME = time;

    for (let module of this.pipeline) {
      module.exec();
    }

    requestAnimationFrame(this.runPipeline.bind(this));
  }

  /** Starts the game engine. */
  start() {
    if (!this.container) {
      this.container = document.getElementById('gameContainer');
      if (!this.container) {
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
      if (object.isTicking) this.behaviour.addObject(object);
    }
  }

  addObject(component) {
    component.GE = this;
    this.objects.push(component);
    this.renderer.addObject(component, component.layer);
    if (component.isTicking) this.behaviour.addObject(component);
  }

  removeObject(component) {
    component.remove();

    this.objects = this.objects.filter(function (el) {
      return el != component;
    });
    this.renderer.removeObject(component, component.layer);
    if (component.isTicking) this.behaviour.removeObject(component);
  }

  getObjectByType(type) {
    for (const obj of this.objects) {
      if (obj instanceof type) return obj;
    }
    return null;
  }

  getObjectsByType(type) {
    let ret = [];

    for (const obj of this.objects) {
      if (obj instanceof type) ret.push(obj);
    }

    if (ret.length > 0) return ret;
    return null;
  }

  reset() {
    this.objects = [];

    for (let module of this.pipeline) {
      module.reset();
    }
  }

  loadGameLevel(level) {
    this.reset();

    this.objects.push(new EntityGrid());

    for (const obj of level.objects) {
      this.addObject(obj);
      this.renderer.gridX = level.width;
      this.renderer.gridY = level.height;
      this.renderer.resize();
    }
  }
}
