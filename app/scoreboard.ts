import {ctx, canvas} from './canvas';

export let scoreboard = {
  score : 0,
  debugMode : true,
  write () {
    ctx.font = "16px Futura"
    ctx.fillText("Avoid the Turtles! Use W and S to move!",150,55);
    if(this.debugMode) {
      this.writeDebug();
    
    }
  },
  writeDebug () {
    ctx.fillStyle = 'white'

  }

}
