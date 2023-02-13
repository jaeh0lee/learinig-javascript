const h1 = document.querySelector('h1')
h1.style


// h1.style을 살펴보면 엄청나게 많은 객체가 있는것을 볼수 있습니다.
// style 객체는 스스로 스타일 시트를 정의해주지 않는 한 현재의 스타일이 나타나지 않습니다.
// style 객체는 카멜케이스로 되어 있으며 -(대쉬) 표현이 없습니다.

// getComputedStyle이란 인자로 전달받은 요소의 모든 CSS 속성값을 담은 객체를 회신합니다.
// 자바스크립트로 알아낼수 있는 항목이며 , 어떤 항목의 크기나 스타일을 알아내서 추가작업을 할수 있습니다.
// querySelector 나 getElementById같은 선택자는 아니며 DOM에 있는 실제 요소 객체에 해당됩니다 