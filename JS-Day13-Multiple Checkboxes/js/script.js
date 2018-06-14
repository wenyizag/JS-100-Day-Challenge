const inputs = document.querySelectorAll('.input input[type="checkbox"]');
inputs.forEach(input => input.addEventListener('click', checkDeal));

let lastChecked;


function checkDeal(e){

	let inBetween = false;

	if(e.shiftKey && this.checked){
		
		inputs.forEach(checkbox => {
			//console.log(checkbox);
			if(checkbox === this || checkbox === lastChecked){
				inBetween = !inBetween; //如果设置为true，就会以后都为true，则失效。
										//所以应该toggle这个boolean
			}
			if(inBetween) checkbox.checked = true;
		});
	};

	lastChecked = this;
}

