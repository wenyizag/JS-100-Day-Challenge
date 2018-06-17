window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();
recognition.lang = 'en-US';
recognition.interimResults = true;

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);


recognition.addEventListener('result', e => {
	var myspeaking = event.results[0][0].transcript;
	console.log(myspeaking);

	myspeaking = myspeaking.replace(/poop|poo|shit/gi, '💩');
	p.textContent = myspeaking;

	if(e.results[0].isFinal){
		p = document.createElement('p');
		words.appendChild(p);
	}	
});

recognition.addEventListener('end', recognition.start);
recognition.start();