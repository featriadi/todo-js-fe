import React from 'react';
import { useDispatch } from 'react-redux';
import { completeTodo } from "../redux/reducers/todo";

const Todo = ({ _id, note, completed }) => {
  const dispatch = useDispatch();

  const todoCompleted = () => {
    dispatch(completeTodo({ _id: _id, note: note, completed: !completed }));
  }

  return (
    <div className="col-8 mb-3">
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <div className="form-check my-auto">
              <input
                type="checkbox"
                className="form-check-input"
                defaultChecked={completed}
                onClick={todoCompleted}
              ></input>
              <label className={`form-check-label${completed ? ' todo-done' : ''}`}>
                {note}
              </label>
            </div>
            <div className="todo-button">
              <button className="btn btn-light" type="button">Edit</button>
              <button className="btn btn-danger" type="button">Delete</button>
            </div>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default Todo