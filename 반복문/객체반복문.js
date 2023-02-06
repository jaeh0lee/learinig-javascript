// 객체를 반복시키고 싶을때는 for in문을 사용합니다.
// 또한 Object.keys()를 사용하여 객체를 전달하면 배열이 나옵니다.



const score = {
    kim : 10,
    park : 20,
    Lee : 40,
    nadia : 100,
    Son : 1000
}

// for(let obj in score){
//     console.log(`${obj} : ${score[obj]}`);
// }

let total = 0;
let str = Object.values(score)

for(let num of str){
    total += num
}
console.log(total / str.length);