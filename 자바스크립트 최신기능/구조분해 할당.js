
// 배열 구조분해 할당 

const scores = [41214, 1232, 4124, 51252, 51251, 55125125];

const [a, b, ...c] = scores;  

// 객체 구조분해 할당 
// 이주 많이 사용되는 방법이며 순서를 따르지 않기 떄문에 배열 구조 분해보다 실용적입니다.

const user = {
    email : "woghfhgf@naver.com",
    password : 123123,
    firstName : "Lee",
    lastName : "jaeho",
    born : 1996,
    died : "no die", 
    city : "gyunggi-do",
    state : "yangju-si"
}

const {email, password, died} = user

// 객체에서 구조분해할당을 해서 값을 꺼내올뿐만 아니라 새 이름도 지을수 있습니다.
// 새 변수 이름을 짓기 위해서는 기존 변수 뒤에 콜론(:)을 집어넣습니다.
const {born : birthYear} = user;


const user2 = {
    email : "likelion@naver.com",
    firstName : "kwon",
    lastName : "nakyoung",
    born : 1996,
    city : "Goyang",
    state : "mado-dong"
}

// user2에는 died2라는 프로퍼티가 없습니다 
// 따라서 died2라는 변수에 기본값을 지정해주는것입니다.
const {city : birthYear2 , state,  died2 : deathYear = "N/A"} = user2


// 매개변수 구조분해 
// 함수를 정의할떄 괄호안에 매개변수를 작성하면 전달되는 값의 구조를 분해할수 있습니다.
// 객체에 주로 사용되는 방법입니다.


// function fullName(user){
//     return `${user.firstName} ${user.lastName}`
// }

// function fullName(user){
//     const {firstName, lastName} = user
//     `${user.firstName} ${user.lastName}`
// } 

// 매개변수 구조분해 할당
function fullName({firstName , lastName}){
    return `${firstName} ${lastName}`
} 

 

const items = [
    {
       name : "box",
       price : 50
    }, 
    {
       name : "toy",
       price : 110
    }, 
   
    {
       name : "phone",
       price : 30
    }, 
   
    {
       name : "cup",
       price : 20
    }, 
   
   ]

// items.filter((item) => item.price >= 10) 
items.filter(({price})=>  price >= 10)

items.map(({name, price})=>{
    return `${name} ${price}`
})

