class Drops {
    constructor(x,y,r){
        var prop={
          isStatic:false,
          friction: 0.1,
          density: 0.2
        }
      this.drop = Bodies.circle(x,y,r,prop)
      this.r=r
      World.add(world,this.drop)
    }

    updatePosition(){
      if(this.drop.position.y > height){
        Matter.Body.setPosition(this.drop,{x:random(0,400),y:random(0,400)})
      }
    }

    drawEllipse(){
      fill("aqua")
        ellipse(this.drop.position.x,this.drop.position.y,this.r,this.r)
        
    }

}