import React from 'react';
import store from '../index.js';

class ProductList extends React.Component {

    state = {
        products: [],
    }

    componentDidMount() {
        console.log('products', store.getState().products);
        this.state.products.setState(store.getState().products);
    }

    productDetails = null;

    if (this.props.products && this.props.products.length > 0) {
        productDetails = this.props.products.map((p,i) => {
            return  <ProductDetail 
                showAddButton = {true}
                addToCart={this.props.addItemToCart}
                key={i} 
                product={p} />
            });
    } else {
        productDetails = "No products available";
    }

    render() {
        return (
            <div>
                {productDetails}
            </div>
        )
        
    }
}