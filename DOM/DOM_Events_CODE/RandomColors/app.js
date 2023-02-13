const btn = document.querySelector('button')
const h1 = document.querySelector('h1')

btn.addEventListener('click', ()=>{
    const newColor = randomColor()
    document.body.style.backgroundColor = newColor
    h1.innerText = newColor
    h1.style.fontSize = "20px"
})


const randomColor = () =>{
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
   return  `rgb(${r},${g}, ${b})`
}

const buttons = document.querySelectorAll('button')