// concat은 배열을 합치되 기존의 배열을 수정하지는 않습니다.

let cats = ["black", "kitty"]
let dogs = ["rusty", "wyatt"]

const animal = cats.concat(dogs)

console.log(animal);

// includes는 불리언 메서드로 true나 false로 응답합니다.
// 쉽게말해 배열에 특정 값이 포함되어 있는지 알려주는것입니다

let human = ["leg", "arm"]

human.includes("leg") // true

// 여기서 indexOf 는 배열의 indexOf입니다

animal.indexOf("black") // 0

// revese는 배열을 뒤집어 줍니다. 원본을 바꾸며 파괴 메서드로 알려져 있습니다.

human.reverse() // ["arm", "leg"];