const btn = document.querySelector('button').addEventListener('click', (e) => {
    console.log(e)
})

const input = document.querySelector('input')
input.addEventListener('keydown', (e) =>{
    console.log(e.key)
    console.log(e.code)
})


// input.addEventListener('keyup', (e)=>{
//     console.log("keydown")
// })


// key down 키를 누르면 키업으로 별도의 이벤트를 복사합니다.

window.addEventListener('keydown', (e)=>{
//   switch(e.code){
//     case 'ArrowUp' : 
//     console.log("UP!")
//   }
//   switch(e.code){
//     case 'ArrowLeft' : 
//     console.log("Left!")
//   } switch(e.code){
//     case 'ArrowDown' : 
//     console.log("Down!")
//   } switch(e.code){
//     case 'ArrowRight' : 
//     console.log("Right!")
//   } 
 if(e.code === "ArrowUp"){
    console.log("UP!")
 } else if(e.code === "ArrowDown"){
    console.log("Down")
 }
  
})