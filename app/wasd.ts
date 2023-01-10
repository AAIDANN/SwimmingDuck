import {flyingDuck} from './movement';
import {canvas} from './canvas';
import {animate} from './animation';



window.addEventListener(
  'keydown',
  function (event) {
    //if (event.key=='d') {
      //flyingDuck.x +=30
    //}
    //if (event.key=='a') {
      //flyingDuck.x -= 30
    //}
    if (event.key=='w') {
      flyingDuck.y -= 30
    }
    if (event.key=='s') {
      flyingDuck.y += 30
    }
  }
)