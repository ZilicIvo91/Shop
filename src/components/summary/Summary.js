import React from 'react'
import './Summary.scss';

import { connect } from 'react-redux'

function Summary({ user, bagItems, total, name, email, address, city, cardNumber, cardType }) {
    console.log(user)
    return (
        <div className="summary-container">
            <h1>Summary</h1>
            <div className="summary-contant">
                <div className="summary-bag">
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
            <div className="summary-user">
                <div className="summary-element">
                    <p>Name: </p><p>{user.name}</p>
                </div>
                <div className="summary-element">
                    <p>E-mail: </p><p>{user.email} </p>
                </div>
                <div className="summary-element">
                    <p>Address: </p><p>{user.address}</p>
                </div>
                <div className="summary-element">
                    <p>City: </p><p>{user.city} </p>
                </div>
                <div className="summary-element">
                    <p>Card Type: </p><p>{user.cardType}</p>
                </div>
                <div className="summary-element">
                    <p>Card Number: </p><p>{user.cardNumber}</p>
                </div>
            </div>
                <button>Confirm</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        bagItems: state.bagItems,
        total: state.total
    }
}

export default connect(mapStateToProps)(Summary)
