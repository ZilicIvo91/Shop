import React from 'react'
import './Checked.scss';

import Checkout from '../checkout/Checkout'
import UserDetails from '../userDetails/UserDetails'


function Checked() {
    return (
        <div className="checked-container">
            <Checkout />
            <UserDetails />
        </div>
    )
}

export default Checked
