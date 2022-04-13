//DOM elements below. An example of a DOM element would be a DIV, HTML, BODY element on a page.
 //You can find an entire list of HTML DOM elements at https://www.w3schools.com/jsref/dom_obj_all.asp. 
const resultEl = document.getElementById('result');//This is where the random password comes from
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase'); //adding El turns this into an element
const lowercaseEl = document.getElementById('lowercase');//lowercase element
const numbersEl = document.getElementById('numbers');//numbers element
const symbolsEl = document.getElementById('symbols'); //symbols element
const generateEl = document.getElementById('generate'); //generate button
const clipboard = document.getElementById('clipboard'); //clipboard button

// This is an object
const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
}

//Copy to clipboard. 
//Follow this article to get step by step on how to: https://hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f
clipboard.addEventListener('click', () => {
	const textarea = document.createElement('textarea');//type of element create
	const password = resultEl.innerText; //you can add content to this too
	
	if(!password) { return; }//if there is nothing in the password result then code will return
	
	textarea.value = password;
	document.body.appendChild(textarea); //appendChild puts it in the body
	textarea.select();
	document.execCommand('copy');
	textarea.remove();//Deletes text area
	alert('Password copied to clipboard');//Lets user know password has been copied to clipboard
});


//Generate event listen
//adding an event listener to listen to a click. When this is click it gives the values.
generate.addEventListener('click', () => {
	const length = +lengthEl.value;//adding a plus sign makes this a number or you can use add int
	const hasLower = lowercaseEl.checked;//the .checked property will be a true or false. Determining if the box is checked or not.
	const hasUpper = uppercaseEl.checked; //Uppercase
	const hasNumber = numbersEl.checked; //numbers
	const hasSymbol = symbolsEl.checked;//symbols
	
  // You can console.log(hasLower, hasUpper, hasNumber, hasSymbol); to check along the way
  //resultEl...is going to give the results to filter
	resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

// Generate password function
//Here I am generating the password in a function
function generatePassword(lower, upper, number, symbol, length) {
  //1. Inti password variable
  //2. Filter out uncheck types
  //3. Loop over lenth call generator fuction for each type
  //4. Add final password to the password variable and return
	let generatedPassword = '';

	const typesCount = lower + upper + number + symbol;

  //console.log('typesCount: ', typesCount); 
  //Here is an array of objects. Using filer method to filter out what is false by looping through each item. 
  // Based of a true of false value it will filter out what is unchecked
	const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
	
	// This is to make sure if there is no boxes check to return an empty string
	if(typesCount === 0) {
		return '';
	}
	
	// create a loop
  //Incrementing by types count. 
	for(let i=0; i<length; i+=typesCount) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
//console.log('funcName: ', funcName);

      //the key is the funcName coming from line above.
			generatedPassword += randomFunc[funcName]();
		});
	}
	//for loop ends Here
  //console.log(generatedPassword.slice(0, length)); .slice will give us the right lenth amount
  //Final password
	const finalPassword = generatedPassword.slice(0, length);
	
  //Returning final password into the generate password function.
	return finalPassword;
}

//This is a function to generate a random lowercase letter. 
// In the character code 97 = a. We go up to 26 because there is 26 letters in the alphabet.
// math.floor generates a random decimal.
function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
// Uppercase is similar. Uppercase A starts at 65. Now we will get a random number in the character code range.
function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
// For numbers 1 starts at 0. To go up to 9, so we would need to multiply by 10. 
// getRandomNumber generates a random number. 
function getRandomNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
//Here you can add symbols. Using Math.floor rounds number down. 
function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}