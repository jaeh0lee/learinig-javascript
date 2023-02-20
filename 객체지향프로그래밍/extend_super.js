// extend와 super 키워드는 하위 클래스를 만드는것, 특히 상속과 관련이 있습니다 또한 클래스간의 기능을 공유하는 방법에 해당합니다.
// 

class Cat {
    constructor(name , age){
        this.name = name
        this.age = age
    }
    eat(){
        const {name} =  this
        return `${name} is eating`
    }
}

const hammor = new Cat("hammor", 3)
