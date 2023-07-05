import React, { useEffect } from 'react'
import Todo from './Todo';
import { useSelector, useDispatch } from "react-redux";
import { getTodo } from "../redux/reducers/todo";

function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getTodo());
  }, [dispatch]);

  return (
    <div className="row d-flex justify-content-center">
      {
        todos.map((todo) => (
          <Todo _id={todo._id} note={todo.note} completed={todo.completed} />
        ))
      }
    </div>
  )
}

export default TodoList