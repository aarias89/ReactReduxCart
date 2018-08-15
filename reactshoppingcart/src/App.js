import React, { Component } from 'react';
import ProductList from './containers/product-list';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Shopping Cart</h1>
        </header>
        <ProductList />

      </div>
    );
  }
}

export default App;
