// 객체에 있는 특성을 복사해서 새로운 객체를 만드는것입니다.
// 객체 여러개를 한 객첼 묶을수 있으며 객체를 복사하고 수정할수도 있습니다.
// 객체를 복사하는이유는 라이브러리나 React 도구로 작업할때 이다.
// 


const jaeho = {legs : 4, family : "felidae"};
const hoho = {legs : 2, family : "kwon"}
const person = {...jaeho, ...hoho} // 2개의 객체를 묶을수 있습니다.
// 하지만 이러면 충돌이 생깁니다 두 객체는 모두 생물 분류 특성이 있고 순서가 중요합니다
// 

// 전개구문 
// {...jaeho}
// {...jaeho, color : "black"} // {legs : 4, family : "felidae", color : black};


// {...[2,4,6,8]} // 이렇게 되면 인덱스가 키고 배열안의 요소가 값이다.


const dataFromForm = {
    email : "woghfghf@naver.com",
    password : "123123",
    username : "hoho"
}

const result = {...dataFromForm, id : 2345, isAdmin : false}

// 객체를 복사해서 새로운 내용을 원본을 훼손하지 않고 내용을 추가하거나 수정할수 있습니다.
// 모든 배열, 함수, 객체는 정보의 소스를 펼쳐서 다른 용도로 만드는것이다.