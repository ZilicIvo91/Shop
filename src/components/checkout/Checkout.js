import React from 'react'
import './Checkout.scss';


import { connect } from 'react-redux';
import UserDetails from '../userDetails/UserDetails';
import { CHECKOUT } from '../../store/actions';


function Checkout({ bagItems, total, discount, dis_checkout }) {    
    return (
        <div className="checkout-container">
            <div className="checkout">
            <h1>Checkout</h1>
            <button className="button-goToBag" onClick={() => dis_checkout()}>Edit Bag</button>
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
                <tbody>
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
                <div className="inputs">
                   <UserDetails />
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
const mapDispatchToProps = (dispatch) =>{
    return{
        dis_checkout: () => dispatch({ type: CHECKOUT })
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Checkout)
