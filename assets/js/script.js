//Define variables
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var special = "!@#$%^&*_-+=";

// Run prompts on button click
function generatePassword () {

  //Reset old password and selection
  var password = "";
  var selection = "";

  //Ask user to pick a password length
  var pwLength = window.prompt("Please pick a password length of at least 8 characters and no more than 128 characters (Enter a number between 8 - 128)");

  //Validate user input
  if (pwLength === "" || pwLength === null || pwLength < 8 || pwLength > 128 || isNaN(pwLength) === true) {
    window.alert("You need to provide a valid answer! Please try again.");
    return generatePassword();
  }

  //Ask user whether to include lowercase characters
  var checkLower = window.confirm("Would you like to include lowercase characters? (Click 'OK' for Yes, or 'Cancel' for No)");
  if (checkLower) {
    selection = selection + lowercase;
  }

  //Ask user whether to include uppercase characters
  var checkUpper = window.confirm("Would you like to include uppercase characters? (Click 'OK' for Yes, or 'Cancel' for No)");
  if (checkUpper) {
    selection = selection + uppercase;
  }

  //Ask user whether to include numeric characters
  var checkNumber = window.confirm("Would you like to include numeric characters? (Click 'OK' for Yes, or 'Cancel' for No)");
  if (checkNumber) {
    selection = selection + numbers;
  }

  //Ask user whether to include special characters
  var checkSpecial = window.confirm("Would you like to include special characters? (Click 'OK' for Yes, or 'Cancel' for No)");
  if (checkSpecial) {
    selection = selection + special;
  }

  //Show alert if user does not select any characters
  if (selection === "" || selection === null) {
    alert("You have not included any characters. Please try again.");
    return password;
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