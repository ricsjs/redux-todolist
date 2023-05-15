import './home.css'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, deleteTodo, toggleTodo } from '../../store/todosSlice'

import ButtonAdd from '../../components/buttonAdd'

const Home = () => {

    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    // const handleAddTodo = () => {
    //     const newTodo = prompt('Digite uma nova tarefa:');
    //     if (newTodo) {
    //         dispatch(addTodo(newTodo));
    //     }
    // };

    const handleDeleteTodo = id => {
        dispatch(deleteTodo(id));
    };

    const handleToggleTodo = id => {
        dispatch(toggleTodo(id));
    };

    return (
        <div className='container-home'>
            <h1>TO-DO LIST</h1>
            {/* <button onClick={handleAddTodo}>Adicionar Tarefa</button> */}
            <ButtonAdd />
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

export default Home;