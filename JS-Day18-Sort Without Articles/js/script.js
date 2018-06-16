const bands = ['The Plot in You', 'The Devil Wears Prada', 
'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 
'The Midway State', 'We Came as Romans', 'Counterparts', 
'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];


//remove the (a |an |the ) at the begining of a band
function stript(a){
	return a.replace(/^(a |an |the )/i, '').trim();
}

//sorr the band
const sortedBand = bands.sort((a, b) => stript(a) > stript(b) ? 1 : -1);


//Add the band list to html
const frame = document.querySelector('.frame');
frame.innerHTML = sortedBand.map(band => `<li>${band}</li>`).join('');
//console.log(bands);