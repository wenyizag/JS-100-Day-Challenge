
function playSound(e){
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`div[data-key="${e.keyCode}"`);

	if(!audio) return;
	key.classList.add('playing');

	audio.currentTime = 0;
	audio.play();
}

  function removeTransition(e) {
    e.target.classList.remove('playing');
  }



window.addEventListener('keydown', playSound);

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));