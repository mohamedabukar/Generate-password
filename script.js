// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCaseCharacters = ("A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z");
var lowerCaseCharacters = ("a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z");
var specialCharacters = ("_*&^%$#@!");
var numericCharacters = ("0,1,2,3,4,5,6,7,8,9");
var passwordCharacters = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword (){
  var passwordLength = window.prompt ("How many characters would you like your password to be?(8 to 128)");
  var passwordArr = [];
  var length = parseInt(passwordLength)
  if (length < 8 || length > 128){
    window.alert ("This number of characters is not supported");
    generatePassword();
  }
  confirm("Do you want uppercase characters in your password?");
  if (true){
    passwordArr = passwordArr.concat(upperCaseCharacters);
  }

  confirm("Do you want to have lowercase Characters in your password?");
  if (true){
    passwordArr = passwordArr.concat(lowerCaseCharacters);
  }
  confirm("Do you want special characters in your password?");
  if (true){
    passwordArr = passwordArr.concat(specialCharacters);
  }
  confirm("Do you want numbers included in your password?");
  if(true){
    passwordArr = passsword.concat(numericCharacters);
  }

console.log(passwordArr);
passwordText(length);
}
generatePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
