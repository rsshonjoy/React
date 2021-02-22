import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const names = ['RS SHONJOY', 'RAJ']
  const products = [
    {name: "Photoshop", price: "$ 99.99"},
    {name: "Illustator", price: "69.99"},
    {name: "Lightroom", price: "59.99"}
  ]
  return (
    <div className="App">
      <header className="App-header">
      <Product name={products[0].name} price={products[0].price}></Product>
      <Product name={products[1].name} price={products[1].price}></Product>
      <Product name={products[2].name} price={products[2].price}></Product>
      <Person name={names[0]} food="Mango"></Person>
      <Person name={names[1]} food="Apple"></Person>
      </header>
    </div>
  );
}

function Product(props) {
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'300px',
    width:'400px',
    margin:'10px',
    float:'left'
  }
  return (
    <div style={productStyle}>
      <h2>{props.name}</h2>
      <h1>{props.price}</h1>
      <button>Buy Now</button>
    </div>
  )
}

function Person(props) {
  const personStyle = {
    border:'2px solid red',
    borderRadius:'5px',
    padding:'10px',
    margin:'10px',
    color: 'goldenrod'
  }
  
  return (
    <div style= {personStyle}>
      <h1>Name: {props.name}</h1>
      <h3>My favorite fruit {props.food}.</h3>
    </div>
  )
}

export default App;
