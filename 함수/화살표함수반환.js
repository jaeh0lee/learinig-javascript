// 화살표 함수를 사용하면 특정 상황에서 return 키워드를 뺄수 있습니다.
// 화살표 함수 중괄호를 소괄호로 바꾸면 화살표 함수를 포함한 새로운 구문이 암시적 반환을 만듭니다.
// 암시적 반환에서 중요한건 함수의 바디에 표현식이 딱 하나만 있어야 한다는것이다.
// 암시적 반환은 깔끔한 표현식이 단 하나있을떄 사용하면 좋다. 


const rollDie = () => (
    Math.floor(Math.random() * 6) + 1
)

// 암시적 반환을 사용해서 한줄로도 만들수 있습니다.
// 짧은 코드를 사용할때 보기 좋습니다.
const add = (x,y) => x + y


// 일반적인 함수 
const isEven = function(num){
    return num % 2 === 0;
}

// 화살표 함수 
const isEven2 = (num) => {
    return  num % 2 === 0;
}

//파라미터가 한개인 화살표 함수 

const isEven3 = num =>{
    return num % 2 === 0;
}

// 암시적 화살표 함수를 사용한 return 없애기 
const isEven4 = num => (
    num % 2 === 0
);

// 암시적 화살표 함수를 이용한 한줄로 만들기 

const isEven5 = num => num % 2 === 0;