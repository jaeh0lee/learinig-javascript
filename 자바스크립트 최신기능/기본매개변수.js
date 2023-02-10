// function rollDie(numside){
//     if(numside === undefined){
//         numside = 6
//     }
//      return Math.floor(Math.random() * numside) + 1
// }

// 기본값을 부여하는것입니다.

function rollDie(numside = 6){
    return Math.floor(Math.random() * numside ) + 1
}

rollDie(20)

function multiply(a , b = 1){
    return a * b;
}

multiply(4)

function greet(person, msg = "hey there"){
    return `${msg}, ${person}`
}

