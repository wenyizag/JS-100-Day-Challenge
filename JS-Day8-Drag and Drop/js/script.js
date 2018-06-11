const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for(const empty of empties){
	empty.addEventListener('dragover', drageOver);
	empty.addEventListener('dragenter', dragEnter);
	empty.addEventListener('dragleave', drageLeave);
	empty.addEventListener('drop', drageDrop);
}

function dragStart(){
	this.className += ' hold';
	setTimeout(()=>this.className = 'invisible' , 0);
	console.log(this);

}

function dragEnd(){
	this.className = 'fill';
}

function drageOver(e){
	//console.log("over");
	e.preventDefault();
}

function dragEnter(e){
	// console.log("enter");
	e.preventDefault();
	this.className += ' hover';
}

function drageLeave(){
	//console.log("leave");
	this.className = 'empty';

}

function drageDrop(){
	//console.log("drop");
	this.className = 'empty';
	this.append(fill);
}