const form = document.querySelector('#letter')
const ul = document.querySelector('#talklist')


form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const fistNameInput = form.elements.fisrtName;
    const lastNameInput = form.elements.lastName;
    listAdd(fistNameInput.value,lastNameInput.value);
    fistNameInput.value = '';
    lastNameInput.value = '';
})



// 리스트 추가 함수 

const listAdd = (userName, lastName) => {
  const newList = document.createElement('li')
  const bold = document.createElement('b')
  bold.append(userName)
  bold.append(lastName)
  newList.append(bold) 
  ul.append(newList)
}