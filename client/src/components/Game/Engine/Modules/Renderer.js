import { GameModule } from "./GameModule";

/** The renderer module, handles drawing objects to the canvas and contains tools for doing so. */
export class Renderer extends GameModule{
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
    /** List of renderer layers. */
    this.layers = [{id: Number.MAX_SAFE_INTEGER, objects:[]}];
    /** Object containing layers referenced with keys. */
    this.layerKeys = {debug: this.layers[0]};
    /** Layer for map drawing and other static objects. */
    this.worldLayer = this.createLayer(0, "world");
    /** Layer for generic game objects. */
    this.objectLayer = this.createLayer(1, "object");
    /** Layer used to obscure unseen parts of the map. */
    this.discoveryLayer = this.createLayer(2, "discovery");
    /** Layer for generic effects. */
    this.effectLayer =  this.createLayer(3, "effect");
  }

  exec() {
    if(!this.canvas) {
      this.canvas = document.getElementById("gameCanvas");
      if(this.canvas) {
        this.container = document.getElementById("gameContainer");
        this.ctx = this.canvas.getContext("2d");
      }
    }
    else this.draw();
  }
  
  /** Draws each object to the screen. */
  draw() {
    if(this.prevContHeight !== this.container.clientHeight || this.prevContWidth !== this.container.clientWidth) {
      this.resize();
    }

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for(let layer of this.layers) {
        for(let object of layer.objects) {
            object.draw(this);
        }
    }

    if(this.gridLines) {
      for(let i = 0; i < this.gridX; i++) {
          if(i === 0) continue;

          this.ctx.strokeStyle = "#FF0000";
          this.ctx.moveTo(this.canvas.clientWidth/this.gridX*i, 0);
          this.ctx.lineTo(this.canvas.clientWidth/this.gridX*i, this.canvas.clientHeight);
          this.ctx.stroke();     
      }

      for(let i = 0; i < this.gridY; i++) {
          if(i === 0) continue;

          this.ctx.strokeStyle = "#FF0000";
          this.ctx.moveTo(0, this.canvas.clientHeight/this.gridY*i);
          this.ctx.lineTo(this.canvas.clientWidth, this.canvas.clientHeight/this.gridY*i);
          this.ctx.stroke();  
      }
  }
  }

  /** Triggered by the screen resizing, recalculated canvas and grid size. */
  resize() {
    let proposedWidth;
    let proposedHeight;

    if(this.gridX === this.gridY) {
          if(this.container.clientHeight > this.container.clientWidth){
            proposedWidth = this.container.clientWidth;
            proposedHeight = this.container.clientWidth;
          }
          else{
            proposedWidth = this.container.clientHeight;
            proposedHeight = this.container.clientHeight;
          }
      }
      else if(this.gridX > this.gridY) {
          proposedWidth = this.container.clientWidth;
          proposedHeight = (this.gridY/this.gridX)*proposedWidth;

          if(proposedHeight > this.container.clientHeight) {
              proposedHeight = this.container.clientHeight;
              proposedWidth = (this.gridX/this.gridY)*proposedHeight;
          }

          this.canvas.style.width = proposedWidth;
          this.canvas.style.height = proposedHeight;
      }
      else {
          proposedHeight = this.container.clientHeight;
          proposedWidth = (this.gridX/this.gridY)*proposedHeight;

          if(proposedWidth > this.container.clientWidth) {
              proposedWidth = this.container.clientWidth;
              proposedHeight = (this.gridY/this.gridX)*proposedWidth;
          }

          this.canvas.style.width = proposedWidth;
          this.canvas.style.height = proposedHeight;
      }
      
      this.canvas.width = proposedWidth;
      this.canvas.height = proposedHeight;

      this.prevContWidth = this.container.clientWidth;
      this.prevContHeight = this.container.clientHeight;

      this.fontsize = this.canvas.width/this.gridX;
  }

  /**
   * Creates a renderer layer.
   * @param {number} id - Layer id, used for sorting, 0 on bottom -> inf on top.
   * @param {string} key - Layer key, referenced by objects.
   * @returns The compiled layer's reference.
   */
  createLayer(id, key) {
    if(this.layerKeys[key]) throw "Layer key already exists!";

    let layer = {id: id, objects:[]};
    this.layers.push(layer);
    this.layers.sort((a,b) => {return a.id - b.id;});
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

  /**
   * Used to draw maps on the canvas.
   * @param {object} object - A reference to a Map object.
   */
  drawMap(object) {
    let map = object.rMap;
    let x = object.x;
    let y = object.y + this.fontsize;

    for(let row of map) {
        x = 0;

        for(let component of row) {
            if(component.clear) break;

            this.ctx.font = this.fontsize+"px IBMBios";
            this.ctx.fillStyle = component.color;
            this.ctx.fillText(component.text, x + Math.floor(this.fontsize/24), y - Math.floor(this.fontsize/9));

            x += component.text.length * this.fontsize;
        }

        y += this.fontsize;
    }
  }

  /**
   * Used to draw chars on the canvas.
   * @param {object} object - A reference to a char type object.
   */
  drawChar(object) {
    let char = object.character;
    let x = object.x * this.fontsize;
    let y = (object.y * this.fontsize) + this.fontsize;
    let charColor = object.cColor;
    let backgroundColor = object.bColor;

    if(object.background) {
      this.ctx.fillStyle = backgroundColor;
      this.ctx.fillRect(x, y, this.fontsize, -this.fontsize);
      //this.ctx.fill();
    }

    this.ctx.font = this.fontsize+"px IBMBios";
    this.ctx.fillStyle = charColor;
    this.ctx.fillText(char, x + Math.floor(this.fontsize/24), y - Math.floor(this.fontsize/9));
  }

  /**
   * Displays a tracked variable to the screen, not limited by grid.
   * @param {string} label - The label for a tracked variable.
   * @param {object} object - The object reference containing the variable to track.
   * @param {string} key - The key to access in the tracked object.
   */
  track(label, object, key) {
    this.layers[this.layers.length-1].objects.push({draw: function(rend) {
      //TODO Actually track a variable.
      rend.ctx.fillStyle = "#FFFFFF";
      rend.ctx.fillText(label, 0, rend.fontsize);
    }});
  }
}