// ID와 태그 이름 또는 요소타입으로 선택을 하거나 클래스 이름으로도 선택 가능하지만 더 좋은 방법이 있다. 
// 그게 바로 querySelector & querySelectorAll 이다 DOM에 최근에 추가된 메서드이다 
// querySelector 라는 하나의 메서드를 사용해서 ID, 클래스이름, 요소타입, 속성, css 스타일이든지  원하는 선택자를 무엇이든 이용해서 선택할수 있습니다.

// document.querySelector('선택자')
// querySelector 는 p라는 요소가 웹페이지에 2개 있다면 첫번째로 일치하는 값을 줍니다.
// ID는 document.querySelector('#ID') 처럼 CSS를 이용할때처럼 작성하면 ID를 선택할수 있습니다.
// class는 document.querySelector('.클래스') 이처러 입력하면 됩니다.


// querySelectorAll
// querySelectorAll은 일치하는 모든 요소를 반환합니다.