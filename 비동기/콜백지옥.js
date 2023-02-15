

setTimeout(() => {
    document.body.style.backgroundColor = "red"
    setTimeout(()=>{
        document.body.style.backgroundColor = "orange"
        setTimeout(()=>{
            document.body.style.backgroundColor = "blue"
            setTimeout(()=>{
                document.body.style.backgroundColor = "purple"
                setTimeout(()=>{
                    document.body.style.backgroundColor = "gray"
                    setTimeout(()=>{
                        document.body.style.backgroundColor = "pink"
                    },2000)
                },2000)
            },2000)
        },2000)
    },2000)
}, 2000);

// 콜백지옥 
// 콜백지옥이란 많은 양의 콜백을 전달해야하는것입니다.
// 콜백지옥을 벗어나기 위해 나타난것이 promise와 비동기 함수입니다.


// 함수로 간단하게 정의 
const delayedColorChange = (newColor, delay, doNext)=>{
    setTimeout(()=>{
        document.body.style.backgroundColor = newColor
        doNext && doNext()
    }, delay)

}


delayedColorChange('red', 3000, ()=>{
    delayedColorChange('orange', 3000, ()=>{
        delayedColorChange('yellow', 3000, ()=>{
            delayedColorChange('green', 3000, ()=>{
                delayedColorChange('blue', 3000)
            })
        })
    })
})