// Assignment code here

//Define variables for user input
var length = "";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var special = "!@#$%^&*_-+=";


// length = prompt("Please pick a password length of at least 8 characters and no more than 128 characters");
// console.log(length);

// lowercase = window.confirm("Would you like to include lowercase characters?");
// console.log(lowercase);

// uppercase = window.confirm("Would you like to include uppercase characters?");
// console.log(uppercase);

// numbers = window.confirm("Would you like to include numbers?");
// console.log(numbers);

// special = window.confirm("Would you like to include special characters?");
// console.log(special);


// function to generate a random numeric value
// var randomNumber = function(min, max) {
//   var value = Math.floor(Math.random() * (max - min + 1) + min);

//   return value;
// };

// const generatePassword = (length, characters) => {
//   let password = "";
//   for (let i = 0; i < length; i++) {
//     password += characters.charAt(
//       Math.floor(Math.random() * characters.length)
//     );
//   }
//   return password;
// };

// Run prompts on button click
function generatePassword () {
  
  length = prompt("Please pick a password length of at least 8 characters and no more than 128 characters");
  console.log(length);

  var checkLower = window.confirm("Would you like to include lowercase characters?");
  if (checkLower) {
    return lowercase;
  }
  else {
    window.alert("Invalid Input");
  }

  var checkUpper = window.confirm("Would you like to include uppercase characters?");
  if (checkUpper) {
    return uppercase;
  }
  else {
    window.alert("Invalid Input");
  }

  var checkNumber = window.confirm("Would you like to include numbers?");
  if (checkNumber) {
    return numbers;
  }
  else {
    window.alert("Invalid Input");
  }

  var checkSpecial = window.confirm("Would you like to include special characters?");
  if (checkSpecial) {
    return special;
  }
  else {
    window.alert("Invalid Input");
  }
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);