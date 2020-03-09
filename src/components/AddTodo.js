import React from "react";
import {addTodo} from "../actions/index";
import {connect} from 'react-redux';

const AddTodo = ({ dispatch }) => {
    let input;
    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                dispatch(addTodo(input.value));
                input.value = "";
            }}
        >
            <input ref={node => (input = node)} />
            <button type="submit">Add Todo</button>
        </form>
    );
};


export default connect()(AddTodo);
