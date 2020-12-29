class Box {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, options);
      this.width =30;
      this.height =40;
      
      World.add(world, this.body);
    }
    display(){

      if(this.body.speed<3){
        super.display();
      } 
      else{
          World.remove(world,this.body)
          push();
      this.Visiblity=this.Visiblity-2;
      tint(255,this.Visiblity);
     
           pop();
      }
     
      box1.score();
      box2.score();
      box3.score();
      box4.score();
      box5.score();
      box6.score();
      box7.score();
      box8.score();
      box9.score();
      box10.score();
      box11.score();
      box12.score();
      box13.score();
      box14.score();
      box15.score();
      box16.score();
      
}

function score(){
  
  if (this.Visiblity<0 && this.Visiblity>-105){
    score= score++;

  }
   
}
