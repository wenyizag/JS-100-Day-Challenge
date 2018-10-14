var button = document.getElementById('myButton');
var text = document.getElementById('text');
var page = 1;

button.addEventListener('click', fetchJSON);

function fetchJSON(){
	var req = new XMLHttpRequest();
	req.open('GET', "https://learnwebcode.github.io/json-example/animals-"+ page +".json", true);
	req.onload = function(){
		if(req.status >= 200 && req.status < 400){
			var responseText = JSON.parse(req.responseText);
			appendText(responseText);
		}else{
			console.log("we connected to the serve, but it returned an error");
		}
	}
	req.onerror = function(){
		console.log("Connection error");
	}
	req.send();
	page++;
	if(page > 3){
		button.style.display = "none";
	}
}

function appendText(data){
	console.log(data);
	var html = "";
	var i = 0, len = data.length;
	for(i; i < len; i++){
		//likes
		html += `<p>${data[i].name} is a ${data[i].species}, `;
		var ii = 0, ilen = data[i].foods.likes.length;
		for(ii; ii < ilen; ii++){
			if(ii == 0){
				html += `she loves ${data[i].foods.likes[ii]}`;
			}else{
				html += ` and ${data[i].foods.likes[ii]}`;
			}
		}
		//dislike
		ii = 0, ilen = data[i].foods.dislikes.length;
		for(ii; ii < ilen; ii++){
			if(ii == 0){
				html += `, she doesn't like ${data[i].foods.dislikes[ii]}`;
			}else{
				html += ` and ${data[i].foods.dislikes[ii]}</p>`;
			}
		}
	}
	text.innerHTML += html;
}