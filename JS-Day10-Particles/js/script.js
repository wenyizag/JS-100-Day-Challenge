//Canvas
const canvas=document.getElementById("myCanvas");
var width = window.innerWidth;
var height = window.innerHeight;
canvas.width = width;
canvas.height = height;
var c = canvas.getContext("2d");


//resize window event to init
window.addEventListener('resize', function(){
	width = window.innerWidth;
	height = window.innerHeight;
	canvas.width = width;
	canvas.height = height;
	init();
});

//mouse event
var Mouse = {
	x: undefined,
	y:undefined
}
document.addEventListener('mousemove', event => {
	Mouse.x = event.x;
	Mouse.y = event.y;
});

//Max-radius
var maxRadius = 60;

//color Pattern
var color = [
	'#f2cfa3',
	'#e75d56',
	'#aee1f4',
	'#139f72',
	'#eac861'
];


//Cricle Prototype
function Circle(x, y, radius, vx, vy, style){
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.vx = vx;
	this.vy = vy;
	//console.log(style);
	this.style = style;

	this.draw = function(){
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.fillStyle = color[this.style];
		c.fill();
	}

	//circle movement
	this.update = function(){
		if(this.x + this.radius >= width || this.x - this.radius < 0) 
			this.vx = - this.vx;
		if(this.y + this.radius >= height || this.y - this.radius <= 0) 
			this.vy = - this.vy;

		this.x += this.vx;
		this.y += this.vy;

		if(Math.abs(this.x - Mouse.x) < 50 && Math.abs(this.y - Mouse.y) < 50
			&& this.radius < maxRadius)
			this.radius += 2;
		else if(this.radius > radius && this.radius > 1)
			this.radius -= 2;

		this.draw();
	}

}


//Create circle
var circileArray = [];

function init(){

	circileArray  = [];

	for (var i = 0; i < 200; i++) {
	var radius = Math.random() * 5 + 3;
	var x = Math.random() * (width - radius * 2) + radius;
	var y = Math.random() * (height - radius * 2) + radius;
	var vx = Math.random() * 3 - 1;
	var vy = Math.random() * 3 - 1;
	var style = Math.floor(Math.random() * color.length);
	circileArray.push(new Circle(x, y, radius, vx, vy, style));
	}
}


//Animation
function animation(){
	c.clearRect(0,0, width, height);
	
	for(var i = 0; i < circileArray.length; i++){
		circileArray[i].update();
	}
	requestAnimationFrame(animation);		
}

init();
animation();


