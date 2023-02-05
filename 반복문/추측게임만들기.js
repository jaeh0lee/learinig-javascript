let maxium = parseInt(prompt("Enter the maxium number!")
) 

while (!maxium){
    maxium =  parseInt(prompt("Enter a valid number"))
}

const targetNum = Math.floor(Math.random() * maxium) + 1

console.log(targetNum);

let guess = parseInt(prompt("enter your guess"))
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if(guess === "Q") break;
    attempts++;
    if(guess > targetNum){
        guess = prompt("too high")
    } else {
        guess = prompt("too low")
    }
}
if(guess === "Q"){
    console.log("ok quick!");
}
console.log(`you click ${attempts} number`);