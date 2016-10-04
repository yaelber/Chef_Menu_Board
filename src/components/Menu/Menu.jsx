import React, { Component } from 'react';

import Items from '../Items/Items';

export default class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
            <div className="Menu_Board">
              {this.props.items.map((items, i) => (
                <Items
                  key={i}
                  name={items.name}
                  price={items.price}
                   />)
              )}
            </div>
            )
  }
}