//JavaScript Practice in Seattle.  Yes I've done most of these before. Yes I will be doing more!  And yes, doing things repeatedly is a good thing if you are learning :)

//this is a connection check
// 1. Write a javascript program to check two numbers and return true if one of the numbers is 100 or if the sum of the two numbers is 100.

const checkNumbers = (firstNumber, secondNumber) => {
  firstNumber === 100 ||
    secondNumber === 100 ||
    firstNumber + secondNumber === 100;

  console.log(checkNumbers(50, 50));
};

//2.  Write a program to get the extension of a filename.

const getFileExtension = (anyString) => {
  extensionOnly = anyString.slice(anyString.lastIndexOf("."));
  return extensionOnly;
};

console.log(getFileExtension("www.google.com"));

//3.  Write a Javascript program that replaces a character in a given string with the character following it in the alphabet.

//String.charCodeAt String.fromCharCode

const replaceWithNextChar = (anyOldString) => 

anyOldString
  .split("")
  .map((char) => String.fromCharCode(char.charCodeAt(0) + 1))
  .join("");


console.log(replaceWithNextChar("abcd"));

//4. Write a Javascript program to get the current date. Expected output: MM/DD/YYYY

const getTheDate = (date = new Date()) => {
  
  const months = (date.getMonth() + 1);
  const days = (date.getDate() - 1);  //why does it take a -1 for this to be right? tried other getdate methods and still it comes to the 22nd when today is the 23rd :(  const year = date.getFullYear();

  return `${months}/${days}/${year}`
}
  
console.log(getTheDate());