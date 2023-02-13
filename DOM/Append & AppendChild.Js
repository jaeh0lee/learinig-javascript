// Append & AppendChild 는 새요소를 만들어서 그걸 페이지 앞이나 뒤에 추가하고 제거하는것 입니다.  

// 이미지 추가하는법 
// const img = document.querySelector('img')
// img.src = "https://w.namu.la/s/e346c226c8de6a6a55f2762878770a442ee13192020509c71e06c55899ded290c332bdf0dd8b2acabf298e2623c95366c8f77458399bdbfbdd13e7658eb794300c4b4ab4d7b5cab198cef152433c6250569e17687dad87eeae615d3c198d6eebf617cdc24ed00baf25e38a9485ea4f85"

// document.body.appendChild(img)

// 페이지 바디의 마지막에 이미지 태그가 추가 됩니다.


// append() 
// 최근에 나온 문법으로 한번에 한개 이상을 삽입할수 있게 해주는 문법입니다.
// append는 텍스트에 내용을 추가할수 있으며 이는 appendChild에서는 지원하지 않습니다.

// const p = document.querySelector('p')
// p.append('hdqlwdlwq', 'gqklqwdjkl')

// 만약에 마지막에 추가하고 싶지 않고 어떤 항목을 요소의 첫번쨰 자녀로 삽입해주고 싶다면 
// prepend()를 사용하면 됩니다.
// 특정 요소의 앞쪽에 뭔가를 삽입할떄 유용합니다.

// 인접한 형제 사이에 요소를 넣고 싶으면 insertAdjacentElement()를 쓰면 됩니다.
// 해당 메서드에는 2개의 인자가 들어가는게 넣고 싶은 위치랑 요소를 작성하면 됩니다.

const h2 = document.createElement('h2')
h2.append("fuckfuckfuck")
const h1 = document.querySelector('h1')
h1.insertAdjacentElement('afterend', h2)

// after , before 문법도 존재합니다

const h3 = document.createElement('h3')
h3.textContent = "hello world"

h1.after(h3) // h1의 글자 앞에 h3가 나타납니다.
h1.before(h3) // h1의 글자 뒤에 h3가 나타납니다.

