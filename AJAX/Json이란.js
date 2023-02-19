// Json이란 API가 주로 데이터를 전송할떄 쓰는 비밀스러운 포맷으로 정보자체인 데이터만을 제공하기 위해 존재합니다.
// 초기에 유명했던 포맷은 XML로 확장성이 있는 마크업 언어를 뜻하며 현재는 흔히 사용하지 않습니다.
// Json은 자바스크립트 객체 문법을 뜻하는데 Json은 계속해서 데이터를 전송하거나 정보를 전송하는 포맷일뿐 입니다.
// 사용자끼리 전송하거나 API에서 브라우저로 전송할수 있습니다. 일관적으로 예측할수 있는 데이터를 포맷팅 합니다.
// 언어마다 JSON을 파싱하는 방법이 있습니다, 고유의 언어 코드로 변환합니다.
// 자바스립트로 변환하는건 어렵지 않으며 자바스립트 내장된 메서드가 있습니다.
// JSON은 파싱할때는  JSON.parse 라는 메서드가 존재합니다.
// 자바스크립트 객체인 정보를 JSON으로 변환할경우에 사용하는 메서드도 있습니다 JSON.stringify 입니다.
// 

const data =`
{
    "ticker": {
      "base": "BTC",
      "target": "USD",
      "price": "24775.87776109",
      "volume": "13430.11446703",
      "change": "8.59047892"
    },
    "timestamp": 1676522045,
    "success": true,
    "error": ""
  }
`

const parsedDate = JSON.parse(data) // JSON을 파싱할떄 사용하는 메서드.
