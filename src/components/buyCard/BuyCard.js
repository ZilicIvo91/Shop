import React from 'react';
import Bag from '../bag/Bag';
import Products from '../products/Products';
import './BuyCard.scss';

function buyCard() {
    return (
        <div className="buyCard">
            <Products />
            <Bag />
        </div>
    )
}

export default buyCard
