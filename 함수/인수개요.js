\// 매개변수로 function이나 if, let 같은건 안됩니다.
// 함수의 전달한 인수의 값이 매개변수에 저장이 됩니다.


function greet(firstName){
    console.log(`i am ${firstName}`)
}

greet("jaeho")

// greet의 인수로 전달되면 매개변수인 firstName에 저장되어 함수에 접근할수 있게 됩니다.
// 주어져야 할 인수가 전달되지 않으면 undefined를 기본값으로 갖습니다.


//정리 : 인수는 함수를 실행할때 괄호안에 전달하는것이고 매개변수는 일종의 플레이스 홀더로서 함수 정의할떄 용도에 따라 정해줄수 있습니다.