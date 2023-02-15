const disp1 = document.querySelector('#disp1')
const disp2 = document.querySelector('#disp2')
const p1btn = document.querySelector('#p1btn')
const p2btn = document.querySelector('#p2btn')
const resetbtn = document.querySelector('#resetBtn')
const selbtn = document.querySelector('#selScor')


let p1ctn = 0
let p2ctn = 0
let winnerScore = 5
let isGameOver = false

p1btn.addEventListener('click', ()=>{
    
    if(!isGameOver){
        p1ctn += 1 
        if(p1ctn === winnerScore){
            isGameOver = true
            disp1.classList.add('winner') 
            disp2.classList.add('lose') 
        }
        disp1.textContent = p1ctn
    }
})

p2btn.addEventListener('click', ()=>{
    if(!isGameOver){
        p2ctn += 1 
        if(p2ctn === winnerScore){
            isGameOver = true
            disp1.classList.add('lose') 
            disp2.classList.add('winner') 
        }
        disp2.textContent = p2ctn
    }
})


selbtn.addEventListener('change', function(){
    winnerScore = parseInt(this.value)
})


const reset = () =>{
    isGameOver = false;
    p1ctn = 0
    p2ctn = 0
    disp1.textContent = 0
    disp2.textContent = 0
    disp1.classList.remove('winner', 'lose')
    disp2.classList.remove('winner', 'lose')
  }

resetbtn.addEventListener('click', reset)

