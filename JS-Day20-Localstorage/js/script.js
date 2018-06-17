const addItems = document.querySelector('.add-items');
const items = document.querySelector('.items');
const itemList = JSON.parse(localStorage.getItem('itemList')) || [];

showItems(itemList, items);

function submitItem(e){
	e.preventDefault();
	const text = this.querySelector('[name=text-input]').value;
	const item = {
		text,
		done: false
	};
	itemList.push(item);	
	localStorage.setItem('itemList', JSON.stringify(itemList));
	showItems(itemList, items);
	this.reset();
	//console.log(itemList);
}

function showItems(plateList = [], plates){
	const plateListHTML = plateList.map((plate, i) => {
		return 	`
		<li>
			<input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
          	<label for="item${i}">${plate.text}</label>
		</li>
		`;
	}).join('');
	//console.log(plateListHTML);
	plates.innerHTML = plateListHTML;
}

function toggleClick(e){
	if(!e.target.matches('input')) return;
	const ID = e.target.dataset.index;
	itemList[ID].done = !itemList[ID].done;
	localStorage.setItem('itemList', JSON.stringify(itemList));
	showItems(itemList, items);
}

addItems.addEventListener('submit', submitItem);
items.addEventListener('click', toggleClick);