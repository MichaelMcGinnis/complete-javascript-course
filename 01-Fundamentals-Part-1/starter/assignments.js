// Values and Variables
const country = 'United States';
const continent = 'North America';
let population = 328_000_000;

console.log(country);
console.log(continent);
console.log(population);

// Data Types
const isIsland = false;
const language = 'English';

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// isIsland = true;

let populationWest = population / 2;

console.log(populationWest);

// population++;

console.log(population);

let populationFinland = 6_000_000;

console.log(population > populationFinland);

let avgPopulation = 33_000_000;

console.log(population < avgPopulation);

let description =
  country +
  ' is in ' +
  continent +
  ',' +
  ' and its ' +
  population +
  ' people ' +
  'speak ' +
  language;

console.log(description);

console.log(
  `${country} is in ${continent}, and its ${population} people speak ${language}`
);

if (population > avgPopulation) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${avgPopulation - population} below average`
  );
}

console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

// const numNeighbors = Number(
//   prompt('How many neighbor countries does your country have?')
// );

// if (numNeighbors === 1) {
//   console.log('Only 1 border!');
// } else if (numNeighbors > 1) {
//   console.log('More than 1 border');
// } else {
//   console.log('No borders');
// }

if (language === 'english' && population < 50_000_000 && !isIsland) {
  console.log(`You should live in ${country}`);
} else {
  console.log(`${country} does not meet your criteria`);
}

// const language = 'hindi';

switch (language) {
  case 'chinese':
  case 'mandarin':
    console.log('MOST number of native speakers!');
    break;
  case 'spanish':
    console.log('2nd place in number of native speakers');
    break;
  case 'english':
    console.log('3rd place');
    break;
  case 'hindi':
    console.log('Number 4');
    break;
  case 'arabic':
    console.log('5th most spoken language');
    break;
  default:
    console.log('Great language too :D');
}

console.log(
  `${country}'s population is ${
    population > 33_000_000 ? 'above' : 'below'
  } average'`
);
