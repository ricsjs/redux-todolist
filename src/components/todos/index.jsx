import './todos.css'

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
        <div>
            <ul>
                {todos.map((todo) => (

                    <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        <div className='todos'>
                            <div>
                                <BsCheck2Circle size={24} onClick={() => handleToggleTodo(todo.id)} />
                            </div>
                            <div>{todo.text}</div>
                            <div>
                                <BsTrash3 size={24} onClick={() => handleDeleteTodo(todo.id)} />
                            </div>
                        </div>

                    </li>

                ))}
            </ul>
        </div>

    )
}

export default Todos;