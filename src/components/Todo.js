import React from "react";

const Todo = ({onClick,text,completed,id}) =>{
    return (
        <li className="todo-item" onClick={onClick} style={{textDecoration: completed ? "line-through" : "none"}}>
          {id}. {text}
        </li>
    )
}

export default Todo;
