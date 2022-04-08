// function random(choices) {
//   var index = randomInt(choices.length)
//   return choices[index]
// }
// function randomInt(limit) {
//   return Math.floor(Math.random() * Math.floor(limit))
// }

// function generatePassword() {
//   //These are all the possible special characters, upper and lowercase letters, and numbers
//   var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
//   var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
//   var specialCharacters = ["+", "-", "&", "||", "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?", ":"]
//   var numbers = [0, 1 ,2, 3, 4, 5, 6, 7, 8, 9]
//   var charArray = []
//   var passLength = (window.prompt("What is the length of your password? Give a value between 8-128",""));
//   var passLengthInt = parseInt(passLength);
//   console.log(passLength)
//   if (passLength === (null)) {
//     window.alert("Goodbye")
//     return
//   }
//   if (isNaN(passLengthInt)) {
//     window.alert("Password must be between 8-20 characters long")
//     generatePassword();
//   }  else  if  (passLengthInt >= 129 || passLengthInt <= 7) {
//       window.alert("That is outside of the given range, please enter a different number.")
//       generatePassword();
//     }else {
//       var passChar = window.confirm("Do you want to use special characters?")
//         if (passChar === true){
//           CharArray.push(chars)
//         }
//         var passNum = window.confirm("Do you want to use numbers?")
//         if (passNum === true){
//           CharArray.push(numbers1)
//         }
//         var lowerCase = window.confirm("Do you want to use uppercase characters?")
//         if (lowerCase === true){
//           CharArray.push(uppercase)
//         }
//         var upperCase = window.confirm("Do you want to use lowercase characters?")
//         if (upperCase === true){
//           CharArray.push(lowercase)
//         }
        
//       var passString = ''  
     
//       for (var i=0; i<=passLengthInt;i++) {
//         var randomlist = random(CharArray)
//         passString += random(randomlist)
//       }
//       return passString
//     }  
//   }
// // 
// var generateBtn = document.querySelector("#generate");

// // 
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener
// generateBtn.addEventListener("click", writePassword);





const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboard = document.getElementById('clipboard');

const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
}

clipboard.addEventListener('click', () => {
	const textarea = document.createElement('textarea');
	const password = resultEl.innerText;
	
	if(!password) { return; }
	
	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();
	alert('Password copied to clipboard');
});

generate.addEventListener('click', () => {
	const length = +lengthEl.value;
	const hasLower = lowercaseEl.checked;
	const hasUpper = uppercaseEl.checked;
	const hasNumber = numbersEl.checked;
	const hasSymbol = symbolsEl.checked;
	
	resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

function generatePassword(lower, upper, number, symbol, length) {
	let generatedPassword = '';
	const typesCount = lower + upper + number + symbol;
	const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
	
	// Doesn't have a selected type
	if(typesCount === 0) {
		return '';
	}
	
	// create a loop
	for(let i=0; i<length; i+=typesCount) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}
	
	const finalPassword = generatedPassword.slice(0, length);
	
	return finalPassword;
}

function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}







// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});