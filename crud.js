//CRUD : Create, Read, Update, Delete

//ToDo List

 //Global Variable
 const todos = [
     {
         id : 1,
         task : "Ngobar js ama teman",
         done : true
     },
     {
         id : 2,
         task : "Makan ama doi",
         done : false
     }
 ];

const readTodo = (todos) => {
    todos.forEach(todo => {
        const { id, task, done } = todo;
        done ? console.log(`${id}. ${task} [X]`) : console.log(`${id}. ${task} []`)
    })
    
 }

const createTodo = (task, done) => {
    todos.push({
        id : todos[todos.length - 1].id + 1,
        task,
        done
    })
}

const updateTodo = () => {
     
}

const deleteTodo = (id) => {
    todos = todos.filter(todo => todo.id !== id)
}

//Test case
// Print Todo
/**
 * 1. Ngobar js ama teman [X]
 * 2. Makan ama doi []
 */

createTodo("Minum ama dia",true)
createTodo("Pergi belanja",true)
createTodo("Mending rakit PC",false)
readTodo(todos);
console.log("====================================")
deleteTodo(3)
readTodo(todos);
