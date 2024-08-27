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
  const months = date.getMonth() + 1;
  const days = date.getDate() - 1; //why does it take a -1 for this to be right? tried other getdate methods and still it comes to the 22nd when today is the 23rd :(  const year = date.getFullYear();
    const year = date.getFullYear();
  return `${months}/${days}/${year}`;
};
console.log(getTheDate());

//-----------------------------------2d array work ------------------------------------------------------------//
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

//Print the element at the second row, third column.

console.log(
  "1. Print the element at the second row, third column: " + matrix[1][2],
);

//loop through and print each element
console.log("2. This shows each element in the matrix:");

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}
//Change the value at the first row, second column to 10.

matrix[0][1] = 10;
console.log(matrix[0][1]);
console.log("3. matrix[0][1] = " + matrix[0][1]);

//Create a function to transpose the matrix (swap rows with columns). Did not do on your own!

function transposeMatrix(matrix) {
  let transposed = [];

  for (let i = 0; i < matrix[0].length; i++) {
    transposed[i] = [];
    for (let j = 0; j < matrix.length; j++) {
      transposed[i][j] = matrix[j][i];
    }

    return transposed;
  }
}
let transposedMatrix = transposeMatrix(matrix);
console.log(transposedMatrix)