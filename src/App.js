import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const students = ['RS SHONJOY', 'RAJ', 'Joy']
  const products = [
    {name: "Photoshop", price: "$ 99.99"},
    {name: "Illustrator", price: "69.99"},
    {name: "After Effects", price: "59.99"},
    {name: "Lightroom", price: "59.99"}
  ]
  const productNames = products.map(product => product.name);
  console.log(productNames);
  const studentNames = students.map(student => student);
  console.log(studentNames);
  
  return (
    <div className="App">
      <header className="App-header">
      <Counter></Counter>
      <Users></Users>
      <ul>
        {
          students.map(student => <li>{student}</li>)
        }
        {/* <li>{students[0]}</li>
        <li>{students[1]}</li> */}
        {
          products.map(product => <li>{product.name}</li>)
        }
      </ul>
      {/* <Product product={products[0]}></Product>
      <Product product={products[1]}></Product>
      <Product product={products[2]}></Product> */}
      {
        products.map(product => <Product product={product}></Product>)
      }
      {/* <Product name={products[1].name} price={products[1].price}></Product>
      <Product name={products[2].name} price={products[2].price}></Product> */}
      <Person name={students[0]} food="Mango"></Person>
      <Person name={students[1]} food="Apple"></Person>
      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
  
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)} disabled={count===0}>Decrease</button>
      <button onClick={handleIncrease} disabled={count===10}>Increase</button>
    </div>
  )
}
function Users() {
  const [users, setUsers] = useState([]);
useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
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
  const {name, price} = props.product;
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h1>{price}</h1>
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
