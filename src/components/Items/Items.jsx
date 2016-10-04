import React from 'react';


export default (props) => {
  return <div className="Menu_Items">
    <ul> {props.name}, {props.price} </ul>,
  </div>;
};