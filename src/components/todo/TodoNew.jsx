

const TodoNew = (props) => {
    // console.log("check props", props);

    const { addNewTodo } = props;
    // addNewTodo("sosnu");

    const handleClick = () => {
        alert(`click new`)
    }
    const handleOnChange = (name) => {
        console.log(">> handleOnChange", name)
    }
    return (
        <div className="todo-new">
            <input type="text"
                onChange={(event) => handleOnChange(event.target.name)}
            />
            <button style={{ cursor: "pointer" }}
                onClick={handleClick}
            >Add</button>

        </div >
    )
}

export default TodoNew;