/**
* Request user input via prompt
* @const {string} firstName - user's first name
* @const {string} secondName - user's second name
*/
function requestInput(){

  const firstName = prompt("Enter your first name");
  const secondName = prompt("Enter second name");
  const fullName = `${firstName} ${secondName}`;
  const length = fullName.length;
  
  processInput(fullName.toUpperCase(), length);
  
}

/** 
* Display processed user input from requestInput() as alert
* @param {string} fullNameUpper - User name in upper case
* @param {nunber} stringLength - Character count of string
*/
function processInput(fullNameUpper, stringLength) {

  alert(`${fullNameUpper} is ${stringLength} characters long including spaces`); 

}

requestInput();


// Project plan

// 1. Attach this file -- practice.js -- to the index.html file using a <script> tag

// 2. In this JavaScript file, add a prompt dialog to capture input from the user and store it in a variable

// 3. Add a second a prompt dialog to capture input from the user and store it in a second variable

// 4. Create a third variable and which combines an uppercase version values in the two other variables separated by a space. For example, if the first two variables contain "sally" and "forth", this third variable should contain the string value "SALLY FORTH"

// 5. Create a fourth variable to store a number. The number should be the total number of characters in the third variable. 

// 6. Add an alert dialog box that says "The string '[insert value of third variable here]' is X number of characters long." For example, if the third variable contained the string "SALLY FORTH" then the alert dialog should says "The string 'SALLY FORTH' is 11 characters long."



