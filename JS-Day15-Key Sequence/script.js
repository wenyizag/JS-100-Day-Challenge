const secret = 'wenyizag';
const sequence = [];

function check(e){
	sequence.push(e.key);
	//splice() remove the sub-array of ( start index, length), 
	//it won't work when the length variavle is negative, which equals 0
	sequence.splice(-secret.length - 1, sequence.length - secret.length);
	if(sequence.join('').includes(secret)){
		console.log("correct");
		cornify_add();
	}
	
	console.log(sequence);

}


document.addEventListener('keyup', check);