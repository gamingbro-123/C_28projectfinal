class Tree {
    constructor(xpos,ypos,width,height) {
      var options = {
          isStatic:false,
          restitution:0,
          friction:1,
          density:1.2
      }

      
      // this.body = Bodies.rectangle(this.body.position.x,this.body.position.y,this.width,this.height,options);

      this.width = width;
      this.height = height;
      this.xpos = xpos;
      this.ypos = ypos;
      
      // World.add(world, this.body);
      this.image = loadImage("tree.png");

    }

    display()
      {
      

        imageMode(CENTER);

        // image(this.image,950,5,800,800);


        image(this.image,this.xpos,this.ypos,this.width,this.heigth)

      }
    }
