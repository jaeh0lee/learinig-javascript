// extend와 super 키워드는 하위 클래스를 만드는것, 특히 상속과 관련이 있습니다 또한 클래스간의 기능을 공유하는 방법에 해당합니다.
// 

class Pet {
    constructor(name , age){
        this.name = name
        this.age = age
    }
    eat(){
        const {name} =  this
        return `${name} is eating`
    }
    
}

// Pet에서 extends를 이용하여 확장시켜 Pet 생성자를 사용했다.
// super 는 우리가 확장을 시킨 바로 그 클래스를 참조하게 됩니다.
class Cat extends Pet {
    constructor(name, age, liveLeft = 9){
        super(name, age)
        this.liveLeft = liveLeft
    }
    meow(){
        return "hohoho"
    }

}

const hammor = new Cat("hammor", 3)

class Dog  extends Pet {
    bark(){
        return "taatatata"
    }
    eat(){
        const {name} = this
        `${name} is fuck`
        // eat 메서드를 여기서도 생성하면 이 메서드가 실행됩니다 
        // 만약 eat 메서드가 여기에 없다면 Pet의 메서드가 실행됩니다.
    }
    
}