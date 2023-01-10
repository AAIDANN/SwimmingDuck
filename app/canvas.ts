export const canvas = document.createElement('canvas');
document.querySelector('#app').appendChild(canvas);
export const ctx = canvas.getContext('2d')
setCanvasSize(500,500);

export function setCanvasSize (width : number, height : number) {
  canvas.width = 500;
  canvas.height = 500;
  canvas.style.width = `${width}px`
  canvas.style.width = `${height}px`
  canvas.style.border = '2px solid black';
  canvas.style.backgroundColor = 'BLUE';
}