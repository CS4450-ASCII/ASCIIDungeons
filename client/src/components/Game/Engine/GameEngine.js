import {Renderer} from './Modules/Renderer'
import {Map} from './Components/Map'
import { Scroller } from './Components/Scroller';

/** Runs all game based logic. */
export class GameEngine {
  /** Builds the game engine. */
  constructor() {
    /** List of current game objects. */
    this.objects = [
      new Map([
          [{clear:true}],
          [{clear:true}],
          [{color:"#FFFFFF", text:"   @  "},{color:"#0000FF", text:"@"},{clear:true}],
          [{clear:true}],
          [{color:"#FFFFFF", text:"  @@@@@@"}]
        ]),
      new Scroller("&", "#00FF00", true, "#000000")
    ];

    /** Refernce to the current renderer module. */
    this.renderer = new Renderer();

    /** List of modules to be executed. */
    this.pipeline = [
      this.renderer
    ];
  }

  /** On every animation frame, run the pipeline. */
  runPipeline() {
    for(let component of this.pipeline){
      component.exec();
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
    }
  }
}
