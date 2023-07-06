import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { addTodo } from '../redux/todoSlice';

function AddTodo() {
  const [value, setValue] = useState();

  const dispatch = useDispatch();

  const createTodo = (event) => {
    event.preventDefault();
    dispatch(
      addTodo({
        note: value,
      })
    )
  }

  return (
    <div className="my-3">
        <div className="d-flex justify-content-center">
          <form onSubmit={createTodo}>
            <div className="input-group w-auto">
                <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="What to do"
                    onChange={(event) => setValue(event.target.value)}
                />
                <button 
                  type="submit" 
                  className="btn btn-primary" 
                  id="button-task-add"
                >Add</button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default AddTodo