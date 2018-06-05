const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


function setDate() {
	const now = new Date();

	const seconds = now.getSeconds();
	const secondsDegrees = (seconds / 60) * 360 + 90;
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

	const mins = now.getMinutes();
	const minsDegrees = (mins / 60) * 360 + 90 + (seconds / 60) * 6;
	minsHand.style.transform = `rotate(${minsDegrees}deg)`;

	const hours = now.getHours();
	const hoursDegrees = (hours / 12) * 360 + 90 + ((mins / 60) * 30);
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

}

setInterval(setDate, 1000);
setDate();
