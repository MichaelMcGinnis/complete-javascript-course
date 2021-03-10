// const markMass1 = 78;
// const markHeight1 = 1.69;

// const johnMass1 = 92;
// const johnHeight1 = 1.95;

// const markMass2 = 95;
// const markHeight2 = 1.88;

// const johnMass2 = 85;
// const johnHeight2 = 1.76;

// const markBMI1 = markMass1 / markHeight1 ** 2;
// const johnBMI1 = johnMass1 / johnHeight1 ** 2;

// const markBMI2 = markMass2 / markHeight2 ** 2;
// const johnBMI2 = johnMass2 / johnHeight2 ** 2;

// console.log(markBMI1, markBMI2, johnBMI1, johnBMI2);

// const markHigherBMI1 = markBMI1 > johnBMI1;
// const markHigherBMI2 = markBMI2 > johnBMI2;

// console.log(markHigherBMI1, markHigherBMI2);

// if (markBMI2 > johnBMI2) {
//   console.log(
//     `Mark's BMI of ${markBMI2} is higher than John's BMI of ${johnBMI2}`
//   );
// } else {
//   console.log(
//     `Mark's BMI of ${markBMI2} is lower than John's BMI of ${johnBMI2}`
//   );
// }

// Data 1
/*
const dolphinScore1 = 96;
const dolphinScore2 = 108;
const dolphinScore3 = 89;

const koalaScore1 = 88;
const koalaScore2 = 91;
const koalaScore3 = 110;

const dolphinAverageScore = (dolphinScore1 + dolphinScore2 + dolphinScore3) / 3;
const koalaAverageScore = (koalaScore1 + koalaScore2 + koalaScore3) / 3;

console.log(dolphinAverageScore);
console.log(koalaAverageScore);

if (dolphinAverageScore > koalaAverageScore) {
  console.log(`The Dolphins win the competition`);
} else if (koalaAverageScore > dolphinAverageScore) {
  console.log('The Koalas win the competition');
} else {
  console.log('The competition is a draw');
}


//Bonus 1:
const dolphinScore1 = 97;
const dolphinScore2 = 112;
const dolphinScore3 = 101;

const koalaScore1 = 109;
const koalaScore2 = 95;
const koalaScore3 = 123;

const dolphinScore1Counts = dolphinScore1 >= 100;
const dolphinScore2Counts = dolphinScore2 >= 100;
const dolphinScore3Counts = dolphinScore3 >= 100;

const koalaScore1Counts = koalaScore1 >= 100;
const koalaScore2Counts = koalaScore2 >= 100;
const koalaScore3Counts = koalaScore3 >= 100;

let dolphinAverageScore;
let koalaAverageScore;

if (dolphinScore1Counts && dolphinScore2Counts && dolphinScore3Counts) {
  dolphinAverageScore = (dolphinScore1 + dolphinScore2 + dolphinScore3) / 3;
} else if (dolphinScore1Counts && dolphinScore2Counts) {
  dolphinAverageScore = (dolphinScore1 + dolphinScore2) / 2;
} else if (dolphinScore1Counts && dolphinScore3Counts) {
  dolphinAverageScore = (dolphinScore1 + dolphinScore3) / 2;
} else if (dolphinScore2Counts && dolphinScore3Counts) {
  dolphinAverageScore = (dolphinScore2 + dolphinScore3) / 2;
} else {
  console.log('Not working');
}
if (koalaScore1Counts && koalaScore2Counts && koalaScore3Counts) {
  koalaAverageScore = (koalaScore1 + koalaScore2 + koalaScore3) / 3;
} else if (koalaScore1Counts && koalaScore2Counts) {
  koalaAverageScore = (koalaScore1 + koalaScore2) / 2;
} else if (koalaScore1Counts && koalaScore3Counts) {
  koalaAverageScore = (koalaScore1 + koalaScore3) / 2;
} else if (koalaScore2Counts && koalaScore3Counts) {
  koalaAverageScore = (koalaScore2 + koalaScore3) / 2;
} else {
  console.log('Not working');
}

console.log(dolphinAverageScore);
console.log(koalaAverageScore);

if (dolphinAverageScore > koalaAverageScore) {
  console.log(`The Dolphins win the competition`);
} else if (koalaAverageScore > dolphinAverageScore) {
  console.log('The Koalas win the competition');
} else {
  console.log('The competition is a draw');
}



//Bonus 2:

const dolphinScore1 = 97;
const dolphinScore2 = 112;
const dolphinScore3 = 101;

const koalaScore1 = 109;
const koalaScore2 = 95;
const koalaScore3 = 106;

const dolphinScore1Counts = dolphinScore1 >= 100;
const dolphinScore2Counts = dolphinScore2 >= 100;
const dolphinScore3Counts = dolphinScore3 >= 100;

const koalaScore1Counts = koalaScore1 >= 100;
const koalaScore2Counts = koalaScore2 >= 100;
const koalaScore3Counts = koalaScore3 >= 100;

let dolphinAverageScore;
let koalaAverageScore;

if (dolphinScore1Counts && dolphinScore2Counts && dolphinScore3Counts) {
  dolphinAverageScore = (dolphinScore1 + dolphinScore2 + dolphinScore3) / 3;
} else if (dolphinScore1Counts && dolphinScore2Counts) {
  dolphinAverageScore = (dolphinScore1 + dolphinScore2) / 2;
} else if (dolphinScore1Counts && dolphinScore3Counts) {
  dolphinAverageScore = (dolphinScore1 + dolphinScore3) / 2;
} else if (dolphinScore2Counts && dolphinScore3Counts) {
  dolphinAverageScore = (dolphinScore2 + dolphinScore3) / 2;
} else {
  console.log('Not working');
}
if (koalaScore1Counts && koalaScore2Counts && koalaScore3Counts) {
  koalaAverageScore = (koalaScore1 + koalaScore2 + koalaScore3) / 3;
} else if (koalaScore1Counts && koalaScore2Counts) {
  koalaAverageScore = (koalaScore1 + koalaScore2) / 2;
} else if (koalaScore1Counts && koalaScore3Counts) {
  koalaAverageScore = (koalaScore1 + koalaScore3) / 2;
} else if (koalaScore2Counts && koalaScore3Counts) {
  koalaAverageScore = (koalaScore2 + koalaScore3) / 2;
} else {
  console.log('Not working');
}

console.log(dolphinAverageScore);
console.log(koalaAverageScore);

if (dolphinAverageScore > koalaAverageScore) {
  console.log(`The Dolphins win the competition`);
} else if (koalaAverageScore > dolphinAverageScore) {
  console.log('The Koalas win the competition');
} else {
  console.log('The competition is a draw');
}

*/

const bill = 430;
const tip = 50 <= bill && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value is ${
    bill + tip
  }`
);
