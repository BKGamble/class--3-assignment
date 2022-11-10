var characterLength = 8
choiceArr = []

specialCharArr = ["!","@","#","$","%","^","&","*","(",")","_","-","+","="]
lowerCharArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",]
upperCharArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",]
numberArr = ["0","1","2","3","4","5","6","7","8","9"]


// Assignment Code
var generateBtn = document.querySelector("#generate");

//Adds Event Listerner to generate password
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");
  
  if(correctPrompts) {
  var newPassword = generatePassword();
  passwordText.value = newPassword;
} else {
     passwordTest.value = "";
}


}
//To create a password based on the prompts and randomize array choices
function generatePassword() {
    var password = "";
    for(var i = 0; i < characterLength; i++) {
      var randomIndex = Math.floor(Math.random() * choiceArr.length);
      password = password + choiceArr[randomIndex];
  }
  return password;
}

function getPrompts() {
  choiceArr = [];

  characterLength = parseInt(prompt("How many characters do you want the password to be? (Please choosebetween the numbers (8-128))"));
if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
  alert("Character length must be entered as a number; Please try again (8-128 characters)");
 return false
}

  if (confirm("Would you like Lowercase letters in the password?")) {
  choiceArr = choiceArr.concat(lowerCharArr);
}

  if (confirm("Would you like Uppercase letters in the password?")) {
  choiceArr = choiceArr.concat(upperCharArr);
}

  if(confirm("Would you like Numbers in the password?")) {
    choiceArr = choiceArr.concat(numberArr);
    }
    
    if(confirm("Would you like Special Chars in the password?")) {
      choiceArr = choiceArr.concat(specialCharArr);
    }

    else{
      prompt("You must select one of the Upper, Lower, Numbers, or Special options!")
    }
    return true








}
