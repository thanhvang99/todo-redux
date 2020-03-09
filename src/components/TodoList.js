import Todo from './Todo';
import React from 'react';

const TodoList = ({todos,onTodoClick}) =>{
    // console.log(todos);
    // return <h1>here</h1>
    return todos.map( todo => (
        <Todo key={todo.id} onClick={() => onTodoClick(todo.id)} {...todo}/>
    ))
}

export default TodoList;
