// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");


    passwordText.value = password;

}

var passWord = "";

function generatePassword() {

    var passWordLgh = prompt("Password length must be between 8 and 150 characters");
    var passWordLgh = parseInt(passWordLgn);

    if (typeof passWordLgh === "number" && passWordLgh > 8 && passWordLgh < 128) {
        var passWordLowCase = confirm("Do you want to use lowercase letters in your password?");
        var passWordUpCase = confirm("Do you want to use Uppercase letters?");
        var passWordNum = confirm("Would you like to use add numbers?");
        var passWordSpecialCharacters = confirm("How about some special characters?");

        var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        var passWordSpecialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?", "-", "_", "+", "="];

        passWord = "";

        if (passWordLgh > 8 && passWordLgh < 150) {
            while (passWord.length < passWordLgh) {
                if (passWordLowCase && passWord.length < passWordLgn) {
                    passWord = passWord + letters[Math.floor(Math.random() * letters.length)];
                }
                if (passWordUpCase && passWord.length < passWordLgn) {
                    passWord = passWord + [Math.floor(Math.random() * letters.length)].toUpperCase();
                }
                if (passWordNum && passWord.length < passWordLgn) {
                    passWord = passWord + Math.floor(Math.random() * 9);
                }
                if (passWordSpecialCharacters === true && passWord.length < passWordLgn) {
                    passWord = passWord + passWordSpecialChar[Math.floor(Math.random() * passWordSpecialCharacters.length)];
                }

            }
        }
        console.log(passWord.length);
        console.log(passWordLowerCase + " Lower ");
        console.log(passWordUpperCase + " Upper ");
        console.log(passWordNum + " Num ");
        console.log(passWordSpecialCharacters + " Char ");

        return passWord;

    } else {
        alert("Follow directions");
        generatePassword();
    }
    return passWord;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


