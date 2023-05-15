import { useSelector, useDispatch } from 'react-redux'

const Todos = () => {


    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();


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