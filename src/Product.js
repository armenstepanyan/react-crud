import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './css/product.css';


class Product extends Component {

    render(){
        const product = this.props.product;
        return (
            <tr>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.text && product.text.substring(0, 50)} ...</td>
                <td>
                    <button className="btn btn-primary action-btn"><i className="fa fa-pencil"></i></button>
                    <button className="btn btn-danger action-btn"><i className="fa fa-minus-circle"></i></button>
                </td>
            </tr>
        );
    }
}

Product.propTypes = {

    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string,
        text: PropTypes.string

    })
};

export default Product;