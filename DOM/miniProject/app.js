const p1 = { 
    score : 0,
    button : document.querySelector('#p1Btn'),
    display : document.querySelector('#cntP1')
}

const p2 = {
    score : 0,
    button : document.querySelector('#p2Btn'),
    display : document.querySelector('#cntP2')
}

const restBtn = document.querySelector('#resetBtn')
const roundCnt = document.querySelector('#roundCnt')

let winnerCount = 3;
let isGameOver = false

function updateList(player, opponent){
    if(!isGameOver){
        player.score += 1; 
        if(player.score === winnerCount){
           isGameOver = true
           player.display.classList.add('winner')
           opponent.display.classList.add('lose')
          
       }
       player.display.textContent = player.score;
   }
    
}

p1.button.addEventListener('click', ()=>{
    updateList(p1, p2)
})

p2.button.addEventListener('click', ()=>{
    updateList(p2, p1)
})



roundCnt.addEventListener('change', function(){
    winnerCount = parseInt(this.value)
    reset()
})



restBtn.addEventListener('click', reset)


function reset(){
    isGameOver = false;
    for(let p of [p1, p2]){
        p.score = 0;
        p.display.textContent = 0
        p.display.classList.remove('winner', 'lose')
    
    }
}