// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
var uppercaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
var numbersArray = ["0","1","2","3","4","5","6","7","8","9",];
var specCharacters = ["!","#","$","%","*","?","(",")","[","]"];
var resultArray = [""];


function generatePassword() {
  console.log("Button has been pressed");

    
  // Prompt for password length
  var passwordLength = window.prompt("Select the length of your password...keep it between 8 and 128 characters, please.");

    if (passwordLength < 8 || passwordLength > 128) {

      window.alert("That is not an acceptable password length, please try again.");
    } 

  // Confirm to add lowercase
  var addLowercase = window.confirm("Select OK if you would like to include lowercase letters in your password.");

    if (addLowercase == true) {
  
        resultArray += lowercaseLetters;

        console.log(resultArray);
      
    }

  // Confirm for adding uppercase 
  var addUppercase = window.confirm("Select OK if you would like to include uppercase letters in your password.");

    if (addUppercase == true) {
      
      resultArray += uppercaseLetters;

      console.log(resultArray);
    } 

  // Confirm for adding numbers
  var addNumbers = window.confirm("Select OK if you would like to include numbers in your password.");

    if (addNumbers == true) {
    
      resultArray += numbersArray;

      console.log(resultArray);
    } 


  // Prompt for adding special characters
  var addCharacters = window.confirm("Select OK if you would like to include characters in your password.");

    if (addCharacters == true) {
    
      resultArray += numbersArray;

      console.log(resultArray);
    } 


  if (!addLowercase == true && !addUppercase == true && !addNumbers == true && !addCharacters == true) {

    window.alert("You need to select at least one of the charater choices. Try again.")
  }

  // Validate input 


  
  // Generate password


  for (var i = 0; i < passwordLength; i++) {

    password += randomInt(resultArray[i]);

    //let resultArray = Math.floor(Math.random() * resultArray.length);
    //passwordText 
    //console.log(resultArray[i]);

    console.log(password);
    // Display password
    //return "Password";

  }
  
}

  // Write password to the #password input
  function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
