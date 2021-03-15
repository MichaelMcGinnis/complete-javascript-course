'use strict';

// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// }

// const unitedStates = describeCountry('USA', 328, 'Washington, DC');

// const finland = describeCountry('Finland', 6, 'Helsinki');

// const canada = describeCountry('Canada', 50, 'somewhere cold');
// console.log(unitedStates, finland, canada);

// Function declarations vs Expressions

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const china = percentageOfWorld1(1441);
const unitedStates = percentageOfWorld1(328);
const canada = percentageOfWorld1(50);
console.log(china, unitedStates, canada);

// const percentageOfWorld2 = function (population) {
//   return (population / 7900) * 100;
// };

// const china1 = percentageOfWorld2(1441);
// const unitedStates1 = percentageOfWorld2(328);
// const canada1 = percentageOfWorld2(50);

// console.log(china1, unitedStates1, canada1);

// const percentageOfWorld3 = (population) => (population / 7900) * 100;
// const percentChina = percentageOfWorld3(1441);
// const percentUnitedStates = percentageOfWorld3(328);
// const percentCanada = percentageOfWorld3(50);
// console.log(percentChina, percentUnitedStates, percentCanada);

function describePopulation(country, population) {
  return `${country} has ${population} million people, which is about ${percentageOfWorld1(
    population
  )} % of the world`;
}

console.log(describePopulation('bolivia', 1441));

// const populations = [1441, 328, 50, 1300];
// console.log(populations.length === 4);

// const percentages = [
//   percentageOfWorld1(populations[0]),
//   percentageOfWorld1(populations[1]),
//   percentageOfWorld1(populations[2]),
//   percentageOfWorld1(populations[3]),
// ];
// console.log(percentages);

const neighbors = ['Canada', 'Mexico'];
neighbors.push('Utopia');
console.log(neighbors);
neighbors.pop();
console.log(neighbors);
if (!neighbors.includes('Germany')) {
  console.log('Probably not a central European country');
}

neighbors[neighbors.indexOf('Mexico')] = 'Republic of Mexico';
console.log(neighbors);

const myCountry = {
  country: 'United States',
  capital: 'Washington, DC',
  language: 'English',
  population: 328,
  neighbors: ['Canada', 'Mexico'],
  describe: function () {
    return console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbors.length} neighboring countries and a capital called ${this.capital}.`
    );
  },
  checkIsland: function () {
    this.isIsland = this.neighbors.length === 0 ? true : false;
    return this.isIsland;
  },
};

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);

// console.log(
//   `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighboring countries and a capital called ${myCountry.capital}.`
// );

// for (let voters = 1; voters <= 50; voters++) {
//   console.log(`Voter number ${voters} is currently voting`);
// }

const populations = [1441, 328, 50, 1300];
const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
  const perc = percentageOfWorld1(populations[i]);
  percentages2.push(perc);
}
// console.log(percentages2);

// const listOfNeighbors = [
//   ['Canada', 'Mexico'],
//   ['Spain'],
//   ['Norway', 'Sweden', 'Russia'],
// ];

// for (let i = 0; i < listOfNeighbors.length; i++) {
//   for (let x = 0; x < listOfNeighbors[i].length; x++) {
//     console.log(`Neighbor: ${listOfNeighbors[i][x]}`);
//   }
// }
const percentages3 = [];
let i = 0;

while (i < populations.length) {
  const perc = percentageOfWorld1(populations[i]);
  percentages3.push(perc);
  i++;
}
console.log(percentages3);
