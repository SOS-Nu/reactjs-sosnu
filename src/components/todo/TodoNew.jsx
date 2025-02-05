

const TodoNew = (props) => {
    console.log("check props", props);

    const { addNewTodo } = props;
    // addNewTodo("sosnu");
    return (
        <div className="todo-new">
            <input type="text" />
            <button>Add</button>
        </div >
    )
}

export default TodoNew;