import {turtle} from './turtle';
import {ctx} from './canvas';
import { flyingDuck } from './movement';

export const swimmingTurtle = {
  x : 0,
  y: 400,
  width: 64,
  height: 64,
  angle : 90,
  draw () {
    ctx.translate(this.x,this.y);
    
    turtle.draw(-this.width/2,-this.height/2,this.frame, this.width,this.height)
    
    ctx.resetTransform();
  },
  // NOTE: you NEVER call your move method!
  move () {
     swimmingTurtle.x +=11
    swimmingTurtle.y+=0
    if(swimmingTurtle.x>500) {
      swimmingTurtle.x=0
    swimmingTurtle.y=Math.random()*450
    }
  
   
    // Help from Hinkle:
    // The commented out code below was from my example with
    // an array of moving objects. In your case you just have
    // *one* object, so you only need to check it one time
    // with a simple if statement like this:
    if (flyingDuck.hitDucky(this.x,this.y)) {
      this.y = 0;
      flyingDuck.x = -100;
    }
   /* this.swimmingTurtle.forEach(
      (drop)=>{
      if (flyingDuck.hitDucky)
      }
    ) */
  }
  
}

  



