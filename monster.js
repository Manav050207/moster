class Monster {
    constructor(x,y,width,height){
        var option={
            
            frictionAir:0.005,
            density:1
        }

        this.body = Bodies.rectangle(x,y,width,height,option)
        this.width=width;
        this.height=height;
        this.image = loadImage("monster2.png");
        World.add(world,this.body);
    }

    display() {

        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y)
        rotate(angle)
       
        imageMode(CENTER)
        image(this.image, 0, 0, this.width, this.height)
       
        pop();
    }



}