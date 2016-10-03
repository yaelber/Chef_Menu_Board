import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './index.css';


ReactDOM.render(
  <App items = {[
    {name:'Margarita Pizza', price:'15'},
    {name:'Roasted Beets and Goat Cheese Salad', price:'11'},
    {name:'Fresh Crab Spaghetti', price:'20'},
    {name:'Spaghetti Carbonara', price:'22'},
    {name:'Garlic Bread', price:'7'},
    {name:'Primavera Bruschetta', price:'10'}
    ]} />,
  document.getElementById('root')
);
