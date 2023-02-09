// Reduce 가 주로 하는일은 배열을 가져다가 점차 줄여가면서 마지막에는 결국 하나의 값만 남기는것이다.
// Reduce는 자동적으로 배열 안에 있는 모든 요소를 처리하거나 하진 않는다.
// 재밌는 예시를 들자면 많은 액체들을 가져다가 섞어서 맨 마지막에는 결국 한 방울만 나오는것입니다.


[3,5,7,9,11].reduce((accumulator, currentValue)=> {
    return accumulator + currentValue
})

// 첫번쨰 매개변수 accumulator 는 총 합계를 나타내며 기본적으로 줄여나가야 하는 바로 그 대상입니다.
// currentValue 는 각각의 개별 요소를 나타냅니다.


// for of 를 통한 배열 총 합게
const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

let total = 0;
for(let price of prices){
    total += price
}

console.log(total)


// Reduce를 이용한 배열 총 합계

const hoho = prices.reduce((a, c)=>{
    return a + c
}) 

const hoho1 = prices.reduce((total, price) => total * price) 

// 또한 배열내에서 최대값을 찾거나 또는 최소값을 찾는 코드를 사용할수도 있습니다.

const minPrice = prices.reduce((min, price) => {
    if(price < min){
        return price;
    }
    return min;
})

const items = [
    {
       name : "box",
       price : 20,
       year : 100,
    }, 
    {
       name : "toy",
       price : 30,
       year : 50,
    }, 
   
    {
       name : "phone",
       price : 20,
       year : 90,
    }, 
   
    {
       name : "cup",
       price : 20,
       year : 20,
    }, 
   
   ]
   
   const susu = items.reduce((a, c )=>{
    if(a.year < c.year){
        return a
    } else {
        return c
    }
   })

   const hobak = prices.reduce((a,c)=>{
        if( a > c) {
            return a 
        } else {
            return c
        }
   })

// accumulator 의 초깃값도 설정해줄수 있습니다.
// reduce의 두번쨰 인수에 추가하는것인데 아래와 같이 100이라는 두번쨰 인수로 시작하면 초깃값은 100부터 시작하므로
// 결과값은 100 + 2 => 102 + 8 => 110 + 12 => 122 + 24 => 144

const jaeho = [2, 8, 12, 20];

const hihi = jaeho.reduce((a, b)=>{
  return a + b
}, 100)


const arr = [1,2,3,4,5]

let total1 = arr.reduce((a, c)=>{
    if(a > c ){
        return a 
    }  
    return c
})