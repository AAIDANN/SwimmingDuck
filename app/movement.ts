import {Ducky} from './Ducky';
import {ctx, canvas} from './canvas';

export const flyingDuck = {
  x : 250,
  y: 250,
  width: 64,
  height: 64,
  frame : 0,
  angle : 0,
  draw () {    
    ctx.translate(this.x,this.y);
    
    
    Ducky.draw(-this.width/2,-this.height/2,this.frame,
               this.width,this.height)
    
    ctx.resetTransform();
    
  },
  hitDucky (x : number, y : number) {
    // Top is just y, I think ?
    // - help from Hinkle
    this.top = this.y;
    if (
      y > this.top
      &&
      y < this.top + 50
      &&
      x > this.x
      &&
      x < this.x +50
    ) {
      return true
    } else {
      return false
    } 
  
  } 
  
}



