import {ctx} from './canvas';

export const img = document.createElement('img'); 
img.src = 'turtle.png'; 
document
  .querySelector('#assets')
  .appendChild(img); 


export const turtle = { 
  img, 
  ready : img.complete, 
  frameWidth : 400,
  frameHeight: 400,
  draw (x,y,frame,w=null,h=null) { 
    
    if (!this.ready) {
      setTimeout(
        ()=>this.draw(x,y,frame,w,h),
        100
      )
      console.log('Warning: Image not yet ready...',this.img);
      return
    }    
    if (!w) {w = this.frameWidth}
    if (!h) {h = this.frameHeight}
    ctx.drawImage(
        this.img, // image Element
        0, 0,
        this.frameWidth, // Source width
        this.frameHeight, // Source Height
        x, // Target X
        y, // Target Y
        w, // Target width
        h // Target Height
      );       
  }
}




img.addEventListener('load',()=>{
  console.log('Image is loaded!');
  turtle.ready=true
});