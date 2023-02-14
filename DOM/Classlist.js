// DOM 요소에는 classList라는 특정한 특성이 있습니다, 
// 글자 그대로의 기능을 하며 요소의 클래스를 제어하고 또 클래스를 검색하며 조작도 하기 위해 호출하는 객체입니다
// 요소의 현재 클래스를 적용하는 손쉬운 방법, 클래스 조작 , 토글 제거및 추가하는 작업을 할수 있으며 
// getAttribute 보다 사용하기 쉽습니다.

// const h2 = document.querySelector('h2')
// h2.classList.add('purple')
// 클래스를 추가할수도 있고 remove로 지울수도 있습니다.

// 또한 classList에는 contains라는 메서드가 있는데 해당 클래스의 여부를 확인해볼수 있습니다.
// toggle이라는 메서드를 주로 사용하는데 켜졌을때와 꺼졌을때, 즉 클래스가 있을때와 없을떄를 오갈수 있습니다.
// 토글 메서드는 많은 클래스가 있고 특정 스타일이 토글되는 인터페이스가 있는 경우에 유용합니다.
// 버튼, 체크리스트 ,할일 목록등 아이템이 체크 헤제되거나 다시 클릭하면 돌아오는경우가 있습니다.