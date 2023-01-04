import { useState } from "react";
import TodoList from "./components/TodoList";
import InputField from "./components/InputField";
import { useDispatch } from "react-redux";
import {addTodo} from './store/todoSlice'

function App() {

  const [text, setText] = useState('');

  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({text}))
    setText('');
  }

  const toggleTodoComplete = (id) => {
    // setTodos(
    //   todos.map(
    //     (todo) => {
    //       if (todo.id !== id) {
    //         return todo
    //       } else if (todo.id === id) {
    //         todo.completed = !todo.completed
    //         return todo
    //       }
    //     }
    //   )
    // )
  }

  return ( 
    <div className="App">
      {/* <div className="header"></div> */}
     <div className="father">
      
      <InputField text={text} handleInput={setText} handleSubmit={addTask} />

      <TodoList />
     </div>
    </div>
  );
}

export default App;
