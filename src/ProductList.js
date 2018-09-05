import React, {Component} from 'react';
import products from './mockData';
import Product from './Product';
import {Button, Modal, Header} from 'react-bootstrap/lib';
import SingleProduct from './SingleProduct';


class ProductList extends Component {

    constructor(props){
        super(props);

        this.state = {
            products: [],
            order: 'asc',
            show: false,
            productId: null
        };

        this.handleSort = this.handleSort.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.handleToUpdate  = this.handleToUpdate.bind(this);

    }

    handleToUpdate(productID){
        this.setState({productId: productID});
        this.handleShow();
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    dynamicSort(property, type){
        const sortOrder = type === 'asc' ? -1 : 1;

        return function (a,b) {
            let result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    }

    handleSort(column) {

        const list = this.state.products.slice().sort(this.dynamicSort(column, this.state.order));

        this.setState({
            products: list,
            order: this.state.order === 'asc' ? 'desc' : 'asc'
        });
    }
    componentDidMount(){
       setTimeout(() =>  this.setState({products: products}), 1000);
    }

    render() {
        const tbody = this.state.products.map((item) =>
            <Product key={item.id} product={item} handleToUpdate = {this.handleToUpdate} />
        );
        return (
            <div className='container'>
                <table className='table'>
                    <thead className='table-header'>
                    <tr>
                        <th>
                           <span onClick={()=>this.handleSort('id')}><i className="fa fa-fw fa-sort" > </i> ID</span>
                        </th>
                        <th>
                            <span onClick={()=>this.handleSort('title')}><i className="fa fa-fw fa-sort" > </i>Title </span>
                        </th>
                        <th>
                            <span onClick={()=>this.handleSort('text')}><i className="fa fa-fw fa-sort" ></i> Text</span>
                        </th>
                        <th>#</th>
                    </tr>
                    </thead>
                    <tbody>
                    {tbody}
                    </tbody>
                </table>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <SingleProduct productId={this.state.productId}/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )

    }

}

export default ProductList;

