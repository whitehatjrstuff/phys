class Ground {
    constructor(x, y, width, height) {
      var options = {
        //'restitution':1.0,
          //'friction':0.8,
          //'density':0.8,
          'isStatic' :true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill(255);
        rect(pos.x, pos.y, this.width, this.height);  
      }
    };