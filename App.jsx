import AppName from "./Component/AppName.jsx"
import AddTodo from "./Component/AddTodo.jsx"
import TodoItem1 from "./Component/TodoItem1.jsx"
import TodoItem2 from "./Component/TodoItem2.jsx"
import './App.css';

function App() {
  return( 
  <center className="todo-container">
    <AppName/>
    <AddTodo/>
    <div className="items-container">
    <TodoItem1/>
    <TodoItem2/>
    </div> 
</center>
  );
}

export default App
