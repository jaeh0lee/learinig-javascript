const container = document.querySelector('#container');
const URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for(let i = 1; i < 151; i++){
    const wrap = document.createElement('div')
    const txt = document.createElement('span')
    txt.textContent = `#${i}`;
    const img = document.createElement('img');
    img.src = `${URL}${i}.png`
    wrap.appendChild(img)    
    wrap.appendChild(txt)
    container.appendChild(wrap);
    wrap.classList.add('wrap')
}