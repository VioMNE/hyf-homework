//Age-ify (A future age calculator)

const yearOfBirth = 1990;
const yearFuture = 2050;

const age = yearFuture - yearOfBirth;

console.log('You will be' +" "+ age + ' ' + 'years old in 2050');


//Goodboy-Oldboy (A dog age calculator)

const dogYearOfBirth = 2010;
const dogYearFuture = 2027;
const dogsAgeInFuture = dogYearFuture - dogYearOfBirth;
const dogYear = dogsAgeInFuture * 7;

const shouldShowResultInDogYears = true;

if(shouldShowResultInDogYears) {
    console.log('Your dog will be ' + dogsAgeInFuture + ' humans years old in 2027');
    
} else if(shouldShowResultInDogYears) {
    console.log('Your dog will be ' + dogYear + ' dog years old in 2027' );
}


//Housey pricey (A house price estimator)

const volumeInMeters = [8*10*10, 5*11*8];
const gardenSizeInM2 = [100, 70];

const payingPrice = [2500000, 1000000]

const housePrice = [volumeInMeters[0] * 2.5 * 1000 + gardenSizeInM2[0] * 300, volumeInMeters[1] * 2.5 * 1000 + gardenSizeInM2[1] * 300];


const underPriceDifferencePeter = housePrice[0] - payingPrice[0];
const  overPriceDifferencePeter = payingPrice[0] - housePrice[0];

const underPriceDifferenceJulia =  housePrice[1] - payingPrice[1];
const  overPriceDifferenceJulia = payingPrice[1] - housePrice[1];


// Calculations for Peter 

if(housePrice[0] > payingPrice[0]) {
    console.log('Peter paid ' + underPriceDifferencePeter + ' less then calculated price');
} else if(housePrice[0] === payingPrice[0]) {
    console.log('Peter paid ' + payingPrice[0] + ' same as the calculated price');
} else {
    console.log('Peter paid ' + overPriceDifferencePeter + ' more then calculated price' );
}


// Calculation for Julia

if(housePrice[1] > payingPrice[1]) {
    console.log('Julia paid ' + underPriceDifferenceJulia + ' less then calculated price');
} else if(housePrice[1] === payingPrice[1]) {
    console.log('Julia paid ' + payingPrice[1] + ' same as the calculated price');
} else {
    console.log('Julia paid ' + overPriceDifferenceJulia + ' more then calculated price' );
}

// Ez Namey (Startup name generator) Optional

const firstWords = ['Quick', 'Smart', 'Pink', 'Blue', 'Green', 'Great', 'Together', 'Awesome', 'Go', 'Run'];
const secondWords = ['Company', 'Solution', 'Tehnology', 'Mobility', 'Group', 'Coach', 'Ltd', 'Agency', 'Services', 'Transport'];

const randomNumber = Math.floor(Math.random() * secondWords.length);


const startupName = firstWords[randomNumber] + ' ' + secondWords[randomNumber];

console.log(startupName);

