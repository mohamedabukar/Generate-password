// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCaseCharacters = ["A","B","C","D","E"];
var lowerCaseCharacters = ["a", "b", "c", "r", "w"];
var specialCharacters = ["*", "!", "?"];
var numericCharacters = ["0", "1", "4", "9"];
var passwordCharacters = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordField = document.querySelector("#password");
  passwordField.value = password;
}

function generatePassword(){
  var passwordLength = window.prompt("How many characters would you like your password to be?(8 to 128)");
  var passwordArr = [];
  var length = parseInt(passwordLength)
  if (length < 8 || length > 128){
    window.alert ("This number of characters is not supported");
    generatePassword();
  }
  
  var choosesUppercase = confirm("Do you want uppercase characters in your password?");
  if (choosesUppercase === true){
    passwordArr = passwordArr.concat(upperCaseCharacters);
  }

  var choosesLowerCase = confirm("Do you want to have lowercase Characters in your password?");
  if (choosesLowerCase){
    passwordArr = passwordArr.concat(lowerCaseCharacters);
  }

  var choosesSpecial = confirm("Do you want special characters in your password?");
  if (choosesSpecial){
    passwordArr = passwordArr.concat(specialCharacters);
  }

  var choosesNumbers = confirm("Do you want numbers included in your password?");
  if(choosesNumbers){
    passwordArr = passwordArr.concat(numericCharacters);
  }

  return passwordText(passwordArr, length);
}

function passwordText(passwordArr, passwordLength){
  console.log(passwordArr)
  var passwordString = passwordArr.join(""); // joining all array elements to single string
  var passwordStr = "";

  for (var i =0; i < passwordLength; i++){
    passwordStr += passwordString.charAt(Math.floor(Math.random() * passwordArr.length));
  }

  console.log(passwordStr)
  return passwordStr;

}
  //writePassword(console.log(password));

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
