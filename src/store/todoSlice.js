import {createSlice} from '@reduxjs/toolkit';


const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todosArray: []
  }, 
  reducers: {
    addTodo(state, action) {
      state.todosArray.push(
        {
          id: new Date().toISOString(), 
          text: action.payload.text,
          completed: false
        }
      )
    },
    removeTodo(state, action) {
      state.todosArray = state.todosArray.filter((todo) => todo.id !== action.payload.id)
    },
    toggleTodoComplete(state, action) {
      state.todosArray.map((todo) => {
        if (todo.id !== action.payload.id) {
          return todo
        } else if (todo.id === action.payload.id) {
          todo.completed = !todo.completed
          return todo
        }
      })
    }
  }
})

export const {addTodo, removeTodo, toggleTodoComplete} = todoSlice.actions;

export default todoSlice.reducer;