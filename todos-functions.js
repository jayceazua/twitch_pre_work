// read existing todos from localStorage
const getSavedTodos = () => {
  const todosJSON = localStorage.getItem('todos')

  if (todosJSON !== null) {
    return JSON.parse(todosJSON)
  }

  return []

}

// Save todo
const saveTodos = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos))
}

//delete todo
const deleteTodo = (id) => {
  const todoIndex = todos.findIndex((todo) => todo.id === id )

  if (todoIndex > -1) {
    todos.splice(todoIndex, 1) // O(n) runtime
  }
}

// Toggle Todo
const toggleTodo = (id) => {
  const todo = todos.find((todo) => todo.id === id )

  if (todo !== undefined) {
    todo.completed = !todo.completed
  }
}

// Get the DOM elements for an individual todo
const generateTodoDOM = (todo) => {
  const todoEl = document.createElement('div')
  const completeBox = document.createElement('input')
  const textEl = document.createElement('a')
  const deleteButton = document.createElement('button')

  // Setup todo checkbox
  completeBox.setAttribute('type', 'checkbox')
  completeBox.checked = todo.completed
  todoEl.appendChild(completeBox)
  completeBox.addEventListener('change', function () {
    toggleTodo(todo.id)
    // save and render
    saveTodos(todos)
    renderTodos(todos, filters)
  })

  // Setup the todo text
  textEl.textContent = todo.text
  textEl.setAttribute('href', `edit.html#${todo.id}`)
  todoEl.appendChild(textEl)

  // Setup delete todo
  deleteButton.textContent = 'x'
  todoEl.appendChild(deleteButton)
  deleteButton.addEventListener('click', () => {
    deleteTodo(todo.id)
    saveTodos(todos)
    renderTodos(todos, filters)
  })

  return todoEl
}

// Get the DOM elements for list summary
const generateSummaryDOM = (incompleteTodos) => {
  const summary = document.createElement('h2')
  summary.textContent = `You have ${incompleteTodos.length} todos left!`
  return summary
}

// Render todos function
const renderTodos = (todos, filters) => {

  const filteredTodos = todos.filter((todo) => {
    const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed
    return searchTextMatch && hideCompletedMatch
  })

  const incompleteTodos = filteredTodos.filter((todo) => {
    return !todo.completed
  })

  document.querySelector('#todos').innerHTML = ''
  document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))

  filteredTodos.forEach((todo) => {
    document.querySelector('#todos').appendChild(generateTodoDOM(todo))
  })

}

