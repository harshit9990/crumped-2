class Paper
{
    constructor(x,y,r){
    var option={
    restitution:0.3,
    friction:0.5,
    density:1.3    


    }
   this.x=x;
   this.y=y;
   this.r=r;
  this.body=Bodies.circle(x,y,this.r,option);
  World.add(world,this.body);
    }
  display()
{
var paperpos=this.body.position

push()
translate(paperpos.x,paperpos.y);
rectMode(CENTER)
strokeWeight(3);
fill(0,225,0);
ellipse(0,0,this.r,this.r);
pop()

        }
  

  }