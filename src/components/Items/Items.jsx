import React from 'react';


export default (props) => {
  return <div className="Menu_Items">
    <p> {props.name}, {props.price} </p>
  </div>;
};
