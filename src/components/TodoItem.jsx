import { useDispatch } from "react-redux"
import { removeTodo } from "../store/todoSlice";

const TodoItem = ({id, text, completed, toggleTodoComplete}) => {

  const dispatch = useDispatch();

  const removeTask = (id) => {
    dispatch(removeTodo({id}))
  }

  return (
    <li>
      <input 
                type="checkbox" 
                checked={completed} 
                onChange={() => {toggleTodoComplete(id)}}
              />
        <span>{text}</span>
        <span onClick={() => {removeTask(id)}} className="delete">&times;</span>
    </li>
  )
}

export default TodoItem;