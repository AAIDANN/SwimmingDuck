import {canvas} from './canvas';
//import {Ducky} from './Ducky';
//import {turtle} from './turtle';

canvas.style.backgroundImage = `url('fishBackground.png')`;

let x = 0;
let maxx = 450
function updateBackground () {
  x-=1
if (x < maxx) {
  x = 0;
}
  canvas.style.backgroundPositionX = `${x}px`;
}

const pixelsPerSecond = 200;

setInterval(
  updateBackground,
  10 / pixelsPerSecond,
)