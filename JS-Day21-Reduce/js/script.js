const timeLists  = [...document.querySelectorAll('[data-time]')];

Solution 1
const totalSeconds = timeLists.map(duration => {
								return [mins, secs] = duration.dataset.time.split(":")})
							  .map(duration => parseFloat(duration[0]) * 60 + parseFloat(duration[1]))
							  .reduce((total, next) => total + next);

//Solution 2
// const totalSeconds = timeLists.map(duration => {
// 								const [mins, secs] = duration.dataset.time.split(":").map(parseFloat);
// 								return mins * 60 + secs;
// 								})
// 							  .reduce((total, next) => total + next);


let secondLeft = totalSeconds;
const hours = Math.floor(secondLeft / 3600);

secondLeft = secondLeft % 3600;
const minutes = Math.floor(secondLeft / 60);

secondLeft = secondLeft % 60;

console.log(hours + ":" + minutes + ":"+ secondLeft);