export class Renderer{
  constructor() {
    this.canvas = null;
    this.container = null;
    this.ctx = null;
    this.prevContHeight = 0;
    this.prevContWidth = 0;
    this.gridLines = false;
    this.gridX = 40;
    this.gridY = 15;
    this.fontsize = 1;
    this.layers = [{id: Number.MAX_SAFE_INTEGER, objects:[]}];
    this.layerKeys = {debug: this.layers[0]};
    this.worldLayer = this.createLayer(0, "world");
    this.objectLayer = this.createLayer(1, "object");
    this.discoveryLayer = this.createLayer(2, "discovery");
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

  createLayer(id, key) {
    if(this.layerKeys[key]) throw "Layer key already exists!";

    let layer = {id: id, objects:[]};
    this.layers.push(layer);
    this.layers.sort((a,b) => {return a.id - b.id;});
    this.layerKeys[key] = layer;

    return layer;
  }

  addObject(object, layerKey) {
    this.layerKeys[layerKey].objects.push(object);
  }

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

  drawChar(object) {
    let char = object.character;
    let x = object.x * this.fontsize;
    let y = (object.y * this.fontsize) + this.fontsize;
    let charColor = object.cColor;
    let backgroundColor = object.bColor;

    if(object.background) {
      this.ctx.fillStyle = backgroundColor;
      this.ctx.rect(x, y, this.fontsize, -this.fontsize);
      this.ctx.fill();
    }

    this.ctx.font = this.fontsize+"px IBMBios";
    this.ctx.fillStyle = charColor;
    this.ctx.fillText(char, x + Math.floor(this.fontsize/24), y - Math.floor(this.fontsize/9));
  }

  track(label, object, key) {
    this.layers[this.layers.length-1].objects.push({draw: function(rend) {
      //TODO Actually track a variable.
      rend.ctx.fillStyle = "#FFFFFF";
      rend.ctx.fillText(label, 0, rend.fontsize);
    }});
  }
}