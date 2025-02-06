

const TodoData = (props) => {

    const { name, age, data } = props;
    //destructuring props

    // const name = props.name;
    // const age = props.age;
    // const data = props.data;

    //props ia an object that contains all the properties that are passed to a component
    console.log("check props", props)
    return (
        <div className="todo-data">
            <div> my name is {name}</div>
            <div> learning react</div>
            <div> watching yotube</div>
            <div>
                {JSON.stringify(props.todoList)}
            </div>
        </div>
    )
}

export default TodoData;