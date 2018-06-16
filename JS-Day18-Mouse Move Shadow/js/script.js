const frame = document.querySelector('.frame');
const texts = document.querySelectorAll('.text');
const walk = 40;

function shadow(e) {
	//console.log(e.offsetX);
	const {offsetWidth: width, offsetHeight: height} = frame;
	let {offsetX: x, offsetY: y} = e;

	if(this !== e.target){
		x += e.target.offsetLeft;
		y += e.target.offsetTop;
	}

	

	const xWalk = Math.round((x / width * walk) - walk / 2);
	const yWalk = Math.round((y / height * walk) - walk / 2);

	texts.forEach(text => {
		text.style.boxShadow = 
		`${xWalk}px ${yWalk}px 10px 3px #260c3675`});
	
	//console.log(xWalk + " " + yWalk);
}


frame.addEventListener('mousemove', shadow);