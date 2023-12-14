//Guide on embedding Hydra from: https://geikha.github.io/hydra-docs/#/guides/embedding
//The visuals were coded by myself

let hydraCanvas = document.getElementById("hydra-bg");
// set small size to avoid high resource demand:
hydraCanvas.width  = 720;
hydraCanvas.height = 720;

const hydra = new Hydra({
  canvas: hydraCanvas,
  detectAudio: false,
  enableStreamCapture: false,
});
speed=0.075
voronoi(99,0.9,9)
.rotate(2,3)
.modulateRotate(noise(3,0.9))
.sub(noise(20,0.03).luma(0.6))
.modulateKaleid(voronoi(0.6,0.9,0.9))
.colorama(0.1)
.repeat(3,3)
.modulateRotate(o0)
.color(1,0.6,0.2)
.add(shape(3,0.04,0.01)
.modulateScale(src(o0).
modulateRepeat(voronoi(2,0.9,99))))
.repeat(3,3)
.kaleid(1)
.kaleid(99)
.rotate(3,0.1)
.sub(src(o0),0.9)
.scale(()=>mouse.y*-2/height-0.1,()=>mouse.x*-2/width-0.1)
.brightness(0.2)
.saturate(0.95)
.contrast(1.8)
.rotate(3,-3)
.blend(o0,0.9775)
.scale(1.007, 0.993)
  .out()



