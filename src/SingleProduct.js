import React, {Component} from 'react';

class SingleProduct extends Component {

    render() {
        return (
            <div>
                Current product id: {this.props.productId}
            </div>

        );
    }

}


export default SingleProduct;

