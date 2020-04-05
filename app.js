// mock data
const todos = getSavedTodos()

// render todos
const filters = {
  searchText: '',
  hideCompleted: false,
}

renderTodos(todos, filters)

document.querySelector('#search-text').addEventListener('input', (e) => {
  filters.searchText = e.target.value
  renderTodos(todos, filters)
})

// add todo
document.querySelector('#add-todo').addEventListener('submit', (e) => {
  e.preventDefault()
  const id = uuidv4()
  todos.push({
    id,
    text: e.target.elements.text.value,
    completed: false
  })
  saveTodos(todos)
  // renderTodos(todos, filters) < do not send user to the todo create
  e.target.elements.text.value = ''
  location.assign(`edit.html#${id}`)

})

// Hide completed
document.querySelector('#hide-completed').addEventListener('change', (e) => {
  filters.hideCompleted = e.target.checked
  renderTodos(todos, filters)
})