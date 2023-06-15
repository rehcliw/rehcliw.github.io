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

solid(231/256, 27/256, 94/256, 1)
.add(osc(1.5)
	.kaleid(2)
	.mult(shape(4,0.3,0.3)
		.diff(src(o0)
			.scale(1,0.9)
			.kaleid(2)
			.modulateScale(osc(4).kaleid(),2)
			.blend(shape(4,0.4,0.6))
		)
	)	
)
.out()