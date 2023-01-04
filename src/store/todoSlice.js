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
    toggleTodoComplete(state, action) {}
  }
})

export const {addTodo, removeTodo, toggleTodoComplete} = todoSlice.actions;

export default todoSlice.reducer;