function hex(r ,g ,b){
    return '#' +  ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function rgb(r,g,b) {
    return `rgb${r}, ${g}, ${b}`
}

rgb(255, 100, 25)


// 팩토리함수의 팩토리는 어떤 값을 전달하면 이 팩토리가 객체를 만들어주고 마지막에 반환하여 사용할수 있습니다.
// 함수가 객체를 만들어줍니다. 비어 있는 상태로 시작하지만 주어진 인수를 기반으로 속성을 추가합니다.
// 몇가지 메서드를 추가하고 객체를 반환합니다, 이것이 팩토리 함수입니다.
// 팩토리 함수는 주된 방법은 아닙니다. 대부분 패턴에 기반해서 객체를 만듭니다.
function makeColor(r,g,b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function(){
        const {r,g,b} = this; // this는 color를 참조합니다.
        return `rgb(${r}, ${g}, ${b})`
    };
    color.hex = function(){
        const {r,g,b} = this;
        return ('#' +((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1))
    };
        return color;
}


const firstColor = makeColor(35, 255, 150)
firstColor.rgb();
firstColor.hex()