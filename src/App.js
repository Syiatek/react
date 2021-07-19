import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import {PureCompo, PureCompoProps} from './compoPerso/PureCompo';
import StateCompo from './compoPerso/stateCompo';
import CompoCycleDeVie from './compoPerso/CompoCycleDeVie';


class App extends Component {
onInputChange(val){
  console.log("val dans APP -> " +val);
}

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <CompoCycleDeVie/>
        <PureCompo/>
        <PureCompoProps label={"mike"} age={21}/>
        <StateCompo label={"steven"} onInputChange={this.onInputChange}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}

export default App;
