import React, { Component } from 'react';

import Items from '../Items/Items';

export default class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
            <div className="Menu_Board">
            <ul>
              {this.props.items.map((items, i) => (
                <li>
                <Items
                  key={i}
                  name={items.name}
                  price={items.price}
                   />
                   </li>)
              )}
            </ul>
            </div>
            )
  }
}