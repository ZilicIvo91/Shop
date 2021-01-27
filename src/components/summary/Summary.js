import React from 'react'
import './Summary.scss';

import { connect } from 'react-redux'
import Checkout from '../checkout/Checkout';
import { Link } from 'react-router-dom';

function Summary({ user }) {
    return (
        <div className="summary-container">
            <h1>Summary</h1>
            <div className="summary-content">
            <div className="summary-bag">
                    <Checkout />
                </div>
                <div className="summary-user">
                <h3>User data:</h3>
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
            </div>
                <button className="confirm">
                    <Link to='/'>Confirm</Link>
                </button>
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
