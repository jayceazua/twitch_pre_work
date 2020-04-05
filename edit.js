const todoId = location.hash.substring(1)

// get saved todos -> get the premade function
const todos = getSavedTodos()

const todo = todos.find((todo) => {
  return todo.id = todoId
})

// if note was not able to found redirect them to home page
if (todo === undefined) {
  location.assign('index.html')
}

// update todo
document.querySelector('#update-todo').addEventListener('submit', (e) => {
  e.preventDefault()
  // update the todo object
  todo.text = e.target.elements.text.value
  // save the todo and redirect to the home page
  saveTodos(todos)
  location.assign('index.html')
})

// delete todo
document.querySelector('#delete-todo').addEventListener('click', () => {
  // delete todo
  deleteTodo(todo.id)
  saveTodos(todos)
  // redirect to home page after button is deleted
  location.assign('index.html')
})