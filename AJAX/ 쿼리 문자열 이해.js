// URL에는 다양항 정보를 넣을수 있는데, 각각 다른 엔드 포인트에 따라 의미도 달라집니다.
// :id가 들어가는 경우가 있는데 이 콜론은 변수를 표시하는 방법중 하나입니다.  
// 공식문서에서/:id 패턴을 흔히 볼수 있는데 중괄호나 홀화살괄호를 사용합니다.

// 쿼리문자열은 URL과 물음표 뒤에 온갖 텍스트가 이어져있습니다.
// 키와 쌍을 이루는데 키와 등호 뒤에 값이 따라옵니다. 앰퍼샌드(&)로 구분짓습니다.
// URL과는 다르게 쿼리 문자열로 원하는 내용을 추가할수 있습니다.


 // 쿼리문자열을 설명하는 이유는 많은 API가 사용자에게 쿼리 문자열을 통해 값을 제공하도록 만들어졌기 때문입니다.
 // 보통의 쿼리 문자열은 q=:query 입니다. 


 // 예) ?sort = desc&color = blue
 
 // 예시로 참고할수 있는 https://www.tvmaze.com/api 사이트