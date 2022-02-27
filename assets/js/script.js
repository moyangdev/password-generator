//Define variables
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

// Run prompts on button click
function generatePassword () {

  //Reset old password and selection
  var password = "";
  var selection = "";

  //Ask user to pick a password length
  pwLength = prompt("Please pick a password length of at least 8 characters and no more than 128 characters");

  //Ask user whether to include lowercase characters
  var checkLower = window.confirm("Would you like to include lowercase characters?");
  if(checkLower) {
    selection = selection + lowercase;
  }

  //Ask user whether to include uppercase characters
  var checkUpper = window.confirm("Would you like to include uppercase characters?");
  if(checkUpper) {
    selection = selection + uppercase;
  }

  //Ask user whether to include numbers
  var checkNumber = window.confirm("Would you like to include numbers?");
  if(checkNumber) {
    selection = selection + numbers;
  }

  //Ask user whether to include special characters
  var checkSpecial = window.confirm("Would you like to include special characters?");
  if (checkSpecial) {
    selection = selection + special;
  }

  //Generate random password based on the password length entered 
    for (i = 0; i < pwLength; i ++) {
    randomChar = selection[Math.floor(Math.random()*selection.length)];
    password = password + randomChar;
    }

  //Populate password
    return password;
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