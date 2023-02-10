 // 이 함수들은 실행을 연기하고, 대기하고, 중단하거나 추후 날짜로 실행을 연기하거나 또는 기본적으로 작업 일정을 정합니다.
 // setTimeout은 자바스크립트에 비동기에 핵심적인 역활을 합니다.

setTimeout(() => {
    console.log("hi")
}, 2000);
 
// 브라우저가 적절한 시간까지 기다렸다가 쓰이는 함수를 호출합니다.

const id = setInterval(()=>{
   console.log(Math.random())
}, 3000)
 
// 해당 함수는 자주 쓰이지는 않지만 어떤 작업을 할떄 인터벌을 두고 사용할떄 사용합니다.
// 해당 함수를 쓰려면 반환값을 저장하기만 하면 됩니다.
// id를 선언하고 입력하면 똑같이 출력이 됩니다.

// 해당 함수를 중단하고 싶으면 

clearInterval(id) // 를 입력하면 중단이 됩니다, 

// 자주 사용하지는 않지만 알아두면 좋습니다~!