import React, { Component } from 'react';
import './App.css';

import Menu from '../Menu/Menu'

//App -> Menu Board -> Menu items -> Name and Price


class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      items:props.items
    };
  }


  render() {
    return (
      <div className="App">
        <div className="menu-header">
          <h2>Welcome to Jordan Sassy Menu </h2>
          <Menu items ={this.state.items}/>
        </div>
      </div>
    );
  }
}

export default App;
