// Assignment Code
// generateBtn will run querySelector and pull the #generate id.
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
// 
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function generatePassword() {
  // When "Generate Password" button is clicked, user is prompted for password criteria.
  // Ask the user to choose a password length between 8 and 128 characters.
  const passLength = prompt("Choose a length for your password. (This should be any amount between 8 and 128 characters.)"); // Should be a number.
  if (!isNaN(passLength) && passLength > 8 && passLength < 128) {
    // Ask the user for character types to include.
    const passLc = confirm("Should the password contain lowercase letters?");
    const passUc = confirm("Should the password contain uppercase letters?");
    const passNum = confirm("Should the password contain numbers?");
    const passSpec = confirm("Should the password contain special characters?");
    const passwordOptions = [
      ["a", "b", "c"],
      [1, 2, 3, 4, 5],
      ["#", "@", "$", "^"],
    ];
    let password = "";
    for (let i = 0; i < passLength; i++) {
      const randomIndex = getRandomInt(3);
      const randomList = passwordOptions[randomIndex];
      const randomCharacter = getRandomInt(randomList.length);
      password += randomCharacter;
    }
    console.log(password);
  } else {
    prompt("Sorry, that entry is invalid. Please enter a value between 8 and 128.");

  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}



// Validate user's input


// Generate a password.


// Display the password in #password.
