// Assignment code here
function generatePassword() {
  var passwordLength = prompt ('How long do you want your password');
  //validate prompt answer
  if (passwordLength <8 || passwordLength>128) {
    alert('Password must be between 8-128 characters');
    //stop function from running if answer is wrong
    return generatePassword();
  }
  //confirm if user want lowercase
  var confirmLower = confirm('Do you want lowercase?');
  //confirm if user want uppercase
  var confirmUpper = confirm('Do you want uppercase?');
  //confirm if user want numeric
  var confirmNumeric = confirm('Do you want numbers?');
  //confirm if user want specialcase
  var confirmSpecial = confirm('Do you want specialcase?');
//validate prompt answer
if (confirmLower == false && confirmUpper == false && confirmNumeric == false && confirmSpecial == false) {
  alert('Password must be between 8-128 characters');
  //stop function from running if answer is wrong
  return generatePassword();
}
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
console.log(generateBtn);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
console.log(password);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

