import { GameModule } from './GameModule';

/** The renderer module, handles drawing objects to the canvas and contains tools for doing so. */
export class Renderer extends GameModule {
  /** Builds the renderer. */
  constructor() {
    super();
    /** Reference to the canvas HTML element. */
    this.canvas = null;
    /** Reference to the canvas container HTML element. */
    this.container = null;
    /** Reference to the canvas context. */
    this.ctx = null;
    /** The previous height of the container. */
    this.prevContHeight = 0;
    /** The previous width of the container. */
    this.prevContWidth = 0;
    /** Are debug grid lines drawn? */
    this.gridLines = false;
    /** Number of grid spaces left to right. */
    this.gridX = 40;
    /**Number of grid spaces up to down. */
    this.gridY = 15;
    /** The size of the text. */
    this.fontsize = 1;
    /** Background canvas. - 0 */
    this.backgroundCanvas = {};
    /** Background context. - 0 */
    this.bgCtx = null;
    /** Bool that determines if the background should redraw. */
    this.redrawBackground = false;
    /** Main canvas. - 1 */
    this.mainCanvas = {};
    /** Main context. - 1 */
    this.mainCtx = null;
    /** Foreground canvas. - 2 */
    this.foregroundCanvas = {};
    /** Foreground context. - 2 */
    this.fgCtx = null;
    /** Bool that determines if the foreground should redraw. */
    this.redrawForeground = false;
    /** The current context to draw on. */
    this.currentCtx = null;
    /** List of renderer layers. */
    this.layers = [{ id: Number.MAX_SAFE_INTEGER, objects: [], canvasID: 1 }];
    /** Object containing layers referenced with keys. */
    this.layerKeys = { debug: this.layers[0] };
    /** Layer for map drawing and other static objects. */
    this.worldLayer = this.createLayer(0, 'world', 0);
    /** Layer for generic game objects. */
    this.objectLayer = this.createLayer(1, 'object', 1);
    /** Layer for player game objects. */
    this.objectLayer = this.createLayer(2, 'player', 1);
    /** Layer used to obscure unseen parts of the map. */
    this.discoveryLayer = this.createLayer(3, 'discovery', 2);
    /** Layer for generic effects. */
    this.effectLayer = this.createLayer(4, 'effect', 2);
  }

  exec() {
    /*if(!this.canvas) {
      this.canvas = document.getElementById("gameCanvas");
      if(this.canvas) {
        this.container = document.getElementById("gameContainer");
        this.ctx = this.canvas.getContext("2d");
      }
    }
    else*/ this.draw();
  }

  /** Draws each object to the screen. */
  draw() {
    if (
      this.prevContHeight !== this.container.clientHeight ||
      this.prevContWidth !== this.container.clientWidth
    ) {
      this.resize();
    }

    this.currentCtx = this.mainCtx;
    this.mainCtx.clearRect(0, 0, this.mainCanvas.width, this.mainCanvas.height);

    for (let layer of this.layers) {
      if (layer.canvasID != 1) continue;
      for (let object of layer.objects) {
        object.draw(this);
      }
    }

    if (this.redrawBackground) {
      this.currentCtx = this.bgCtx;
      this.bgCtx.clearRect(
        0,
        0,
        this.backgroundCanvas.width,
        this.backgroundCanvas.height
      );

      for (let layer of this.layers) {
        if (layer.canvasID != 0) continue;
        for (let object of layer.objects) {
          object.draw(this);
        }
      }

      this.redrawBackground = false;
    }

    if (this.redrawForeground) {
      this.currentCtx = this.fgCtx;
      this.fgCtx.clearRect(
        0,
        0,
        this.foregroundCanvas.width,
        this.foregroundCanvas.height
      );

      for (let layer of this.layers) {
        if (layer.canvasID != 2) continue;
        for (let object of layer.objects) {
          object.draw(this);
        }
      }

      if (this.gridLines) {
        for (let i = 0; i < this.gridX; i++) {
          if (i === 0) continue;

          this.fgCtx.strokeStyle = '#FF0000';
          this.fgCtx.moveTo(
            (this.foregroundCanvas.clientWidth / this.gridX) * i,
            0
          );
          this.fgCtx.lineTo(
            (this.foregroundCanvas.clientWidth / this.gridX) * i,
            this.foregroundCanvas.clientHeight
          );
          this.fgCtx.stroke();
        }

        for (let i = 0; i < this.gridY; i++) {
          if (i === 0) continue;

          this.fgCtx.strokeStyle = '#FF0000';
          this.fgCtx.moveTo(
            0,
            (this.foregroundCanvas.clientHeight / this.gridY) * i
          );
          this.fgCtx.lineTo(
            this.foregroundCanvas.clientWidth,
            (this.foregroundCanvas.clientHeight / this.gridY) * i
          );
          this.fgCtx.stroke();
        }
      }

      this.redrawForeground = false;
    }
  }

  /** Triggered by the screen resizing, recalculated canvas and grid size. */
  resize() {
    let proposedWidth;
    let proposedHeight;

    if (this.gridX === this.gridY) {
      if (this.container.clientHeight > this.container.clientWidth) {
        proposedWidth = this.container.clientWidth;
        proposedHeight = this.container.clientWidth;
      } else {
        proposedWidth = this.container.clientHeight;
        proposedHeight = this.container.clientHeight;
      }

      this.backgroundCanvas.style.width = proposedWidth;
      this.backgroundCanvas.style.height = proposedHeight;
      this.mainCanvas.style.width = proposedWidth;
      this.mainCanvas.style.height = proposedHeight;
      this.foregroundCanvas.style.width = proposedWidth;
      this.foregroundCanvas.style.height = proposedHeight;
    } else if (this.gridX > this.gridY) {
      proposedWidth = this.container.clientWidth;
      proposedHeight = (this.gridY / this.gridX) * proposedWidth;

      if (proposedHeight > this.container.clientHeight) {
        proposedHeight = this.container.clientHeight;
        proposedWidth = (this.gridX / this.gridY) * proposedHeight;
      }

      this.backgroundCanvas.style.width = proposedWidth;
      this.backgroundCanvas.style.height = proposedHeight;
      this.mainCanvas.style.width = proposedWidth;
      this.mainCanvas.style.height = proposedHeight;
      this.foregroundCanvas.style.width = proposedWidth;
      this.foregroundCanvas.style.height = proposedHeight;
    } else {
      proposedHeight = this.container.clientHeight;
      proposedWidth = (this.gridX / this.gridY) * proposedHeight;

      if (proposedWidth > this.container.clientWidth) {
        proposedWidth = this.container.clientWidth;
        proposedHeight = (this.gridY / this.gridX) * proposedWidth;
      }

      this.backgroundCanvas.style.width = proposedWidth;
      this.backgroundCanvas.style.height = proposedHeight;
      this.mainCanvas.style.width = proposedWidth;
      this.mainCanvas.style.height = proposedHeight;
      this.foregroundCanvas.style.width = proposedWidth;
      this.foregroundCanvas.style.height = proposedHeight;
    }

    this.backgroundCanvas.width = proposedWidth;
    this.backgroundCanvas.height = proposedHeight;
    this.mainCanvas.width = proposedWidth;
    this.mainCanvas.height = proposedHeight;
    this.foregroundCanvas.width = proposedWidth;
    this.foregroundCanvas.height = proposedHeight;

    this.prevContWidth = this.container.clientWidth;
    this.prevContHeight = this.container.clientHeight;

    this.fontsize = this.backgroundCanvas.width / this.gridX;

    this.redrawBackground = true;
    this.redrawForeground = true;
  }

  /** Builds the necessary canvases. */
  buildCanvases() {
    let canvasStyles = {
      border: '5px solid white',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    };

    this.backgroundCanvas = document.createElement('canvas');
    this.backgroundCanvas.id = 'bgCanvas';
    this.backgroundCanvas.style.zIndex = '2';

    this.mainCanvas = document.createElement('canvas');
    this.mainCanvas.id = 'mainCanvas';
    this.mainCanvas.style.zIndex = '3';

    this.foregroundCanvas = document.createElement('canvas');
    this.foregroundCanvas.id = 'fgCanvas';
    this.foregroundCanvas.style.zIndex = '4';

    for (const style in canvasStyles) {
      this.backgroundCanvas.style[style] = canvasStyles[style];
      this.mainCanvas.style[style] = canvasStyles[style];
      this.foregroundCanvas.style[style] = canvasStyles[style];
    }

    this.container.appendChild(this.backgroundCanvas);
    this.container.appendChild(this.mainCanvas);
    this.container.appendChild(this.foregroundCanvas);

    this.bgCtx = this.backgroundCanvas.getContext('2d');
    this.mainCtx = this.mainCanvas.getContext('2d');
    this.fgCtx = this.foregroundCanvas.getContext('2d');

    this.resize();
  }

  /**
   * Creates a renderer layer.
   * @param {number} id - Layer id, used for sorting, 0 on bottom -> inf on top.
   * @param {string} key - Layer key, referenced by objects.
   * @param {number} canvasID - Canvas id, determines which canvas to render the layer on.
   * @returns The compiled layer's reference.
   */
  createLayer(id, key, canvasID) {
    if (this.layerKeys[key]) throw 'Layer key already exists!';

    let layer = { id: id, objects: [], canvasID: canvasID };
    this.layers.push(layer);
    this.layers.sort((a, b) => {
      return a.id - b.id;
    });
    this.layerKeys[key] = layer;

    return layer;
  }

  /**
   * Adds an object to a specified renderer layer.
   * @param {object} object - The game object to be drawn.
   * @param {string} layerKey - The layer to draw the object on.
   */
  addObject(object, layerKey) {
    this.layerKeys[layerKey].objects.push(object);
  }

  removeObject(object, layerKey) {
    this.layerKeys[layerKey].objects = this.layerKeys[layerKey].objects.filter(
      function (el) {
        return el != object;
      }
    );
  }

  /**
   * Used to draw maps on the canvas.
   * @param {object} object - A reference to a Map object.
   */
  drawMap(object) {
    let map = object.grid;

    for (let row of map) {
      if (!row) continue;
      for (let col of row) {
        if (col) this.drawChar(col);
      }
    }
  }

  /**
   * Used to draw chars on the canvas.
   * @param {object} object - A reference to a char type object.
   */
  drawChar(object) {
    let char = object.character;
    let x = object.x * this.fontsize;
    let y = object.y * this.fontsize + this.fontsize;
    let charColor = object.cColor;
    let backgroundColor = object.bColor;

    if (object.background) {
      this.currentCtx.fillStyle = backgroundColor;
      this.currentCtx.fillRect(x, y, this.fontsize, -this.fontsize);
      //this.ctx.fill();
    }

    this.currentCtx.font = this.fontsize + 'px IBMBios';
    this.currentCtx.fillStyle = charColor;
    this.currentCtx.fillText(
      char,
      x + Math.floor(this.fontsize / 24),
      y - Math.floor(this.fontsize / 9)
    );
  }

  showGridLines(state) {
    this.gridLines = state;
    this.redrawForeground = true;
  }

  /**
   * Displays a tracked variable to the screen, not limited by grid.
   * @param {string} label - The label for a tracked variable.
   * @param {object} object - The object reference containing the variable to track.
   * @param {string} key - The key to access in the tracked object.
   */
  track(label, object, key) {
    this.layers[this.layers.length - 1].objects.push({
      draw: function (rend) {
        //TODO Actually track a variable.
        rend.mainCtx.fillStyle = '#FFFFFF';
        rend.mainCtx.fillText(label, 0, rend.fontsize);
      }
    });
  }
}
