import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {

  const todos = useSelector(state => state.todos.todosArray);

  return (
    <ul>
      {
        todos.map((todo) => {
          // console.log(todo)
          return (
            <TodoItem 
              key={todo.id} 
              id={todo.id} 
              text={todo.text}      
              completed={todo.completed}
              // removeTodo={removeTodo}
              // toggleTodoComplete={toggleTodoComplete}
            />
          )
        })
      }
    </ul>
  )
}

export default TodoList;