import { ctx, canvas } from './canvas';
import {swimmingTurtle} from './movementTurt';
import {flyingDuck} from './movement';
import {scoreboard} from './scoreboard';

export function animate () {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  // Update
  update();
  // Draw
  draw();
  window.requestAnimationFrame(animate);
}

function update () {
  swimmingTurtle.move()
}

function draw () {
  flyingDuck.draw();
  swimmingTurtle.draw();
  scoreboard.write();
}
    
window.requestAnimationFrame(animate);
