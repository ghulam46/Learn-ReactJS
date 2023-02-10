export const Task = (props) => {
    return ( 
        <div className="listContent">
          <h1>{props.taskName}</h1>
          <button onClick={() => props.deleteTask(props.id)} className="btnDelete">X</button>
        </div>
      );
}