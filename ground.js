class Ground
{
  constructor(x,y,width,height){
 var option={
isStatic:true
}
this.groundbody = Bodies.rectangle(x,y,width,height,option)
this.width=width;
this.height=height;
this.x=x;
this.y=y;
World.add(world,this.groundbody);
  }

display(){
rectMode(CENTER)
fill("green")
rect(this.groundbody.position.x,this.groundbody.position.y,this.width,this.height);




}





}