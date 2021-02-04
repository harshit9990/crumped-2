class Dustbin{
    constructor(x,y,width,height){
var option={
isStatic:true,
}
this.dustbinbody = Bodies.rectangle(x,y,width,height);
this.width=width;
this.height=height;
this.x=x;
this.y=y;  
World.add(world,this.dusbinbody);

}
display()
{
   var dustbinpos=this.body.position;

   Push()
   translate(dusbinpos.x,dustbinpos.y);
   rectMode(CENTER)
   strokeWeight(3)
   fill(0,250,0);
   Pop()




}


    
}