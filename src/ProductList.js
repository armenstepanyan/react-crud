import React, {Component} from 'react';
import PropTypes from 'prop-types';
import products from './mockData';

class ProductList extends Component {

    constructor(props){
        super(props);
        this.state = {products: []};
    }

    componentDidMount(){
        console.log('componentDidMount');
       setTimeout(() =>  this.setState({products: products}), 1000);


    }

    render() {
        const tbody = this.state.products.map((item, index) => <tr key={index}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.text}</td>
        </tr>);
        return (
            <div className='container'>
                <table className='table'>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                    {tbody}
                    </tbody>
                </table>
            </div>
        )

    }

}

export default ProductList;

