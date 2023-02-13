// removeChild
// 부모와 자식 관계에 따라 요소를 제거 하고 
const fistLi = document.querySelector('li')
const ul = fistLi.parentElement
ul.removeChild(fistLi)

// remove는 실제 remove를 호출하는 요소를 제거 합니다.
const img = document.querySelector('img')
img.remove()