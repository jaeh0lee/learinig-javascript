// 함수의 출력값을 학습합니다.
// 값을 저장하고 보관하기 위해서는 반환 키워드가 필요합니다.
// 따라서 반환은 함수를 쓰는데 매우 중요한 부분입니다.
// 반환 키워드가 함수실행을 중단시킵니다.
// return 키워드를 사용하면 하나의 값만 반환됩니다.
 

function hoho(num1, num2){
console.log( num1 + num2);
}   

const sum = hoho(1, 2);

sum
// 출력하면 undefinded가 나옵니다

function hoho(num1, num2){
    let sun = num1 + num2
    return sun;
    console.log("hdk;lqw") // return 뒤에 오는 코드는 절대 반환되지 않습니다.
    }  

hoho(10, 11)


function lavi(x , y ){
    if(typeof x !== 'number' || typeof y !== 'number'){
        return false
    } else {
        let snow = x + y
        return snow
    }
}

lavi("hello", "naem")