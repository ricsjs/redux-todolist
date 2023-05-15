//importação do store
import { configureStore } from '@reduxjs/toolkit';
//importação dos reducers
import todosReducer from './todosSlice';

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export default store;
