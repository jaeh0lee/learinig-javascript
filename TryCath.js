// try cath는 자바스크립트의 오류 및 예외를 처리합니다.
// 때론 코드의 오류가 발생하여 그 오류가 외부로 퍼져나가 모든것을 망쳐버리는 경우가 있습니다
// 그래서 망치기전에 해당 오류를 잡아 멈춰야 합니다.
// 예외처리를 하는것은 중요합니다 비동기 함수를 요청할때 try catch를 사용하는것은 정말 중요하며
// 코드에는 예상밖의 일이 수없이 생기기 떄문에 그게 api - 인터넷으로 연결됩니다. 
// 인터넷이 다운되거나 API 요청이 사라질수도 있습니다.
// try 중괄호 안에서 오류가 발생하면 그게 무엇이든 catch로 잡아내서 원하는대로 처리가 가능합니다.

try {
  hello.toUpperCase();
} catch {
 console.log("ERROR")
}

//해당 코드는 에러를 발생시키는 코드 입니다 따라서 try안에 코드를 작성하고 만약 이 코드가 문제가 있다면 
//에러를 출력한뒤 코드가 중단되지 않고 다음 코드를 실행시킵니다.


console.log("hello")1


// 다른 예시

function yell(msg){
    try {
        console.log(msg.toUpperCase().repeat(3))
    } catch (e){
        console.log(e)
        console.log("Please pass a string next time")
    }
}