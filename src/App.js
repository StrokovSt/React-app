import React from 'react'
import TodoList from './Todo/todolist.js'
import AddTodo from './Todo/addTodo.js'
import Context from './context.js'

function App() {
  const [todos, setTodos] = React.useState([
    {id: 1, complited: false, title: `Разобраться с React`},
    {id: 2, complited: true, title: `Осознать React`},
    {id: 3, complited: false, title: `Profit от React`}
  ]);

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.complited = !todo.complited;
        }
        return todo;
      })
    )
    console.log(`todo`, todos)
  }

  function removeTodo(id) {
    setTodos(
      todos.filter(todo => todo.id !== id)
    )
  }

  function addTodo(title) {
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      complited: false
    }]))
  }

  return (
    <Context.Provider value={{removeTodo}}>
      <div className="wrapper">
        <h1>React</h1>
        <AddTodo onCreate = {addTodo} />
        {todos.length ? (
        <TodoList todos={todos} onToggleClick  = {toggleTodo} />
        ) : (
          <p>No Todos! 8(</p>
        )}
        
      </div>
    </Context.Provider>
  )
}

export default App;
