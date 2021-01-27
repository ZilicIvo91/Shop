import React, { useEffect, useState } from 'react';
import './Bag.scss';

import { GiTrashCan } from 'react-icons/gi';
import { TOTAL, DISCOUNT_20, DISCOUNT_5, DISCOUNT_20EU } from '../../store/actions';

import { connect } from 'react-redux';
import { add, remove,dec } from '../../store/actions';
import { Link } from 'react-router-dom';


function Bag({ bagItems, add, remove, dec, total, discount, total_dis, discount20_dis,discount5_dis,discount_20EUR_dis }) {
   

    useEffect(() => {
        total_dis()
      }, [bagItems])

    const discount20 = () => {
        discount20_dis();
        setstate(!state)
    }

    const discount5 = () => {
        discount5_dis();
    }
    const discount_20EUR = () => {
        discount_20EUR_dis();
    }
    

    return (
        <div className="bag-container">
            <h1>My Bag</h1>

            <div>
                {bagItems.length === 0 && <div>Bag is Empty</div>}
               
                {bagItems.map(item =>(  
                    <div key={item.id} className="bag-row">
                        <img src={item.src} alt={item.title} />
                        <h3>{item.name}</h3>
                        <div className="bag-quantityAndButton">
                            <div className="bag-quantity">
                                <h4>{item.quantity} x {item.price.toFixed(2)} EUR</h4>
                            </div>
                            <div className="bag-quantityButton">
                                <button onClick={() => dec(item.id)}>
                                    -
                                </button>
                                <button onClick={() => add(item.id)}>
                                    +
                                </button>
                            </div>
                        </div>
                       <div className="bag-removeBtn">
                            <button onClick={(id) => remove(item.id)}>
                            <GiTrashCan fontSize="2rem" />
                            </button>
                       </div>
                    </div>
                ))}
            </div>
           
            {/* <div className="bag-discounts">
                <h3>Discounts:</h3>
                <div className="discount-buttons">
                    <div className="discount-button">
                        <button onClick={discount20} >20%</button>
                        {state && <p>{discount} EUR</p>}
                    </div>
                    <div className="discount-button">
                        <button onClick={discount5}>5%</button>
                        {state && <p>{discount} EUR</p>}
                    </div>
                    <div className="discount-button">
                        <button onClick={discount_20EUR}>-20 €</button>
                        {state && <p>{discount} EUR</p>}
                    </div>
                </div>
            </div> */}
            <h1 className="total">TOTAL: {total} EUR</h1>

            <button className="button-goToCheck">
                <Link to='checked'>Go to checkout</Link>
            </button>
        </div>
    )
}
const mapStateToProps = (state) => {
    return{
       bagItems: state.bagItems,
       total: state.total,
       discount: state.discount
    }
}

const mapDispatchToProps = dispatch => {
    return{
        add: (id) => dispatch(add(id)),
        dec: (id) => dispatch(dec(id)),
        remove: (id) => dispatch(remove(id)),
        total_dis : () => dispatch({ type:TOTAL }),
        discount20_dis : () => dispatch({ type:DISCOUNT_20 }),
        discount5_dis : () => dispatch({ type:DISCOUNT_5 }),
        discount_20EUR_dis : () => dispatch({ type:DISCOUNT_20EUR })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bag);

