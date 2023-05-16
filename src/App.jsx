import './app.css';
import Home from "./pages/Home";
import { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import { BsMask } from 'react-icons/bs';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      var darkmodecontainer = document.getElementsByClassName("app")[0];
      darkmodecontainer.style.filter = darkmodecontainer.style.filter ? "" : "invert(100%)";
      document.body.style.backgroundColor = "black";
    } else {
      var darkmodecontainer = document.getElementsByClassName("app")[0];
      darkmodecontainer.style.filter = darkmodecontainer.style.filter ? "" : "invert(100%)";
      document.body.style.backgroundColor = "#f4f4f4";
    }
  }, [isDarkMode]);

  function toggle() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <Provider store={store}>
      <div className="app">
        <Home />
        <BsMask onClick={toggle} className="icon" />
      </div>
    </Provider>
  );
}

export default App;
