import './home.css'
import ButtonAdd from '../../components/buttonAdd'
import Todos from '../../components/todos'
import Divider from '../../components/divider'

const Home = () => {


    return (
        <div className='container-home'>
            <h1>TO-DO LIST</h1>
            <Divider />
            <ButtonAdd />
            <div className='todos-home'>
                <Todos />
            </div>
        </div>
    )
}

export default Home;