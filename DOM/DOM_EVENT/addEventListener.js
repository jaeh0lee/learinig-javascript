// addEventListener는 제네릭 메스너로 감지하고 싶은 어떤 이벤트든 전달할수 있습니다.
// 해당 메서드를 사용하면 이벤트를 호출할때 보다 더 유연성이 발휘됩니다.

  
const btn3 = document.querySelector('#v3')

btn3.addEventListener('click', () => {
    console.log("hlloe")
})

// 첫번쨰 인수에는 발생시킬 이벤트를 작성하고 두번째 인수에는 클릭후 호출될 함수를 작성합니다.
// addEventListener 3번쨰 인수에는 once라고 있는데 {once:true}라고 입력하면 해당 이벤트는 한번만 호출하고 사라져버린다
// once는 자주 사용되지는 않는다.