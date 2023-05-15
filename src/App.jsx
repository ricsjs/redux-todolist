import './app.css'
import Home from "./pages/Home"

import { Provider } from 'react-redux';
import store from './store/store'

import { BsMask } from 'react-icons/bs'

function App() {

  function toggle() {
    var darkmode = document.getElementsByClassName("app")[0];
    darkmode.style.filter = darkmode.style.filter ? "" : "invert(100%)";
  }

  return (
    <Provider store={store}>
      <div className="app">
        <Home />
        <BsMask onClick={toggle} className="icon"/>
      </div>
    </Provider>
  )
}

export default App
