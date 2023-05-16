import { useSelector, useDispatch } from 'react-redux'
import { deleteTodo, toggleTodo } from '../../store/todosSlice'

import { BsCheck2Circle, BsTrash3 } from 'react-icons/bs'

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
        <div className='todos'>
            <ul>
                {todos.map(todo => (
                    <li
                        key={todo.id}
                        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                    >
                        <div>
                            <BsCheck2Circle onClick={() => handleToggleTodo(todo.id)}/>
                        </div>
                        <div>
                            {todo.text}
                        </div>
                        <div>
                            <BsTrash3 onClick={() => handleDeleteTodo(todo.id)}/>
                        </div>
                        
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todos;