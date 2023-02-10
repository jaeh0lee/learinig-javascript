// this 키워드를 사용하면 화살표 함수는 다르게 동작합니다.
// 일반 함수를 사용했을때와 다르게 동작을 합니다.

// 일반함수 

const person = {
    firstName : "jaeho",
    lastName: "Lee",
    fullName : function(){
        return `${this.firstName} ${this.lastName}`
    }
}

// person.fullName()

// 화살표 함수 
const person1 = {
    firstName : "jaeho",
    lastName: "Lee",
    fullName : () => {
        return `${this.firstName} ${this.lastName}`
    }
}

person.fullName() // undefined undefined

// ---

const person3 = {
    name: "bohyeon",
    greet: () => console.log(`hi ${this.name}`)
  };
  person.greet(); // hi

  /*
  바깥 스코프에서 this 의 값을 계승받습니다. 
  즉 this 는 메소드를 호출한 객체를 가리키지 않고 상위 컨텍스트인 전역 객체, window 를 가리키게 됩니다.
   */ 


// 화살표 함수 안에 있는 this 키워드는 함수가 만든 범위에 상속되는 this 키워드 값과 같다.
// 간단하게 화살표 함수에서 this는 자신을 호출한 객체 person이 아니라 함수선언시점의 상위 스코프인 전역객체를 가르키게 됩니다.
// 화살표 함수로 this 키워드를 사용하면 상위 스코프를 바라보게 된다(전역 window)


const account = {
    username: "bohyeon",
    balance: 10000,
    getBalance: function() {
      //화살표 함수 사용
      //화살표 함수는 return 하지 않아도 값이 반환됩니다.
      innerFunc = () => `${this.username}님의 잔액은 ${this.balance}입니다.`;
      console.log(innerFunc());
    }
  };
  account.getBalance(); //bohyeon님의 잔액은 10000입니다.

  // getBalance 함수안에서 화살표 함수를 사용하편 바깥 스코프 this의 값을 계승받는다.
  // 객체의 메소드로는 화살표 함수보다 function 문법 함수를 사용해야 한다는 것만 유의한다면, 화살표 함수를 사용하여 좀 더   직관적이고 편리하게 this 를 사용할 수 있습니다.



 