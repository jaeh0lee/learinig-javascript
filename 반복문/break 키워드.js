
let input = prompt("hey, say something")

while(true){
   input =  prompt(input)
   if(input === "stop"){
    break
   }
}

console.log(("you wind"));

for(let i = 0; i < 1000; i++){
    console.log(i);
    if(i=== 100){
        break;
    }
}
console.log("is many number");