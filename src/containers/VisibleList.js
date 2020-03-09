import { visibilityTypes,toggleTodo } from "./../actions/index";
import React, { Component } from "react";
import { connect } from "react-redux";
import TodoList from "../components/TodoList";

const getVisibleTodos = (todos = [], filter) => {
    switch (filter) {
        case visibilityTypes.SHOW_ACTIVE:
            return todos.filter(t => !t.completed);
        case visibilityTypes.SHOW_COMPLETED:
            return todos.filter(t => t.completed);
        default:
            return todos;
    }
};

const mapStateToProps = ( state ) => {
    // console.log(state.todos);
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    };
};

const mapDispatchToProps = ( dispatch ) => {
    // console.log(dispatch);
    return {
        onTodoClick: (id) => {dispatch(toggleTodo(id))}
    }
}

const VisibleList = connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default VisibleList;
