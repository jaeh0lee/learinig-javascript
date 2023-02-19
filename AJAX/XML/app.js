// XMLHttpRequest(XHR)은 AJAX 요청을 생성하는 JavaScript API입니다.
// 자바스크립트에서 요청을 보내는 기존방식은 프로미스를 지원하지 않아 수많은 콜백을 받게 되고 설정방식이 복잡해집니다.


// "https://swapi.dev/api/people/1/"

// XMLHttpRequest 생성방법 
const req = new XMLHttpRequest();

// onload는 오류가 없을 경우에 실행됩니다.

req.onload = function() {
    console.log("IT LOADED")
    const data = JSON.parse(this.responseText)
    console.log(data.name, data.height)
}

req.onerror = function() {
    console.log("ERROR")
    const data = JSON.parse(this.responseText)
    console.log(data)
}

// 서버가 준비되면 객체의 open(), send()함수를 이용하여 데이트를 전송합니다.
req.open("GET", "https://swapi.dev/api/people/1/")
req.send()