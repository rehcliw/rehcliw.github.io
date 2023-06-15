const canvas = document.getElementById("canvas-1");

// fix resolution
canvas.width = 1024;
canvas.height = 1024;
// create a new hydra-synth instance
var hydra = new Hydra({
  detectAudio: false,
  enableStreamCapture: false,
})

var r = 1;
var g = 0;
var b = 1;
var mod = 1.9;

osc(7, 0, 0.5)
  .rotate(0, 0.3)
  .kaleid(4)
  .color(()=>r,()=>g,()=>b)
  .modulateRotate(
    shape(4,0.9,2.9)
      .mult(o0)
      .mask(noise(1,0),0)
      .repeat(2,2)
    ,()=>mod/1
  )
  .scale(1,()=>window.innerHeight/window.innerWidth)
  .out(o0)