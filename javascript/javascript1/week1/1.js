//Age-ify (A future age calculator)

const yearOfBirth = 1990;
const yearFuture = 2050;

const age = yearFuture - yearOfBirth;

console.log('You will be' +" "+ age + ' ' + 'years old in 2050');


//Goodboy-Oldboy (A dog age calculator)

const dogYearOfBirth = 2010;
const dogYearFuture = 2027;
const dogsageinfuture = dogYearFuture - dogYearOfBirth;
const dogyear = dogsageinfuture * 7;

const shouldShowResultInDogYears = true;

if(shouldShowResultInDogYears) {
    console.log('Your dog will be ' + dogsageinfuture + ' humens years old in 2027');
    
} else if(shouldShowResultInDogYears) {
    console.log('Your dog will be ' + dogyear + ' dog years old in 2027' );
}


//Housey pricey (A house price estimator)

const volumeInMeters = [8*10*10, 5*11*8];
const gardenSizeInM2 = [100, 70];

const petersPayingPrice = 2500000;
const juliasPayingPrice = 1000000;

const calculatedPetersHousePrice = volumeInMeters[0] * 2.5 * 1000 + gardenSizeInM2[0] * 300;
const calculatedJuliasHousePrice = volumeInMeters[1] * 2.5 * 1000 + gardenSizeInM2[1] * 300;

const underPriceDifferencePeter = calculatedPetersHousePrice - petersPayingPrice;
const  overPriceDifferencePeter = petersPayingPrice - calculatedPetersHousePrice;

const underPriceDifferenceJulia =  calculatedJuliasHousePrice - juliasPayingPrice;
const  overPriceDifferenceJulia = juliasPayingPrice - calculatedJuliasHousePrice;


// Calculations for Peter 

if(calculatedPetersHousePrice > petersPayingPrice) {
    console.log('Peter paid ' + underPriceDifferencePeter + ' less then calculated price');
} else if(calculatedPetersHousePrice === petersPayingPrice) {
    console.log('Peter paid ' + petersPayingPrice + ' same as the calculated price');
} else {
    console.log('Peter paid ' + overPriceDifferencePeter + ' more then calculated price' );
}


// Calculation for Julia

if(calculatedJuliasHousePrice > juliasPayingPrice) {
    console.log('Julia paid ' + underPriceDifferenceJulia + ' less then calculated price');
} else if(calculatedJuliasHousePrice === juliasPayingPrice) {
    console.log('Julia paid ' + juliasPayingPrice + ' same as the calculated price');
} else {
    console.log('Julia paid ' + overPriceDifferenceJulia + ' more then calculated price' );
}

// Ez Namey (Startup name generator) Optional

const firstWords = ['Quick', 'Smart', 'Pink', 'Blue', 'Green', 'Great', 'Together', 'Awesome', 'Go', 'Run'];
const secondWords = ['Company', 'Solution', 'Tehnology', 'Mobility', 'Group', 'Coach', 'Ltd', 'Agency', 'Services', 'Transport'];

const randomNumber = Math.floor(Math.random() * 10);

const startupName = firstWords[randomNumber] + ' ' + secondWords[randomNumber];

console.log(startupName);

