// Assignment Code
// generateBtn will run querySelector and pull the #generate id.
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // The arrays below are the arrays from which my generatePassword function can pull characters.
  const lowercase = ["a", "b", "c", "d", "e", "f", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "X"];
  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const special = ["#", "@", "$", "^", "!", "%", ")", "(", "+", "*", "=", "_", "~", "-", "&"];

  // I've named the array that will be complied from my other arrays above and ultimately comprise my random password.
  let charSet = [];

  // This will set the generatePassword function to an empty string before it begins choosing characters to include.
  let password = "";

  // When "Generate Password" button is clicked, user is prompted for password criteria.
  // Ask the user to choose a password length between 8 and 128 characters.
  const passLength = prompt("Choose a length for your password. (This should be any amount between 8 and 128 characters.)"); // Should be a number.
  if (!isNaN(passLength) && passLength >= 8 && passLength <= 128) {

    // Ask the user for character types to include.
    // Should the password contain lowercase letters?
    const passLc = confirm("Should the password contain lowercase letters?");
    // If passLc is true...
    if (passLc) {
      // Run a for loop through the lowercase array's index and push a character to the charSet array.
      for(let i = 0; i < lowercase.length; i++) {
        // Pull characters from the lowercase array and push them to the charSet array.
        charSet.push(lowercase[i]);
      }
    }
    // Should the password contain uppercase letters?
    const passUc = confirm("Should the password contain uppercase letters?");
    // If passUc is true...
    if (passUc) {
      // Run a for loop through the upercase array's index and push a character to the charSet array.
      for(let i = 0; i < uppercase.length; i++) {
        // Pull characters from the uppercase array and push them to the charSet array.
        charSet.push(uppercase[i]);
      }
    }
    // "Should the password contain numbers?"
    const passNum = confirm("Should the password contain numbers?");
    // If passNum is true...
    if (passNum) {
      // Run a for loop through the nums array's index and push a character to the charSet array.
      for(let i = 0; i < nums.length; i++) {
        // Pull characters from the nums array and push them to the charSet array.
        charSet.push(nums[i]);
      }
    }
    // "Should the password contain special characters?"
    const passSpec = confirm("Should the password contain special characters?");
    // If passSpec is true...
    if (passSpec) {
      // Run a for loop through the special array's index and push a character to the charSet array.
      for(let i = 0; i < special.length; i++) {
        // Pull characters from the special array and push them to the charSet array.
        charSet.push(special[i]);
      }
    }

    // Use the passLength value and use this to generate the random password.
    for (let i = 0; i < passLength; i++) {
      // Set the randomIndex constant to the getRandomInt function using the charSet's length.
      const randomIndex = getRandomInt(charSet.length);
      // Add the randomIndex to the charSet, which will be added to the password.
      password += charSet[randomIndex];
    }
    console.log(password);
  } else { //If the user doesn't enter a value between 8 and 128, prompt them to do so again.
    prompt("Sorry, that entry is invalid. Please enter a value between 8 and 128.");
  }
  console.log(charSet);
  // Return the new password.
  return password;
}

// Have the getRandomInt function use the charSet length to pull array index items.
function getRandomInt(max) {
  // Multiply Math.random(), which only gives values between 0 and 1, by the max charSet length to get the correct number of password characters.
  return Math.floor(Math.random() * max);
}