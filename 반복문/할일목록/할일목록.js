
let input = prompt("what would you like to do?")
const todo = ['chicken', "clean Litter Box"]

while(input !== 'quit' && input !== "q") {
    if(input === 'list'){
        console.log("!");
        for(let i =0; i < todo.length; i++){
            console.log(`${i} : ${todo[i]}`);
        } 
    } else if(input === 'new'){
        const newTodo = prompt('Ok, what is the new todo?')
        todo.push(newTodo)
        console.log(newTodo)
    } else if(input === 'delete'){
        const index = parseInt(prompt('Ok, enter an index to delete'))
        if(!Number.isNaN(index)){
            const deleted =  todo.splice(index, 1)
            console.log(`OK, deleted ${deleted[0]}`);
        } else {
            console.log('Unknown index');
        }
    }
    input =  prompt("whate would you like to do?")
}


console.log("ok")