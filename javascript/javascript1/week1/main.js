//Age-ify (A future age calculator)
const yearOfBirth = 1993;
const yearFuture = 2018;
const age = yearFuture - yearOfBirth;
console.log("You will be " + age + "years old in " + yearFuture);

//Goodboy-Oldboy (A dog age calculator)
const dogYearOfBirth = 1990;
const dogYearFuture = 2000;
const shouldShowResultInDogYears = false;
if (shouldShowResultInDogYears == true) {
  const dogYear = dogYearFuture - dogYearOfBirth;
  console.log("your dog will be " + dogYear + "dogs years in " + dogYearFuture);
} else {
  const dogYear = (dogYearFuture - dogYearOfBirth) * 2;
  console.log(
    " your dog will be " + dogYear + " human years old in " + dogYearFuture
  );
}

//Housey pricey (A house price estimator)
let volumeInMetersFirstHouse = 8 * 10 * 10;
let volumeInMetersSecondHouse = 5 * 11 * 8;
let housePriceFirst = volumeInMetersFirstHouse * 2.5 * 1000 * 100 * 300;
let housePriceSecond = volumeInMetersSecondHouse * 2.5 * 1000 * 70 * 300;
let result;
if (housePriceFirst <= 2500000) {
  result = "buy the house ";
  console.log(result);
} else {
  result = "dont buy the house ";
  console.log(result);
}
if (housePriceSecond <= 1000000) {
  result = "buy the house";
  console.log(result);
} else {
  result = "dont buy the house";
  console.log(result);
}
//Ez Namey (Startup name generator)
let firstWords = [
  "Easy",
  "Awesome",
  "Corporate",
  "cool",
  "good",
  "amazing",
  "fine",
  "lights",
  "only",
  "hm"
];
let secondWords = [
  "zara",
  "firma",
  "yoggi",
  "dk",
  "loop",
  "lama",
  "trafik",
  "frugt",
  "low",
  "vison"
];
let startupName = "created startup name";
let randomNumber = Math.floor(Math.random() * 10) + 0;
let randomCompany = secondWords[randomNumber];
let length = randomCompany.length;
console.log(
  "the stratup " + randomCompany + " contains" + length + " characters"
);
