

const TodoData = (props) => {

    const { todoList, deleteTodo } = props;

    //id tu đặt
    const handleClick = (id) => {
        deleteTodo(id);
    }
    //destructuring props
    // const name = props.name;
    // const age = props.age;
    // const data = props.data;

    //props ia an object that contains all the properties that are passed to a component
    return (

        <div className="todo-data">
            {todoList.map((item, index) => {
                return (
                    <div className={`todo-item ${index}`} key={item.id}>
                        <div >
                            {item.name}
                        </div>
                        <button style={{ cursor: "pointer" }}
                            onClick={() => handleClick(item.id)}>delete</button>
                    </div>
                )
            })}
        </div >
    )
}

export default TodoData;