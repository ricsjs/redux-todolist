import './divider.css'

import { BsPencilSquare } from 'react-icons/bs'

const Divider = () => {
    return(
        <div className='DividerStyles'>
            <hr className='line' />
            <div><BsPencilSquare size={25} color='gray'/></div>
            <hr className='line' />
        </div>
    )
}

export default Divider;
