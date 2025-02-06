import { useState } from "react";


const TodoNew = (props) => {
    // console.log("check props", props);

    //useState hook
    // const valueInput = "";
    const [valueInput, setvalueInput] = useState("sosnu");

    const { addNewTodo } = props;
    // addNewTodo("sosnu");

    const handleClick = () => {
        addNewTodo(valueInput);
    }
    const handleOnChange = (name) => {
        setvalueInput(name);
    }
    return (
        <div className="todo-new">
            <input type="text"
                onChange={(event) => handleOnChange(event.target.value)}
            />
            <button style={{ cursor: "pointer" }}
                onClick={handleClick}
            >Add</button>
            <div>my name is : {valueInput}</div>
        </div >
    )
}

export default TodoNew;