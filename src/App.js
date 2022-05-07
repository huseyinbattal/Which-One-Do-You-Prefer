import angular from './angular.png';
import react from './react.png';
import vue from './vue.png';


import './App.css';



function App() {
  const angularFunc = (e) => {
    e.target.outerText = "-----ANGULAR.JS-----";
  }
  const reactFunc = (e) => {
    e.target.outerText = "-----REACT.JS-----";
  }
  const vueFunc = (e) => {
    e.target.outerText = "-----VUE.JS-----";
  }
  return (
    <div className="App">
          <h1>Which one do you prefer?</h1>
      <header className="App-header">
        <button onClick={(e) => angularFunc(e)}><img src={angular} className="App-logo" alt="logo" /></button>
        <button onClick={(e) => reactFunc(e)}><img src={react} className="App-logo" alt="logo" /></button>
        <button onClick={(e) => vueFunc(e)}><img src={vue} className="App-logo" alt="logo" /></button>
      </header>
 

    </div>
  );
}

export default App;
