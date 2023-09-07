// await loadScript("https://hydra-extensions.glitch.me/hydra-text.js")

const canvas = document.getElementById("canvas-0");

// fix resolution
canvas.width = 1024;
canvas.height = 1024;
// create a new hydra-synth instance
var hydra = new Hydra({
  detectAudio: false,
  enableStreamCapture: false,
})

var blr0 = 0.3;
var blr1 = 0.6;

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

document.addEventListener("mousemove", changeMod);

function changeMod(e) {
	blr0 = scale(e.clientX, 0, window.innerWidth, 0.05, 1);
	blr1 = scale(e.clientY, 0, window.innerHeight, 0.1, 1);
}

solid(231/256, 27/256, 94/256, 1)
.add(osc(1.5)
	.kaleid(2)
	.mult(shape(4,0.3,()=>blr0)
		.diff(src(o0)
			.scale(1,0.9)
			.kaleid(2)
			.modulateScale(osc(4).kaleid(), 2)
			.blend(shape(4,0.4,()=>blr1))
		)
	)	
)
.scale(1,()=>window.innerHeight/window.innerWidth)
.out()