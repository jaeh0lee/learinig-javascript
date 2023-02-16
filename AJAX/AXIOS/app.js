// Axios는 타사 라이브러리로 자바스크립트의 네이티브 함수가 아닙니다.
// Axious는 HTTP 요청의 생성과 처리를 최대한 간소화할 목적으로 만들어졌습니다.

// 이렇게 실행하면 프로미스가 반환됩니다.
// axios.get("https://swapi.dev/api/people/1/")

// axios.get("https://swapi.dev/api/peoples/1/")
// .then(res=>{
//     console.log('hello', res)
// }).catch(e=>{
//     console.log(e)
// })

// const getStarWarsPerson = async(id) => {
//     try{
//         const res = await axios.get(`https://swapi.dev/api/people/${id}/`)
//         console.log(res.data)

//     } catch(e){
//        console.log("ERROR")
       
//     }
  
// }

// getStarWarsPerson(10)


// const jaeho = async (id) =>{
//     const res = await axios.get(`https://swapi.dev/api/people/${id}/`)
//     console.log(res.data)
// }

// jaeho(1)

// const jokes = document.querySelector('#jokes')
// const btn = document.querySelector('button')

// const addNewJoke = async () =>{
//     const jokeText = await getDadJoke()
//     console.log(jokeText)
//     const newLI = document.createElement('li')
//     newLI.append(jokeText)
//     jokes.append(newLI)
// }

// const getDadJoke = async () =>{
// try{
//    const config = { headers : {Accept : 'application/json'}}
//    const res =  await axios.get("https://icanhazdadjoke.com/", config)
//    return res.data.joke

//     }catch(e){
//        return "No ERROR"
//     }
   
// }


// btn.addEventListener('click', addNewJoke)


const ul = document.querySelector('#jokes')
const btn = document.querySelector('button')


const addNewjoke = async() =>{
    const TextJoke =  await newList()
    const NewLI = document.createElement('li')
    NewLI.append(TextJoke)
    ul.append(NewLI)
}


const newList = async() =>{
    const config = { headers : {Accept : 'application/json'}}
    const res = await axios.get("https://icanhazdadjoke.com/", config)
    return res.data.joke
}

btn.addEventListener('click', addNewjoke)
// Axios는 정보를 파싱하고 작동할수 있는 객체로 변환합니다.