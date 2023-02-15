// promise는 어떤연산, 비동기 연산이 최종적으로 완료 혹은 성공했는지 실패했는지를 알려주는 객체입니다.
// promise는 값이나 오류에 대한 최종 약속입니다.
// 주로 요청을 보내 다른 위치에서 데이터를 받을때 사용합니다,  
// promise에서의 상태는 세가지 입니다.
// 처음 보았던 pending은 무언가를 기다리는 상태입니다.
// promise는 비동기적 값이 최종적으로 resolved(성공)인지 rejected일지 알려줍니다.
// promise는 resolved 또는 rejected일떄 특정 코드를 실행합니다.

// 함수안에 콜백을 전달하는게 아니라 프로미스 객체 자체에 콜백을 첨부하면 됩니다.
// 그리고 함수가 promise 객체를 반환하기를 기다리면 됩니다.


// const fakeRequestPromise = (url) => {
//     return new Promise((resolve, reject) => {
//         const delay = Math.floor(Math.random() * (4500)) + 500;
//         setTimeout(() => {
//             if (delay > 4000) {
//                 reject('Connection Timeout :(')
//             } else {
//                 resolve(`Here is your fake data from ${url}`)
//             }
//         }, delay)
//     })
// }



// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then((data) => {
//         console.log("IT WORKED!!!!!! (page1)")
//         console.log(data)
//         return fakeRequestPromise('yelp.com/api/coffee/page2')
//     })
//     .then((data) => {
//         console.log("IT WORKED!!!!!! (page2)")
//         console.log(data)
//         return fakeRequestPromise('yelp.com/api/coffee/page3')
//     })
//     .then((data) => {
//         console.log("IT WORKED!!!!!! (page3)")
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log("OH NO, A REQUEST FAILED!!!")
//         console.log(err)
//     })



// promise 함수를 만드는법
// 매개변수안에는 또 다른 함수가 들어가는데 이 함수안에는 2개의 매개변수가 들어갑니다, resolve reject
// 함수안에 어느지점에서 resolve나 reject가 호출되기전까지는 pending상태이다

new Promise((resolve, reject)=>{
  reject()
})

const fakeRequest = (url) => {
    return new Promise((resolve, reject)=>{
        const rand = Math.random()
        setTimeout(()=>{
            if(rand < 0.7){
                resolve('YOUR FAKE DATA HERE');
            }
            reject("ERROR");
        }, 1000)
    })
}

fakeRequest('/dog/1')
.then((data)=>{
    console.log("DONE WITH REQUSET!!")
    console.log("data is ", data)
}).catch((err)=>{
    console.log("error", err)
})


const delayedColorChange = (color , delay) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

delayedColorChange('red', 1000)
.then(()=>{
   return delayedColorChange('orange', 1000);
})
.then(()=>{
    return  delayedColorChange('blue', 1000);
}) 
.then(()=> delayedColorChange('purple',2000))