// const btn = document.querySelector('#v2') 



// btn.onclick = function(){
//     console.log("hello")
//     console.log("hello1")
// }

// function scream(){
//     console.log("djqwlkdjklwq")
//     console.log("qweqwkljelkql")
// }

// btn.onmouseenter = scream

// document.querySelector('h1').onclick = () => {
//     alert('you win')
// }


  
const btn3 = document.querySelector('#v3')

btn3.addEventListener('click', () => {
    console.log("hlloe")
    console.log("hlloe")
    console.log("hlloe")
})


function twist(){
    console.log("two")
} 
function shout(){
    console.log("three")
}

const tasButton = document.querySelector('#tas')
tasButton.addEventListener('click', twist)
tasButton.addEventListener('click', shout, {once:true})

