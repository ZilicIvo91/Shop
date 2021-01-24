import React from 'react';
import './Products.scss';
import Product from "./product/Product"

import { connect } from 'react-redux';


function Products({ products, onAdd }) {
    return (
        <div className="products-container">
            {products.map(product => (
                <Product key={product.id} product={product} onAdd={onAdd} />
            ))} 
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(Products);
