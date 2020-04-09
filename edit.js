const textElement = document.querySelector('#update-todo')
const deleteElement = document.querySelector('#delete-todo')
const todoId = location.hash.substring(1)

// get saved todos -> get the premade function
let todos = getSavedTodos()

let todo = todos.find((todo) =>  todo.id = todoId )

// if note was not able to found redirect them to home page
if (todo === undefined) {
  location.assign('index.html')
}

textElement.value = todo.text

// update todo
textElement.addEventListener('input', (e) => {
  // update the todo object
  todo.text = e.target.value
  // save the todo and redirect to the home page
  saveTodos(todos)

})

// delete todo
deleteElement.addEventListener('click', () => {
  // delete todo
  deleteTodo(todo.id)
  saveTodos(todos)
  // redirect to home page after button is deleted
  location.assign('index.html')
})

// global event listener
window.addEventListener('storage', (e) => {
  if (e.key === 'todos') {
    todos = JSON.parse(e.newValue)

    todo = todos.find((todo) => todo.id === todoId )

    if (todo === undefined) {
      location.assign('index.html')
    }

    textElement.value = todo.text
  }
})