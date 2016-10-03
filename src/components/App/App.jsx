import React, { Component, PropTypes } from 'react';
import './App.css';

import Menu from '../Menu/Menu'
import Items from '../Items/Items'

//App -> Menu Board -> Menu items -> Name and Price


class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      name: props.items.name,
      price: props.items.price
    };
  }


  render() {
    return (
      <div className="App">
        <div className="menu-header">
          <h2>Welcome to Jordan Sassy Menu </h2>
          <Menu />
          <Items name={this.props.items.name} />
          <Items price= {this.props.items.price} />
        </div>
      </div>
    );
  }
}

export default App;
