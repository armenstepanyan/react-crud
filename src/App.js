import React, { Component } from 'react';
import './App.css';
import ProductList from './ProductList';
import Navbar from './Navbar';


class App extends Component {



    render() {
        return (
          <div>
            <Navbar/>
             <ProductList />
          </div>
        );
  }
}

export default App;
