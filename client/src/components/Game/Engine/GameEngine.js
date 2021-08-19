import { withStyles } from '@material-ui/core';
import { Component } from 'react';
import { Player } from './Components/Player';
import { Behaviour } from './Modules/Behaviour';
import { InputHandler } from './Modules/InputHandler';
import { Renderer } from './Modules/Renderer';

const styles = {
  gameEngineContainerRoot: {
    marginTop: 12,
    height: '95%',
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
  },
};
/** Runs all game based logic. */
class GameEngine extends Component {
  /** Builds the game engine. */
  constructor(props) {
    super(props);

    const { showGridLines, mountedGame, objects = [], playerName } = this.props;

    this.mountedGame = mountedGame;
    this.playerName = playerName;

    this.container = null;

    this.objects = objects;

    this.behaviour = new Behaviour();

    /** Refernce to the current input module. */
    this.input = new InputHandler();
    this.behaviour.INPUT = this.input;

    /** Refernce to the current renderer module. */
    this.renderer = new Renderer();
    this.renderer.showGridLines(showGridLines);

    /** List of modules to be executed. */
    this.pipeline = [this.behaviour, this.input, this.renderer];

    for (const module of this.pipeline) {
      module.GE = this;
    }

    // for (const object of objects) {
    //   this.addObject(object);
    // }

    // this.state = {
    //   showGridLines: showGrid,
    // };
  }

  componentDidMount() {
    this.start();
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

    this.init();

    requestAnimationFrame(this.runPipeline.bind(this));
  }

  /** Builds the current level. */
  init() {
    for (const object of this.objects) {
      object.GE = this;
      //Render Linking
      this.renderer.addObject(object, object.layer);
      if (object.isTicking) this.behaviour.addObject(object);
      object.init();
    }
  }

  addObject(object) {
    object.GE = this;
    this.objects.push(object);
    this.renderer.addObject(object, object.layer);
    if (object.isTicking) this.behaviour.addObject(object);
    
    object.init();
  }

  removeObject(object) {
    object.remove();

    this.objects = this.objects.filter(function (el) {
      return el != object;
    });
    this.renderer.removeObject(object, object.layer);
    if (object.isTicking) this.behaviour.removeObject(object);
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

    //this.objects.push(new EntityGrid());

    this.renderer.gridX = level.width;
    this.renderer.gridY = level.height;

    for (const obj of level.objects) {
      if(obj instanceof Player) continue;
      
      this.addObject(obj);
    }

    this.addObject(this.mountedGame.player);
    this.renderer.resize();
  }

  render() {
    const { classes } = this.props;
    return (
      <div id='gameContainer' className={classes.gameEngineContainerRoot}></div>
    );
  }
}

export default withStyles(styles)(GameEngine);
