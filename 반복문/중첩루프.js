// 중첩 반복문이란 for문 바디안에 다른 for문을 넣는것입니다.


// for(let i =0; i < 10; i++){
//     console.log(`i is ${i}`);
//     for(let j = 0; j < 4; j++){
//         console.log(`j is ${j}`);
//     }
// }

// const seatingChart = [
//     ['Kristen', 'Erik', "Namita"],
//     ['Geoffrey', "jaeho", "hoho", "fuck"],
//     ["hello", "my", "name", "jaeho"]
// ]

// for(let i =0; i < seatingChart.length; i++){
//    const row =  seatingChart[i]
//    console.log(`row is : ${i + 1}`);
//    for(let j=0; j < row.length; j++){
//     console.log(row[j]);
//    }
// }


const sweet = [
    ["jaeoh", "nakyong", "fifi"],
    ["happy", "fuck", "grid"],
    ["lion", "tiger", "bear"]
]

for(let i =0; i< sweet.length; i++){
    console.log(i);
    const small = sweet[i]
    for(let j = 0; j < small.length; j++){
        console.log(`hello ~ ${small[j]}`);
    }
}