let ball = 10;
if(ball > 0){
    const PI = 3.14159;
    let msg = "HIII!"
}

console.log(ball)
console.log(PI) // 블록범위에 있기 때문에 외부에서 선언을 할수 없습니다, 블록은 함수를 제외하고는 기본적으로 이 중괄호가 있는 모든곳을 가리킵니다.


for(let i =0; i < 5; i++){
 var msg = "lkwdjqlwkjdl"
}

console.log(msg)


// var 키워드를 사용ㄹ하면 변수의 범위가 함수로 지정되지만 블록으로 지정되지는 않습니다.,
// 하지만 let 이나 const를 사용하면 변수의 범위가 블록으로 지정됩니다.
// 이렇게 범위가 블록으로 지정되는 변수들 즉 이런 유효 범위 규칙을 따르는 변수들을 추가하기 위해서입니다.
// 


var bird = "jaeho"

function birdWatct(){
    var bird = "hoho"
    bird;
}

console.log(bird)
birdWatct()
console.log(bird)

// 전역변수를 둘다 참조합니다.