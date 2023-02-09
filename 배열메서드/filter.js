// filter는 요소로 구성된 배열에서 필터링을 하거나 부분집합을 모아 새 배열을 만드는데 사용됩니다.
// filter 메서드도 원본은 훼손하지는 않습니다.
// 따라서 filter는 평점이 가장 높은 아이템이나 오래된 아이템, 새로운 아이템등을 필터링 할때 좋습니다.
// 함수를 전달해서 참이나 거짓을 반환하고 지정된 요소에 대해 참이 필터링 되어서 만들어진 새 배열에 추가됩니다 
// filter라는 단어가 원본에 영향을 줄것 같지만 비파괴라 원본 훼손을 하지는 않습니다.


const nums = [9,8,7,6,5,4,3,2,1]

const odds = nums.filter(n => {
    return n % 2 === 1;
})


nums.filter(n => {
    return n < 10
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
   

  const gooditems = items.filter(item => item.year > 30)
  const goodName = items.filter(item => item.year >20).map(item => item.name)


