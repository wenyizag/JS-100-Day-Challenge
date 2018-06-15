const video = document.querySelector('.viewer');
const toggleButton = document.querySelector('.toggle');
const slides = document.querySelectorAll('.player__slider');
const skipButtons = document.querySelectorAll('.player__button');
const progressBar = document.querySelector('.progress__filled');
const progress = document.querySelector('.progress');


function togglePlay(){
	const method = video.paused ? 'play' : 'pause' ;
	video[method]();
}

function updatdButton(){
	const content = this.paused? '►' : '❚ ❚';;
	toggleButton.textContent = content;
}

function slideChange(){
	video[this.name] = this.value;
	//console.log(this.value);
}

function skip() {
 video.currentTime += parseFloat(this.dataset.skip);
}


function progressUpdate(e){
	const progressBar =  (e.offsetX / progress.offsetWidth) * video.duration;
	video.currentTime = progressBar;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}


//play video
video.addEventListener('click', togglePlay);
video.addEventListener('play', updatdButton);
video.addEventListener('pause', updatdButton);
video.addEventListener('timeupdate', handleProgress);
toggleButton.addEventListener('click', togglePlay);


//volume and playBackRate
slides.forEach(slide => slide.addEventListener('change', slideChange));
slides.forEach(slide => slide.addEventListener('mousemove', slideChange));

//skipButton
skipButtons.forEach(button => button.addEventListener('click', skip));

//progress
let mouseDown = false;
progress.addEventListener('click', progressUpdate);
progress.addEventListener('mousemove', (e) => mouseDown && progressUpdate(e));
progress.addEventListener('mousedown', () => mouseDown = true);
progress.addEventListener('mouseup', () => mouseDown = false);
