import React, { Component, PropTypes } from 'react';

import Message from '../Items/Items';

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