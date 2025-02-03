

import "./components/todo/todo.css"


const App = () => {

  return (
    <div className="todo-container">
      <div className="todo-title">Todo list</div>
      <div className="todo-new">
        <input type="text" />
        <button>Add</button>
      </div>
      <div className="todo-data">
        <div> learning react</div>
        <div> watching yotube</div>

      </div>
    </div>
  )
}

export default App
