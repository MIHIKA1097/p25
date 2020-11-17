class Side{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.image=loadImage("dustbin.png");
        this.body=Bodies.image(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
       ImageMode(CENTER);
        fill("white")
    image(pos.x,pos.y,this.width,this.height);
    }
    }