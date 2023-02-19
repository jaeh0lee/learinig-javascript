// 함수를 인수로 받아들이는 forEach 입니다.
// forEachsms for of 반복문이 등장하기 전에는 훨씬 자주 사용되었습니다.
// forEach는 배열안의 아이템 각각에 대해 함수와 코드를 한번씩 실행합니다
// 그래서 어떤  함수를 넣든 상관없이 함수가 아이템별로 한번씩 호출되고 각각의 아이템이 함수에 자동으로 전달됩니다.
// forEach를 사용해서 이미 정의한 함수를 전달하는건 일반적이지 않습니다.


const numbers = [1,2,3,4,5,6,7,8,9,10]

numbers.forEach(function(el){
    if(el % 2 === 0){
        console.log(el)
    }
})


const items = [
 {
    name : "box",
    price : 20
 }, 
 {
    name : "toy",
    price : 20
 }, 

 {
    name : "phone",
    price : 20
 }, 

 {
    name : "cup",
    price : 20
 }, 

]

items.forEach(function(item){
    console.log(`${item.name}`)
})



// for(let el of numbers){
//     console.log(el)
// }