import './home.css'
import ButtonAdd from '../../components/buttonAdd'
import Todos from '../../components/todos'

const Home = () => {


    return (
        <div className='container-home'>
            <h1>TO-DO LIST</h1>
            <ButtonAdd />
            <Todos />
        </div>
    )
}

export default Home;