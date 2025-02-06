
import "./components/todo/todo.css"
import TodoData from "./components/todo/TodoData"
import TodoNew from "./components/todo/TodoNew"
import reactLogo from "./assets/react.svg"
import { useState } from "react"

const App = () => {

  const [todoList, setTodos] = useState([
    { id: 1, name: "learning react" },
    { id: 2, name: "watching yotube" }
  ]);

  const sosnu = "nu";
  const age = "24"
  const data = {
    address: "saigon",
    country: "vietnam"
  };

  const addNewTodo = (name) => {
    alert(`add new todo ${name}`)
  }


  return (
    <div className="todo-container">
      <div className="todo-title">Todo list </div>
      <TodoNew
        addNewTodo={addNewTodo}
      />
      <TodoData
        name={sosnu}
        age={age}
        data={data}
        todoList={todoList}
      />
      <div>
        <div className="todo-image">
          <img src={reactLogo} className="logo react" />
        </div>
      </div>
    </div>
  )
}

export default App
