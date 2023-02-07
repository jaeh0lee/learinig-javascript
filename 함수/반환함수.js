function makeMysterFun(){
    const rand = Math.random();
    if(rand > 0.5 ){
        return function(){
            console.log("CONGRATS, I AM A GOOD FUNCTION~!!")   
            console.log("YOU WIN A MILLION DOLLARS!!")    
        }
        } else {
            return function(){
                alert("YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS")
                alert("YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS")
                alert("YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS")
                alert("YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS")
                alert("YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS")
            }
        }
    }

 makeMysterFun()





// function isBetween(num){
//     return num >= 50 && num <= 100
// }

// function isBetween2(num){
//     return num >= 1 && num <= 10
// }

//팩토리 함수 

function makeBetweenNumber(min, max){
    return function(num){
   return num >= min && num <= max;
}

}
