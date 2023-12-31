import React from 'react';
import { useDispatch } from 'react-redux';
import { completeTodo, deleteTodo } from "../redux/todoSlice";

const Todo = ({ _id, note, completed }) => {
  const dispatch = useDispatch();

  const todoCompleteHandler = () => {
    dispatch(completeTodo({ _id: _id, note: note, completed: !completed }));
  }

  const deleteTodoHandler = () => {
    dispatch(deleteTodo({ _id: _id }));
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
                onClick={todoCompleteHandler}
              ></input>
              <label className={`form-check-label${completed ? ' todo-done' : ''}`}>
                {note}
              </label>
            </div>
            <div className="todo-button">
              <button className="btn btn-light">Edit</button>
              <button className="btn btn-danger" onClick={deleteTodoHandler}>Delete</button>
            </div>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default Todo