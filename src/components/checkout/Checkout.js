import React from 'react'
import './Checkout.scss';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


function Checkout({ bagItems, total, discount }) {    
    return (
        <div className="checkout-container">
            <div className="checkout">
            <button className="button-goToBag">
                <Link to='/'>Edit bag</Link>
            </button>
            <div className="table">
            <table>
                <thead> 
                    <tr> 
                        <th>Image</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Product Price</th>
                    </tr>
                </thead>
                {bagItems.map(item =>(     
                <tbody key={item.id}>
                    <tr>
                        <th><img src={item.src} alt={item.title} style={{ width:"100px"}} /></th>
                        <th>{item.name}</th>
                        <th>{item.quantity}</th>
                        <th>{item.price}</th>
                    </tr>
                </tbody>
            ))}
            </table> 
            </div>   
                <div className="checkout-total">
                    {/* <div className="checkout-discount">
                        <p>Discount:</p>
                        <p>{discount} EURO</p>
                    </div> */}
                    <div className="checkout-discount">
                        <p>Total:</p>
                        <p>{total} EURO</p>
                    </div>
                </div>
                </div>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        bagItems: state.bagItems,
        total: state.total,
        discount: state.discount
    }
}


export default connect(mapStateToProps)(Checkout)
