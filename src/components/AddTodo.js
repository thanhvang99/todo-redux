import React from "react";
import { addTodo } from "../actions/index";
import { connect } from "react-redux";

const AddTodo = ({ dispatch }) => {
  let input;
  return (
    <form
      className="add-form"
      onSubmit={e => {
        e.preventDefault();
          if (!input.value.trim())
              return
        dispatch(addTodo(input.value));
        input.value = "";
      }}
    >
        <div className="inputPlusButton">
        <input ref={node => (input = node)} placeholder="Todo ..." />
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default connect()(AddTodo);
