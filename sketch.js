var vid;
function setup() {
	vid = createVideo('./data/targetx.mp4');
	createCanvas(1658, 1078, document.getElementById('canvas-ar')) ;// poster aspect
	pixelDensity(1); // prevent 200+ PPI lag
	colorMode(HSL);
	vid.hide();
	vid.play();
	background(200);
}

function draw() {
	image(vid,0,0);
}
