import React, {Component} from 'react';
import products from './mockData';
import Product from './Product';

class ProductList extends Component {

    constructor(props){
        super(props);

        this.state = {
            products: [],
            order: 'asc'
        };
        this.handleSort = this.handleSort.bind(this);
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
        console.log('componentDidMount');
       setTimeout(() =>  this.setState({products: products}), 1000);


    }

    render() {
        const tbody = this.state.products.map((item) => <Product key={item.id} product={item}/>);
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
            </div>
        )

    }

}

export default ProductList;

