import React from 'react';
import { connect } from 'react-redux';

import List from './Todo';

const TodoList = ({ tasks }) => {
  return (
    <div className="Container">
      <div>
        <h2> Let's get some work done!</h2>
      </div>

      <div>
        <ul>
          {tasks.map((el, i) => (
            <List task={el} key={i} />
          ))}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};

export default connect(mapStateToProps)(TodoList);
