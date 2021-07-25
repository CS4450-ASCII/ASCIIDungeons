import { Behaviour } from './Modules/Behaviour';
import { InputHandler } from './Modules/InputHandler';
import { Renderer } from './Modules/Renderer';

/** Runs all game based logic. */
export class GameEngine {
  /** Builds the game engine. */
  constructor() {
    /** List of current game objects. */
    this.objects = [
      // new Map([
      //   [{ clear: true }],
      //   [{ clear: true }],
      //   [
      //     { color: '#FFFFFF', text: '   @  ' },
      //     { color: '#0000FF', text: '@' },
      //     { clear: true },
      //   ],
      //   [{ clear: true }],
      //   [{ color: '#FFFFFF', text: '  @@@@@@' }],
      // ]),
      // new Scroller('&', '#00FF00', true, '#000000'),
    ];

    this.behaviour = new Behaviour();

    /** Refernce to the current input module. */
    this.input = new InputHandler();
    this.behaviour.INPUT = this.input;

    /** Refernce to the current renderer module. */
    this.renderer = new Renderer();

    /** List of modules to be executed. */
    this.pipeline = [this.behaviour, this.input, this.renderer];
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
    this.buildLevel();

    requestAnimationFrame(this.runPipeline.bind(this));
  }

  /** Builds the current level. */
  buildLevel() {
    for (const object of this.objects) {
      //Render Linking
      this.renderer.addObject(object, object.layer);
      this.behaviour.addObject(object);
    }
  }

  addComponent(component) {
    this.renderer.addObject(component, component.layer);
    this.behaviour.addObject(component);
  }
}
