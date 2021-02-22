import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const names = ['RS SHONJOY', 'RAJ']
  return (
    <div className="App">
      <header className="App-header">
      <p>rs</p>
      <Person name={names[0]} food="Mango"></Person>
      <Person name={names[1]} food="Apple"></Person>
      </header>
    </div>
  );
}

function Person(props) {
  const personStyle = {
    border:'2px solid red',
    borderRadius:'5px',
    padding:'10px',
    margin:'10px',
    color: 'goldenrod'
  }
  console.log(props);
  
  return (
    <div style= {personStyle}>
      <h1>Name: {props.name}</h1>
      <h3>My favorite fruit {props.food}.</h3>
    </div>
  )
}

export default App;
