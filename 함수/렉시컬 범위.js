// 렉시컬 스코프란 부모 함수의 안에 중첩된 내부 함수는 해당 외부 함수의 범위에나 또는 범위 내에서 정의된 변수에 엑세스 할수 있습니다.

// 중첩된 함수나 내부 함수는 상위 몇 레벨 위에 있든 상관없이 부모 함수나 조부모 함수등이 엑세스 하는 동일한 항목에 엑세스 할수 있습니다.

// 역방향으로는 성립이 되지 않습니다.


function bank(){
    const heros = ["jaeho", "hoho", "hihi", "hellhell"]
    function cry(){
        function inner(){
            for( let hero of heros){
                console.log(`help me , ${hero.toUpperCase()}`)
                }
        }
       inner()
    }
    cry()
}

