import { useSelector, useDispatch } from 'react-redux'
import { addTodo } from '../../store/todosSlice'

import { useState } from 'react'

import { BiPlus } from 'react-icons/bi'
import './buttonAdd.css'

const ButtonAdd = () => {

    const [inputValue, setInputValue] = useState();

    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        if (inputValue) {
            console.log(inputValue)
            dispatch(addTodo(inputValue));
            setInputValue('');
        }
    }

    return (
        <div className='container-btn'>
            <input className='inputAddTodo'
            type='text'
            value={inputValue}
            placeholder='Type a new to do...'
            onChange={(e) => setInputValue(e.target.value)}
            />
            <button className='btnAddTodo' onClick={handleAddTodo}><BiPlus /></button>

        </div>
    )
}

export default ButtonAdd;