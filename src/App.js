import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p>rs</p>
      <Person></Person>
      <Person></Person>
      </header>
    </div>
  );
}

function Person() {
  const personStyle = {
    border:'2px solid red',
    borderRadius:'5px',
    padding:'10px',
    margin:'10px'
  }
  return (
    <div style= {personStyle}>
      <h1>Name: Shonjoy</h1>
      <h3>Hero of the year</h3>
    </div>
  )
}

export default App;
