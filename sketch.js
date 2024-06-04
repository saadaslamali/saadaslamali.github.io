

function setup() {
	vid = createVideo('targetx.mp4');
	createCanvas(1658, 1078, document.getElementById('canvas-ar')) // poster aspect
	pixelDensity(1) // prevent 200+ PPI lag
	colorMode(HSL)
}

function draw() {
	vidElement.play(); 

}

function mousePressed() {
	clear();
	h = random(360);
}
