// 클래스나 생성자 함수를 사용할때는 함수명 처음을 대문자로 표기합니다.
// 언제나 constructor를 추가합니다.
// 이것은 새로운 색상이 만들어질때마다 즉시 실행되는 함수입니다.
// constructor는 색상의 새로운 인스턴스를 인스턴스화 할때마다 클래스가 무엇이든간에 즉시 실행됩니다.
// 그리고 constructor에서는 일반적으로 this를 엑세스 합니다.
// 클래스 안에 있는 this는 항상 클래스의 인스턴스와 개별 색상 객체를 참조합니다.
// new 키워드는 쓰면 this는 개별 객체를 참조합니다. 
class Color{
    constructor(r,g,b,name){
       this.r = r
       this.g = g
       this.b = b
       this.name = name
       
       // this가 자동으로 새로운 객체를 참조합니다.
    }
    innerRGB(){
        const {r,g,b} = this
        return `${r}, ${g}, ${b}`
    }
    rgb(){
        return `rgb(${this.innerRGB}())`
    }
    
    rgba(a = 1.0){
        return `${this.innerRGB()}, ${a}`
    }
    // 모든 색상의 메서드가 됩니다, 이건 인스턴스는 아닙니다.

  
}

const h1 = new Color(23,4,42, "ho")
h1.greet()



