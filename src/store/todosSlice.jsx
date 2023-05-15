import { createSlice } from '@reduxjs/toolkit';

//criação do reducer
const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    //adiciona to-do a lista
    addTodo: (state, action) => {
      state.push({ id: Date.now(), text: action.payload, completed: false });
    },
    //deleta todo da lista
    deleteTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    },
    //marca todo como concluido ao clicar
    toggleTodo: (state, action) => {
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    },
  },
});

//exportando reducers para utilizar em outros componentes
export const { addTodo, deleteTodo, toggleTodo } = todosSlice.actions;

export default todosSlice.reducer;
