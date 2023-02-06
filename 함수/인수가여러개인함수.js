
function greet(firstName, lastName){
    console.log(`Hey thre, ${firstName} + ${lastName[0]}`)
}

greet("jaeho", "hoho")


function repeat(str, numTimes){
    let result = '';
    for(let i = 0; i < numTimes; i++){
      result += str
    }
    console.log(result)
}

repeat("jaeho", 3)


function jaeho(str, num){
    let result = ''
    for(let i = 0; i < num; i++){
      result += str
    }
    console.log(result)
}

jaeho("fuck", 100)


function hello(str, num){
    for(let i = 0; i < num; i++){
        console.log("hihi")
    }
}
hello("jaeho", 3)