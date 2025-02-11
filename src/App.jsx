
import "./components/todo/todo.css"
import TodoData from "./components/todo/TodoData"
import TodoNew from "./components/todo/TodoNew"
import reactLogo from "./assets/react.svg"
import { useState } from "react"

const App = () => {

  const [todoList, setTodos] = useState([

  ]);


  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 1000),
      name: name
    }

    setTodos([...todoList, newTodo]);
    // todoList.push(newTodo);
    //array push
  }
  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const deleteTodo = (id) => {
    const newTodo = todoList.filter((item => item.id !== id))
    setTodos(newTodo);
  }





  return (
    <div className="todo-container">
      <div className="todo-title">Todo list </div>
      <TodoNew
        addNewTodo={addNewTodo}
      />


      {(todoList.length === 0)
        ? <div className="todo-image">
          <img src={reactLogo} className="logo" />
        </div>
        : <TodoData
          todoList={todoList}
          deleteTodo={deleteTodo}
        />
      }



      {/* 
      {(todoList.length === 0) ? "" : <TodoData
        todoList={todoList}
      />}


      {todoList.length === 0 && <div className="todo-image">
        <img src={reactLogo} className="logo react" />
      </div>} */}

      {/* {todoList.length === 0 ? <div className="todo-image">
        <img src={reactLogo} className="logo react" />
      </div> : ""} */}


    </div>
  )
}

export default App
