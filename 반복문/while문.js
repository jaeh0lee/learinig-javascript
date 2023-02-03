// while문은 구문 하나와 괄호안에 조건문이 있습니다. 
// 어떤 조건문이 오더라도 참이라고 판별되면 계쏙해서 반복합니다.
// 반대로 거짓이라고 판별되면 반복을 돌지 않습니다. 
// while문을 많이 사용하지는 않는다.
// 반복 횟수가 정해져 있지 않을때 while이 더 유용할수 있습니다.

let num = 0
while(num < 10){
   num++
   console.log(num);
}


const secretCode = "I LOVE YOU"
let guess = prompt("enter the secret code...")

while(secretCode !== guess){
   guess =  prompt("enter the secret code...")
}
console.log("good!");