const prompt = require('prompt-sync')({ sigint: true });

let num = Math.floor(Math.random()* 100)
let num1 = Number(prompt("Guess a number from 1-50"))
let count = 0

while (num1 !== num && count < 2) {
    if (num1 > num) {
     num1 = Number(prompt("Choose a lower number"))
     }
     else if (num1 < num) {
         num1 = Number(prompt("Choose a higher number"))
     }

    count++
    console.log(count)
}

if (num1 === num){
console.log("Your guess is correct!!")
} 
 else if (count === 2){
 console.log("Reached maximum attempts")
 }