
import { useState, useEffect } from 'react'
import './App.css'
import TodoList from './components/TodoList/TodoList'

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos")
    if (savedTodos && savedTodos !== "undefined" && savedTodos !== "null") {
      setTodos(JSON.parse(savedTodos))
    }
  }, [])

  const addTodo = (event) => {
    const newTodo = {text: event.target.value, id: Date.now(), completed: false}
    localStorage.setItem("todos", JSON.stringify([newTodo, ...todos]))
    setTodos([newTodo, ...todos])
    event.target.value = ""
  }

  const completedTodo = (id, e) => {
    const todosCopy = [...todos]
    const indexOfTodo = todosCopy.findIndex((i)=> i.id === id)
    todosCopy[indexOfTodo].completed = !todosCopy[indexOfTodo].completed
    localStorage.setItem("todos", JSON.stringify([...todosCopy]))
    setTodos([...todosCopy])
  }

  const editTodoText = (id, e) => {
    const todosCopy = [...todos]
    const indexOfTodo = todosCopy.findIndex((i)=> i.id === id)
    todosCopy[indexOfTodo].text = e.target.value
    localStorage.setItem("todos", JSON.stringify([...todosCopy]))
    setTodos([...todosCopy])
    e.target.value = ""
  }

  const deleteTodo = (id)=> {
    const todosCopy = [...todos]
    const indexOfTodo = todosCopy.findIndex((i)=> i.id === id)
    todosCopy.splice(indexOfTodo, 1)
    localStorage.setItem("todos", JSON.stringify([...todosCopy]))
    setTodos([...todosCopy])
  };


  return (
    <div className='App'>
      <TodoList
      todos={todos}
      addTodo={addTodo}
      completedTodo = {completedTodo}
      editTodoText={editTodoText}
      deleteTodo={deleteTodo}
      />
    </div>
  )
}

export default App
