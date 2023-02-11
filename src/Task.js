export const Task = (props) => {
    return ( 
        <div className="listContent"
          style={{backgroundColor: props.completed ? "dodgerblue" : "white"}}
        >
          <h1>{props.taskName}</h1>
          <button onClick={() => props.completeTask(props.id)}>Complete</button>
          <button onClick={() => props.deleteTask(props.id)} className="btnDelete">X</button>
        </div>
      );
}