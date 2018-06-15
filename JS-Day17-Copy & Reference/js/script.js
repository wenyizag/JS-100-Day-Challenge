
//Array  
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

//Array Reference
const team = players; 

//Four ways to cope an array
//1. using slice()
const team1 = players.slice();

//2. using concat
const team2 = [].concat(players);

//3. using spread
const team3 = [...players];

//4. Array.from
const team4 = Array.from(players);


//Objects
const person = {
  name: 'Wes Bos',
  age: 80
};

//Make reference
const p1 = person;

//Two way to copy an object
//1. Object.assign
//{initial object, our target object, new property}
//this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const p2 = Object.assign({}, person, {number : 94});

//2. a cheating way... not recommended
const p3 = JSON.parse(JSON.stringify(person));
console.log(p3);
