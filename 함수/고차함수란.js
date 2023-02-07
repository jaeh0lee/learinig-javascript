// 고차함수란 다른 함수와 함께 작동하거나 또는 다른 함수에서 작동하는 함수를 고급스러운 말로 표현한것이다.
// 다른 함수를 인수로 받아서 보통 그 인수로 어떤 작업을 하는 함수이자 함수를 반환할수 있는 함수 입니다.


// 익명 함수 
let greet = function(){
    console.log("hi".toUpperCase())
}

// 함수를 변수에 저장하 였으니 함수를 인수로 전달할수도 있습니다.

// 고차함수 

function callTwice(func){
 func();
 func();
}

callTwice(greet())

// 결과값으로 greet안에 선언되어있던 HI가 2번 실행됩니다.
// 여기서 주의점은 callTwice() 인수안에 greet()를 파라미터로 넘겨줄떄 소괄호를 입력해서 실행하면 안된다는점입니다.


// 다른 예시 

function rollDie(){
    const roll = Math.floor(Math.random() * 6) + 1
    console.log(roll)
}

function callDice(fuc){
    for(let i = 0; i < 10; i++){
        fuc()
    }
}

callDice(rollDie);