import React from 'react';


export default (props) => {
  return <div className="Menu_Items">
    <Items name={props.items.name} />,
    <Items price={props.items.price} />
  </div>;
};