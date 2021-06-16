import {Renderer} from './Components/Renderer'

export class GameEngine {
  constructor() {
    this.objects = [
      {
        rMap: [
          [{clear:true}],
          [{clear:true}],
          [{color:"#FFFFFF", text:"   @  "},{color:"#0000FF", text:"@"},{clear:true}],
          [{clear:true}],
          [{color:"#FFFFFF", text:"  @@@@@@"}]
        ],
        x: 0,
        y: 0,
        layer: "world",
        draw: function(rend) {
          rend.drawMap(this);
        }
      },
      {
        character: "&",
        background: false,
        x: 0,
        y: 0,
        layer: "object",
        cColor: "#00FF00",
        bColor: "#000000",
        shouldMove: 0,
        draw: function(rend) {
          rend.drawChar(this);

          this.shouldMove++;
          if(this.shouldMove % 100 === 0) {
            this.x++;
            this.y++;

            if(this.x >= rend.gridX) this.x = 0;
            if(this.y >= rend.gridY) this.y = 0;
          }
        }
      }
    ];

    this.renderer = new Renderer();

    this.pipeline = [
      this.renderer
    ];
  }

  runPipeline() {
    for(let component of this.pipeline){
      component.exec();
    }

    requestAnimationFrame(this.runPipeline.bind(this));
  }

  start() {
    this.buildLevel();

    requestAnimationFrame(this.runPipeline.bind(this));
  }

  buildLevel() {
    for (const object of this.objects) {

      //Render Linking
      this.renderer.addObject(object, object.layer);
    }
  }
}
