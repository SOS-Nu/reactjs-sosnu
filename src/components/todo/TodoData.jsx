

const TodoData = (props) => {

    const { todoList } = props;
    //destructuring props

    // const name = props.name;
    // const age = props.age;
    // const data = props.data;

    //props ia an object that contains all the properties that are passed to a component
    return (

        <div className="todo-data">
            {todoList.map((item, index) => {
                console.log("check item", item, index)
                return (
                    <div className={`todo-item ${index}`} key={item.id}>
                        <div >
                            {item.name}
                        </div>
                        <button>delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoData;