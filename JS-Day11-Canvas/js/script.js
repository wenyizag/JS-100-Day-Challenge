const canvas = document.querySelector('#myCanvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');
var isDrawing = false;
var lastX = 0;
var lastY = 0;
var hue = 257;
var hueDirection = true;
var lineDirection = true;

ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.lineWidth = 15;

function draw(event){
		
	if(!isDrawing) return;
	ctx.beginPath();
	ctx.moveTo(lastX, lastY);
	ctx.lineTo(event.x, event.y);
	ctx.strokeStyle = `hsl(${hue}, 58%, 50%)`;
	
	//change hue
	if(hueDirection) {
		hue += 2;
	}
	else {
		hue -= 2;
	}
	if(hue > 331) hueDirection = false;
	if(hue < 257) hueDirection = true;

	//change lineWidth
	if(lineDirection) {
		ctx.lineWidth += 2;
	}
	else {
		ctx.lineWidth -= 2;
	}
	if(ctx.lineWidth > 40) lineDirection = false;
	if(ctx.lineWidth < 10) lineDirection = true;


	console.log(hue);
	ctx.stroke();
	lastX = event.x;
	lastY = event.y;

}

document.addEventListener("mousedown", (event) => {
	lastX = event.x;
	lastY = event.y;
	isDrawing = true});
document.addEventListener("mousemove", draw);
document.addEventListener("mouseup", () => isDrawing = false);




