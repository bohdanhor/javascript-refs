const code = '1234';
let userPrompt = 12355;
// let userPrompt = prompt("Guess a 4-digit number :)");
userPrompt = parseInt(userPrompt); // change to integer
let lengthPr = userPrompt.length;
console.log(userPrompt);
console.log(lengthPr);
if (userPrompt === code) {
    console.log("Congrats");}
    else if (isNaN(userPrompt)){
        console.log("You need to type-in digits");
    }
    else if (lengthPr < 4) {
        console.log("Not enough digits");}
        else if (lengthPr > 4) {
        console.log("Too many digits");}

        //dont work atm