class Stone {
    constructor(xpos,ypos,radius) {
      var options = {
          isStatic:false,
          restitution:0,
          friction:1,
          density:1.2
      }

      this.body = Bodies.circle(xpos,ypos,radius,options);
      this.radius = radius;
      this.xpos = xpos;
      this.ypos = ypos;

      this.image = loadImage("stone.png");

      World.add(world, this.body);
    }

    display()
      {
        push();
        imageMode(CENTER)

        image(this.image,this.xpos,this.ypos,this.radius,this.radius);
        pop();

      }
    }

