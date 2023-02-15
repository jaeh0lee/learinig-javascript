 // 자바스크립트는 단일스레드로 동시에 두가지 일을 할수 없습니다, 최대 한번에 한줄의 코드만 실행 가능합니다.

console.log("hello jaeho");
setTimeout(()=>{
    console.log('hoho server')
}, 3000)
console.log("The end?");

/*
결과값 
hello jaeho
undefined
hoho server

setTimeout 이 제일 마지막에 출력되는걸 볼수 있다 
자바스크립트가 단일스레드라면 모두 멈추고 3초간 기다려야 하지만 그렇지 않습니다 
자바스립트 포함 브라우저도 작업을 하고 있기 떄문입니다.
어떤 브라우저든 간에 해당 브라우저 엔진이 자바스크립트가 아니라 c++ 같은 언어로 개발되어 있기때문에 
자바스크립트가 할수 없는것들을 할수 있는것입니다.
*/