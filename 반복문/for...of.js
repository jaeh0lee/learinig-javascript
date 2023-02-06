// for of 란 자바스크립트 ES6부터 도입된 새로운 개념입니다.
// 배열을 반복시켜야할떄 인덱스는 필요 없어서 신경쓰지 않는 경우에 for of문을 사용하면 좋다.

// const sub = ["sad", "book","name", "hoho"]
// for of 문은 배열이랑 가장 많이 사용되며 문자열처럼 자바스크립트에서 반복 가능한 객체로 인식되는것에도 사용이 가능합니다.

// for(let str of sub ) {
//     console.log(str);
// }


const sweet = [
    ["jaeoh", "nakyong", "fifi"],
    ["happy", "fuck", "grid"],
    ["lion", "tiger", "bear"]
]


for(let row of sweet){
    for(stx of row){
        console.log(stx);
    }
}

for(let char of "hello"){
    console.log(char);
}



const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // 두배의 값을 출력하게 만들기

for(let num of number){
    console.log(num * num) 
}