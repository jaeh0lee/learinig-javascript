// function sum(){
//     console.log(arguments)
// }

function sumAll(nums){
    let total = 0;
    for(let i=0; i < nums.length; i++){
        total += nums[i]
    }
    return total
}

sumAll(10, 20, 30, 40)


// arguments 객체는 모든 인수를 자동으로 모아줍니다.
// arguments 객체는 배열이 아닙니다.
 

function sum(...nums){ 
    return nums.reduce((a, c) => a + c)
  }

sum(1,2,3,4,5)

// 매개변수에 ...을 붙이는걸 나머지 매개변수라고 부릅니다 나머지 값들을 모두 모아줍니다.
// 나머지 매개변수를 사용하면 배열이 됩니다.


function raceResults(gold, silver, ...everyoneElse){
    console.log(`gold medal ${gold}`)
    console.log(`silver medal ${silver}`)
    console.log(`thanks everyon ${everyoneElse}`)
}