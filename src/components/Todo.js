import React from 'react'

const Todo = ({ id, note, completed }) => {
  return (
    <div className="col-8 mb-3">
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <div className="form-check my-auto">
              <input className="form-check-input" type="checkbox" defaultChecked={completed} />
              <label className="form-check-label">
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