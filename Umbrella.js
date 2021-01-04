class Umbrella{
    constructor(x,y,r){
        var prop={
            isStatic:true
        }
        this.umbrella = Bodies.circle(x,y,r,prop)
        
        this.image = loadImage("walking_1-300x300.png");
        this.width=r;
        this.height=r;
        World.add(world,this.umbrella)
    }

    display(){
        var pos = this.umbrella.position;
      //ellipse(pos.x,pos.y,this.width,this.height)
      imageMode(CENTER)
        image(this.image,pos.x,pos.y,300,300)
    }
}