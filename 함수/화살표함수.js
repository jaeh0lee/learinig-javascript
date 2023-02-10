// 화살표 함수는 함수를 정의하는 최신 구문입니다.
// 화살표 함수는 기존의 함수나 함수 표현식보다 더 간결합니다.
// function 이라는 키워드 없이도 함수를 입력할수 있습니다.


const jaeho = (x ,y) =>{
    return x + y
}


const square = x => {
    return x ** x
}
// 매개변수가 하나라면 괄호를 없애도 됩니다.
// 전달될 인수가 하나일때만 가능합니다.

const hihi = () => {
    return Math.floor(Math.random() * 6) + 1
}