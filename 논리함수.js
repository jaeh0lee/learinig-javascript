// 1 . true && ture // true
// 2 . true && false // false 
// 3 . false && false // false

// 둘다 참이야 참이 나옴 

// OR

const passworld = "ㅓㅇㅂ재ㅑㅓ애ㅑㅂ저애ㅑㅓㅂ재ㅑㅓ애ㅑㅂ저애ㅓㅑㅐ"

if(passworld.length >= 6 && passworld.indexOf(' ') === -1){
    console.log("hello");
} else {
    console.log(Error);
}

// AND

// 둘중 하나만 참이면 참 

// 1. true || true  // true
// 2. false || true // true
// 3. false || false  // false


const age = 50;
if(age < 5 || age >= 30){
    console.log("free");
} else if(age < 10 || age >= 100){
    
} else {
    console.log("get out");
}


const number = 20;

if(number >= 30  && number <= 10 || number < 5){
    console.log("thankyou");
} else if(number > 100 && number < 5 || number < 30){
    console.log("good job");
}

// ! NOT 연산자 : NOT을 넣으면 부정이 됩니다.

const jaeho = 45; 
if (!(jaeho >= 0 && jaeho < 5 || jaeho >= 65)){
    console.log("you not baby or a senior");
}