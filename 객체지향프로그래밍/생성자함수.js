 // 대문자가 포함되어있는 함수는 일반함수가 아니라는걸 나타냅니다.
 // 대신에 객체를 만들게 해주는 함수를 뜻합니다.

// 이렇게 되면 prototype을 이용해서 메서드를 추가할수 있습니다.
 function Color(r,g,b) {
    this.r = r;
    this.g = g;
    this.b = b;
    console.log(this)

    }


 // 해당 함수를 호풀할때 호출을 하기전 new 연산자로 호출을 하게 되면 다르게 행동합니다.
 // new 연산자를 이용해 새로운 객체를 생성해서 this를 그 새 객체에 설정합니나.
 // 해당 패턴을 기반으로 새로운 객체를 반환합니다.

 Color.prototype.rgb = function(){
    const {r,g,b} = this
    return `rgb${r}, ${g}, ${b}`
 };

 Color.prototype.hex = function(){
    const {r,g,b} = this
   return  ('#' +((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1))
 };

 Color.prototype.rgba = function(){
    const {r,g,b} = this
    return 
 }
 // > 생성자 함수를 사용할떄 화살표 함수를 사용하는걸 주의해야합니다 화살표 함수로 만든 this는 상위 스코프를 참조하므로 window객체를 참조합니다.


// 메서드 r,g,b가 자기자신인 실제 객체에서 정의된게 아니라 프로토타입에서 정의되었습니다.
// 하지만 고유의 복사본이 생긴게 아니라서 배열이나 문자열처럼 프로토타입 객체에서 엑세스 할수 있습니다.
const const1 = new Color(25,30,11)
const const2 = new Color(23,10,21)