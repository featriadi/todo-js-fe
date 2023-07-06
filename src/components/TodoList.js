import React, { useEffect, useState } from 'react'
import Todo from './Todo';
import { useSelector, useDispatch } from "react-redux";
import { getTodo } from "../redux/todoSlice";

function TodoList() {
  const [toggleState, setToggleState] = useState(2);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);  

  useEffect(() => {
    dispatch(getTodo({complete: toggleState}));
  }, [dispatch, toggleState]);

  return (
    <>
      <ul className="nav nav-tabs d-flex justify-content-center" role="tablist">
        <li className="nav-item" role="presentation">
          <button 
            className={toggleState === 2 ? "nav-link active" : "nav-link"}
            onClick={() => toggleTab(2)}
          >
            All
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button 
            className={toggleState === 0 ? "nav-link active" : "nav-link"}
            onClick={() => toggleTab(0)}
          >
            Active
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button 
            className={toggleState === 1 ? "nav-link active" : "nav-link"}
            onClick={() => toggleTab(1)}
          >
            Completed
          </button>
        </li>
      </ul>
      <div className="tab-content mt-3">
        <div 
          className={toggleState === 2 ? "tab-pane fade show active" : "tab-pane fade"}
        >
          <div className="row d-flex justify-content-center">
            {
              todos.map((todo) => (
                <Todo key={todo._id} _id={todo._id} note={todo.note} completed={todo.completed} />
              ))
            }
          </div>
        </div>
        <div 
          className={toggleState === 0 ? "tab-pane fade show active" : "tab-pane fade"}
        >
          <div className="row d-flex justify-content-center">
            {
              todos.map((todo) => (
                <Todo key={todo._id} _id={todo._id} note={todo.note} completed={todo.completed} />
              ))
            }
          </div>
        </div>
        <div 
          className={toggleState === 1 ? "tab-pane fade show active" : "tab-pane fade"}
        >
          <div className="row d-flex justify-content-center">
            {
              todos.map((todo) => (
                <Todo key={todo._id} _id={todo._id} note={todo.note} completed={todo.completed} />
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default TodoList