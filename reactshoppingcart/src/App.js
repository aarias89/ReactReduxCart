import React, { Component } from 'react';
import ProductList from './containers/product-list';
import SelectedItem from './containers/selected-item';
import Checkout from './components/checkout';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Shopping Cart</h1>
        </header>
        <div className="container">
          <ProductList />
        </div>
        <div className="container">
          <Checkout />
        </div>
        <div className="container">
          <SelectedItem />
        </div>
      </div>
    );
  }
}

export default App;
