// 콜스택이란 자바스크립트 해석기가 사용하는 메커니즘으로 여러 함수를 호출하는 스크립트에서 해당 위치를 추적합니다.
// 자바스크립트가 위치를 알수있고 책속의 손가락 같은겁니다.
// 스택은 컴퓨터 과학의 기본 데이터 구조로 후입선출 데이터 구조로 알려져 있습니다.
// 콜스택은 자바스크립트가 사용하는 메커니즘으로 여러 함수를 호출하는 스크립트에서 해당 위치를 추적합니다.

function multiply (x, y) {
    return  x * y;   
}
function square (x) {
  return multiply(x, x);  
} 
function isRightTriangle (a,b,c) {
    return square(a) + square(b)  === square(c);
}

isRightTriangle(3, 4, 5);