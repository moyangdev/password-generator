// Assignment code here

//Define variables for user input
var length = "";
var lowercase = "";
var uppercase = "";
var numbers = "";
var special = "";

length = prompt("Please pick a password length of at least 8 characters and no more than 128 characters");
console.log(length);

lowercase = window.confirm("Would you like to include lowercase characters?");
console.log(lowercase);

uppercase = window.confirm("Would you like to include uppercase characters?");
console.log(uppercase);

numbers = window.confirm("Would you like to include numbers?");
console.log(numbers);

special = window.confirm("Would you like to include special characters?");
console.log(special);

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