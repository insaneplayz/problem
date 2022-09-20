class Bird{
    constructor(x,y,width,height){
      var options = {
          isStatic:false,
          
      }
       this.body = Bodies.rectangle(x,y,width,height,options);
      
       this.width=width;
       this.height=height;
       this.image = loadImage("bird.png")
       

       World.add(world, this.body)
    }
   

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 50, 200, this.width, this.height);
        pop();
      }
}