//JavaScript Practice in Seattle.  Yes I've done most of these before. Yes I will be doing more!  And yes, doing things repeatedly is a good thing if you are learning :)

// 1. Write a javascript program to check two numbers and return true if one of the numbers is 100 or if the sum of the two numbers is 100.

const checkNumbers = (firstNumber, secondNumber) => {
  firstNumber === 100 ||
    secondNumber === 100 ||
    firstNumber + secondNumber === 100;

  console.log(checkNumbers(50, 50));
};
