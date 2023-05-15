import './home.css'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, deleteTodo, toggleTodo } from '../../store/todosSlice'

const Home = () => {

    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        const newTodo = prompt('Digite uma nova tarefa:');
        if (newTodo) {
            dispatch(addTodo(newTodo));
        }
    };

    const handleDeleteTodo = id => {
        dispatch(deleteTodo(id));
    };

    const handleToggleTodo = id => {
        dispatch(toggleTodo(id));
    };

    return (
        <div className='container-home'>
            <h1>TO-DO LIST</h1>
            
        </div>
    )
}

export default Home;