// async / await


/* 
async 자체가 함수를 비동기 함수로 선언하는 키워드 입니다.
async 키워드는 함수를 선언할떄 사용
함수 앞에 async를 입력하면 함수는 자동으로 Promise를 반환합니다.
async는 Promise를 리턴하는 비동기적인 함수로 만들어주는 키워드 입니다

*/

// promise는 함수가 값을 반환(return)할떄 resolve 상태로 반환합니다.


async function jaeho (){
  throw new Error("fuck!")
  return "hohohoo"
}

const hoho = async (data) => {
 return 'hohoho'
}



 jaeho().then((data)=>{
    console.log('hi', data)
 }).catch((err)=>{
    console.log('fuck', err)
 })



 const loging = async(username, password) => {
    if(!username || !password) throw 'Missing'
    if(password === '12345') return 'welcome my site'
    throw 'Invalid Password'
 }

 loging('jaeho', '12345')
 .then((data)=>{
    console.log('login') 
    console.log("ERROR")
    console.log(err)
 })

 /*
 await키워드
 비동기 코드를 쓰면서 동기적으로 보이게 해줍니다.
 awati 키워드의 역활은 기다리게 하는것인데 promise가 값을 반환할떄까지 기다리기 위해 비동기 함수의 실행을 일시정지 시킵니다.
 비동기 함수에서만 적용하기 때문에 두 키워드가 한쌍입니다.
 await는 무조건 async와 함께 사용해야합니다. 
 */
 

const color = (color, delay) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            document.body.style.backgroundColor = color
            resolve()
        }, delay)
    })
}

async function rainbow(){
    await color('red', 2000)
    await color('blue', 2000)
    await color('orange', 2000)
    await color('purple', 2000)
    await color('pink', 2000)
}

rainbow()






// try ... catch문 
