// this 키워드를 사용하면 화살표 함수는 다르게 동작합니다.
// 일반 함수를 사용했을때와 다르게 동작을 합니다.

// 일반함수 
// const person = {
//     firstName : "jaeho",
//     lastName: "Lee",
//     fullName : function(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// person.fullName()

const person = {
    firstName : "jaeho",
    lastName: "Lee",
    fullName : () => {
        return `${this.firstName} ${this.lastName}`
    }
}

person.fullName()