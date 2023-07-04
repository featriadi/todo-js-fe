import React from 'react'
import Todo from './Todo';

function TodoList() {
  const todos = [
    { id: 1, note: 'Makan enak sampe kenyang', completed: false },
    { id: 2, note: 'Mandi sampe wangi', completed: false },
    { id: 3, note: 'Nafas biar tetep hidup', completed: true },
  ]

  return (
    <div className="row d-flex justify-content-center">
      {
        todos.map((todo) => (
          <Todo key={todo.id} note={todo.note} completed={todo.completed} />
        ))
      }
    </div>
  )
}

export default TodoList