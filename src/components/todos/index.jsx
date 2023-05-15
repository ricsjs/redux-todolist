import { useSelector, useDispatch } from 'react-redux'
import { deleteTodo, toggleTodo } from '../../store/todosSlice'

const Todos = () => {


    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const handleDeleteTodo = id => {
        dispatch(deleteTodo(id));
    };

    const handleToggleTodo = id => {
        dispatch(toggleTodo(id));
    };


    return (
        <div>
            <ul>
                {todos.map(todo => (
                    <li
                        key={todo.id}
                        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                        onClick={() => handleToggleTodo(todo.id)}
                    >
                        {todo.text}
                        <button onClick={() => handleDeleteTodo(todo.id)}>Excluir</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todos;