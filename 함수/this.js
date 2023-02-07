// 메서드에 있는 객체를 가리킬때 this 키워드를 사용합니다.
// 객체에 여러가지 특성이 있거나 정보와 메서드가 다양하고 여러 기능이 있을때 사용합니다.
// this 키워드는 name이라는 객체를 가르키고 있습니다.
// 그렇지만 항상 그렇진 않습니다, this 값이 바뀔수 있기 때문입니다 다시말해 사용된 함수의 호출 컨텍스트에 따라 값이 달라집니다.
// 간단하게 말하면 함수를 호출하는 방법에 달려있다는것입니다.
// 

const cat = {
    name : "Blue steele",
    color : 'grey',
    breed : 'scottish fold',
    meow(){
        console.log(this)
        console.log(`${this.name} says MeoWWW`) 
    }
}


const cat2 = cat.meow; // 다른 방식으로 호출되어서 momo2()를 호출하여도 객체를 가르키지 않습니다.

// 왜냐면 momo2는 window를 가르키고 있기 때문입니다.