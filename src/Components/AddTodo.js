import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';

import { addTodo } from '../Redux/Actions/todosActions';

const AddTodo = ({ tasks }) => {
  let id = tasks.length + 1;
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  return (
    <div className="Input-Container">
      <div className="add-element">
        <h1>TO-DO APP!</h1>
        <h4>Add New To-Do</h4>
        <div>
          <input
            type="text"
            id="myInput"
            placeholder="Enter New Task..."
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button
            className="add-Btn"
            onClick={() => {
              input.trim()
                ? dispatch(addTodo({ id, text: input, complete: false }))
                : alert('Please enter a valid text');
              setInput('');
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};

export default connect(mapStateToProps, { addTodo })(AddTodo);
