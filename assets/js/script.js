// Assignment code here

//function to generate a random int from choices.length and return choices at that random index.
function random(choices) {
  var index = randomInt(choices.length)
  return choices[index]
}
//function to get a randominteger from a given limit
function randomInt(limit) {
  return Math.floor(Math.random() * Math.floor(limit))
}

// function containing the arrays of characters for the password to be generated from. 
function generatePassword() {
  //Arrays holding all possible characters, letters, and numbers
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var chars = ["+", "-", "&", "||", "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?", ":"]
  var numbers1 = [0, 1 ,2, 3, 4, 5, 6, 7, 8, 9]
  //Array that holds all of my arrays
  var CharArray = []
//variables that hold password length and that parse the given input to an integer
  var passLength = (window.prompt("What is the length of your password? Give a value between 8-128",""));
  var passLengthInt = parseInt(passLength);
  console.log(passLength)
  //If statements that can return out of this function if certain criteria are not met or continue the function, adding my various lower/upp/chars/numbers1 arrays to the empty character array to have the password generated from those. 
  if (passLength === (null)) {
    window.alert("Goodbye")
    return
  }
  if (isNaN(passLengthInt)) {
    window.alert("That is not a number my g, try again.")
    generatePassword();
  }  else  if  (passLengthInt >= 129 || passLengthInt <= 7) {
      window.alert("That is outside of the given range, please enter a different number.")
      generatePassword();
    }else {
      var passChar = window.confirm("Do you want to use special characters?")
        if (passChar === true){
          CharArray.push(chars)
        }
        var passNum = window.confirm("Do you want to use numbers?")
        if (passNum === true){
          CharArray.push(numbers1)
        }
        var passCase1 = window.confirm("Do you want to use uppercase characters?")
        if (passCase1 === true){
          CharArray.push(uppercase)
        }
        var passCase2 = window.confirm("Do you want to use lowercase characters?")
        if (passCase2 === true){
          CharArray.push(lowercase)
        }
        //empty passtring for the password to be written to
      var passString = ''  
        //for loop for randomly iterating through the character array and randomlist
      for (var i=0; i<=passLengthInt;i++) {
        var randomlist = random(CharArray)
        passString += random(randomlist)
      }
      return passString
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
