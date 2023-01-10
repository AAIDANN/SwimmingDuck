import {ctx} from './canvas';

export const img = document.createElement('img'); 
img.src = 'Ducky.png'; 
document
  .querySelector('#assets')
  .appendChild(img); 


export const Ducky = { 
  img, 
  ready : img.complete, 
  frameWidth : 385,
  frameHeight: 385,
  totalFrames : 2,
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
    frame = frame % this.totalFrames;     
    ctx.drawImage(
        this.img, // image Element
        0, // Source X
        this.frameHeight * frame, // Source Y
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
  Ducky.ready=true
});