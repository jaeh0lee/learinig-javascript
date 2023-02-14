const form = document.querySelector('#todo')
const ul = document.querySelector('#list')

form.addEventListener('submit', (e)=>{
e.preventDefault()
const firstTodoInput = form.elements.first
const lastTodoInput = form.elements.last
addList(firstTodoInput.value,lastTodoInput.value )
// firstTodoInput.value = "";
// lastTodoInput.value = "";
})



// 리스트 추가 함수 

const addList = (first, last) => {
 const newList = document.createElement('li')
 newList.append(first)
 newList.append(last)
 ul.append(newList)
}