// Map은 콜백함수를 수령해서 배열의 요소당 1번씩 실행한다는점에서 forEach와 비슷하나 큰 차이점은 
// 그 다음 콜백의 반환값을 이용해서 새로운 배열을 생성합니다.
// 이 방법은 배열을 다른 상태로 매핑하는것입니다.
// 원래 배열을 기반으로 만들어지는 새로운 배열입니다.
// 그래서 기존 자체를 변경하지는 않습니다 (비파괴)
// 보통 맵은 데이터의 일부만 가져오거나 두배로 늘린다거나 할떄 필요합니다




const number = [1,2,3,4,5,6,7,8,9,10];

const doubles = number.map(function(num){
   return num * 2 
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
   
  const name =  items.map(function(item){
        return item.name
   })