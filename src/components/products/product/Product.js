import React from 'react'
import './Product.scss';


import { connect } from 'react-redux';
import { add } from '../../../store/actions';

function Product({ product, add }) {
    return (
        <div className="Product-container">
            <div className="Product-img">
              <img src={product.src} alt={product.alt}/>
            </div>
            <div className="Product-text">
                <h2>{product.name}</h2>
                <h3>Price: EUR {product.price} </h3>
                <button onClick={() => add(product.id)}>Add to bag</button> 
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        add: (id) => dispatch(add(id))
    }
}

export default connect(null, mapDispatchToProps)(Product);
