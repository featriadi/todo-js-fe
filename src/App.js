import './assets/bootstrap/css/bootstrap.min.css';
import './assets/style/App.css'

import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <div className="container my-3">
        <h1 className="text-center">What's the plan for today?</h1>
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
