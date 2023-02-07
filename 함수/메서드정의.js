 // 메서드는 객체에 종속된 특성으로 함수에 포함되는 개념입니다.
 // 메서드 이름앞에 점을 찍어서 사용합니다 
 // 모든 메서드는 함수이지만 모든 함수가 메서드인건 아닙니다. 
 // 함수 메서드는 객체에 속성으로 추가된 함수를 뜻합니다.
 


 const myMath = {
    PI : 3.14,
    square : function(num){
        return num * num
    },
    cube : function (nun) {
        return num ** 3
    }
 } 


// 함수 메서드 단축


const myMath1 = {
    PI : 3.14,
    square(num){
        return num * num
    },
    cube(num) {
        return num ** 3
    }
 } 

 myMath1.square(50)