class Launcher {
    constructor(b,pb){
     
       var options = {
           
           bodyA : b,
           pointB : pb,
           stiffness : 0.05,
           length : 10
       }
      
       this.pointB = pb;
       this.launcher = Matter.Constraint.create(options)
       World.add(world,this.launcher);
    }
   
    fly(){

      this.launcher.bodyA = null
    }
    display() {
    if(this.launcher.bodyA){
       var pointA = this.launcher.bodyA.position
       var pointB = this.pointB

       line(pointA.x,pointA.y,pointB.x,pointB.y)
      
     }
    }
  }