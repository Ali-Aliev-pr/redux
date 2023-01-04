import { useDispatch } from "react-redux"
import { removeTodo, toggleTodoComplete } from "../store/todoSlice";

const TodoItem = ({id, text, completed}) => {

  const dispatch = useDispatch();

  const removeTask = (id) => {
    dispatch(removeTodo({id}))
  }

  const taskDone = (id) => {
    dispatch(toggleTodoComplete({id}))
  }

  return (
    <li>
      <input 
                type="checkbox" 
                checked={completed} 
                onChange={() => {taskDone(id)}}
                // onChange={() => {toggleTodoComplete(id)}}
              />
        <span>{text}</span>
        <span onClick={() => {removeTask(id)}} className="delete">&times;</span>
    </li>
  )
}

export default TodoItem;