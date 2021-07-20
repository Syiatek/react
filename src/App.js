import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css';
// import {PureCompo, PureCompoProps} from './compoPerso/PureCompo';
// import StateCompo from './compoPerso/stateCompo';
// import CompoCycleDeVie from './compoPerso/CompoCycleDeVie';
import FilterableJeuxTable from './compoPerso/jeux/FilterablejeuxTable';
// import {FilterableJeuxTable, JeuxTable, JeuxCategory, JeuRow} from "./compoPerso/jeux";


class App extends Component {
onInputChange(val){
  console.log("val dans APP -> " +val);
}

  render() {
    const JEUX = [];
    JEUX.push({category:"FPS", price:"10€", stocked:true, name:"Counter Strike",});
    JEUX.push({category:"FPS", price:"40€", stocked:false, name:"battleField",});
    JEUX.push({category:"FPS", price:"10€", stocked:true, name:"Pubg",});
    JEUX.push({category:"Aventure", price:"10€", stocked:true, name:"Tomb raider",});
    JEUX.push({category:"Aventure", price:"30€", stocked:false, name:"uncharted",});
    JEUX.push({category:"Aventure", price:"50€", stocked:true, name:"Zelda",});
  return (
    <div className="App">
      <header className="App-header">

       <FilterableJeuxTable jeux={JEUX}/>



        {/* <img src={logo} className="App-logo" alt="logo" />
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
        </a> */}
      </header>
    </div>
  );
}
}

export default App;
