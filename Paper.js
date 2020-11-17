class Paper{

    constructor(x,y,r){
  
var options={
    restitution:1.0,
    friction:1.0,
    density:1.0
}
this.image=loadImage("paper.png");
        this.body=Bodies.circle(x,y,20,options)
        this.radius=20;
        World.add(world,this.body);
    }
display(){
    
    var pos=this.body.position;
      push()
      translate(pos.x,pos.y);
   circleMode(CENTER);
    strokeWeight(4)
    stroke("pink")
    rect(0,0,this.width,this.height);
    pop()
}


}