import './background';

import {Ducky} from './Ducky';
import {flyingDuck} from './movement';
import {ctx} from './canvas';
import './wasd';
import './animation';

setInterval(
 function () {
   //ctx.clearRect(155,155,300,300);
    flyingDuck.angle += 0;
    flyingDuck.frame += 1;
    //flyingDuck.draw();
  },
  200
)
