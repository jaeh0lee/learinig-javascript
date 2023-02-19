// Fetch 함수로 요청을 만들수도 있고 fetch는 프로미스를 지원합니다.
// fetch 함수가 프로미스를 반환합니다.
// 반환된 프로미스는 처리되거나 아닐수도 있습니다.

// fetch("https://swapi.dev/api/people/1/")
// .then((res)=>{
//     console.log("good!", res)
//     return res.json()
// })
// .then((data)=>{
//     console.log(data)
//    return fetch("https://swapi.dev/api/people/2/")
// })
// .then((res)=>{
//     console.log("good Two", res)
//     return res.json( )
// })
// .then((data)=>{
//     console.log(data)
//     return fetch("https://swapi.dev/api/people/3/")
// })
// .then((res)=>{
//     console.log("good3", res)
//     return res.json()
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((e)=>{
//     console.log(e)
// })


// 비동기 함수를 만들어서 리팩토링하기
// 비동기 함수를 만들떄는 Try-Catch 문으로 코드를 감싸야 합니다

const loadStarWorsCharacter = async () =>{

    try{
   const res = await fetch("https://swapi.dev/api/people/1/")
   const data = await res.json()
   console.log(data)
   const res2 = await fetch("https://swapi.dev/api/people/2/")
   const data2 = await res2.json()
   console.log(data2)

    } catch(e){
        console.log("Error")
    }

} 

loadStarWorsCharacter()