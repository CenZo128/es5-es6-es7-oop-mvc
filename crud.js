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
    // for(let x = 0; x < todos.length; x++) {
    //     //destructuring object 
    //     const { id, task, done } = todos[x];
    //     // console.log(id,task,done)
    //     if(done){
    //         console.log(`${id}. ${task} [X]`)
    //     }else{
    //         console.log(`${id}. ${task} []`)
    //     }
    // }

    todos.forEach(todo => {
        const { id, task, done } = todo;
        done ? console.log(`${id}. ${task} [X]`) : console.log(`${id}. ${task} []`)
    })
    
 }

const createTodo = (task, done) => {
    // let generateId = todos[todos.length - 1].id + 1
    // let tempObj = {
    //     id : generateId,
    //     task,
    //     done
    // }
    // todos.push(tempObj)

    //Shorthand
    todos.push({
        id : todos[todos.length - 1].id + 1,
        task,
        done
    })
}

const updateTodo = () => {
     
}

const deleteTodo = (id) => {
    // const tempTodos = []
    //  for(let x = 0; x < todos.length; x++) {
    //     if(todos[x].id !== id){
    //         tempTodos.push(todos[x])
    //     }
    //  }
    // console.log(tempTodos)
    // todos = tempTodos;

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
