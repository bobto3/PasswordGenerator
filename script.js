// var inclCapitalLetters = False;
// var inclLowerCaseLetters = False;
// var inclNumbers = False;
// var inclSpecialCharacters = False;

var capitalLetters = ["A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z"]
var lowerCaseLetters = ["a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"]
var numbers = ["1,2,3,4,5,6,7,8,9,0"];
var specialCharacters = ["!,@,#,$,%,^,&,*,(,),-,+"];

function validateCharsLength (numOfCharacters) {
  if (numOfCharacters < 8 || numOfCharacters > 128) {
    confirm("Please enter a number of characters between 8 and 128");
    return generatePassword();
  } 
}

function generatePassword() {
  var numOfCharacters = prompt("How many characters would you like your password to be?");
  validateCharsLength(numOfCharacters);
  var inclCapitalLetters = confirm("Would you like to use capital letters?");
  var inclLowerCaseLetters = confirm("Would you like to use lower case letters?");
  var inclNumbers = confirm("Would you like to use numbers?");
  var inclSpecialCharacters = confirm("Would you like to use special characters?");
  

  if (inclCapitalLetters || inclLowerCaseLetters || inclNumbers || inclSpecialCharacters) {
    document.querySelector(".card-body").innerHTML=("test");
  } else {
    document.querySelector(".card-body").innerHTML=("Error! Please select at least one character type.");
  }
}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
