// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function makeid(length) {
  var characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*";
  var result = "";
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
 }
 return result;
}

// Add event listener to generate button
const btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {

  window.alert(makeid(10));
});
