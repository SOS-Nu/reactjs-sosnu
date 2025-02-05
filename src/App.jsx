
import "./components/todo/todo.css"
import TodoData from "./components/todo/TodoData"
import TodoNew from "./components/todo/TodoNew"
import reactLogo from "./assets/react.svg"

const App = () => {
  const sosnu = "nu";
  const age = "24"
  const data = {
    address: "saigon",
    country: "vietnam"
  }
  return (
    <div className="todo-container">
      <div className="todo-title">Todo list </div>
      <TodoNew />
      <TodoData
        name={sosnu}
        age={age}
        data={data}
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
