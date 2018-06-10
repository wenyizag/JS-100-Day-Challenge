const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';


//get data
const cities = [];
fetch(endpoint)
.then((res) => res.json())
.then((data) => cities.push(...data))



//search data
function searchInput(wordToMatch, cities){
  return cities.filter(place => {
      var regex = new RegExp(wordToMatch, "ig");
      return place.city.match(regex) || place.state.match(regex);
    }
  );
}

//population display with commas
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
  console.log(this.value);
  const outcome = searchInput(this.value, cities);
  const html = outcome.map( place => {
        var regex = new RegExp(this.value, "ig");
        const city = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const state = place.state.replace(regex,`<span class="hl">${this.value}</span>`);
        return `<li>
                    <span class="name">${city}, ${state}</span>
                    <span class="population">${numberWithCommas(place.population)}</span>
                </li>
        `;
      }).join('');
  suggestions.innerHTML = html;
}


const input = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

input.addEventListener('change', displayMatches);
input.addEventListener('keyup', displayMatches);