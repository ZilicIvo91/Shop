import React from 'react';
import './UserDetails.scss';
import { connect } from 'react-redux';
import { NAME, EMAIL,ADDRESS, CARD_TYPE, CARD_NUMBER, CITY } from '../../store/actions';
import { Link } from 'react-router-dom';


function UserDetails({ name_dis, cardNumber_dis, cardType_dis, city_dis, address_dis, email_dis, user }) {
    return (
        <div className="userDetails-container">
            <div>
             <form>
                <div className="userDetails">
                    <div className="userDetails">
                        <label>Name:</label>
                        <input 
                            type="text" 
                            placeholder="Enter your name" 
                            value={user.name} 
                            onChange={(e) => name_dis(e.target.value)} 
                            required />
                    </div>
                    <div className="userDetails">
                        <label>E-mail:</label>
                        <input 
                            type="email" 
                            placeholder="Enter your e-mail"
                            onChange={(e) => email_dis(e.target.value)}
                            value={user.email} 
                            required />
                    </div>
                    <div className="userDetails">
                        <label>Your address:</label>
                        <input 
                            type="text" 
                            placeholder="Enter your address"
                            value={user.address}
                            onChange={(e) => address_dis(e.target.value)} 
                            required />
                    </div>
                    <div className="userDetails">
                        <label>City:</label>
                        <input 
                            type="text" 
                            placeholder="Enter your city"
                            value={user.city}
                            onChange={(e) => city_dis(e.target.value)} 
                            required />
                    </div>
                    <div className="userDetails">
                        <label>Card type</label>
                        <select onChange={(e) => cardType_dis(e.target.value)}>
                            <option value={user.cardType}>{user.cardType}</option>
                            <option value="Maestro">Maestro</option>
                            <option value="MasterCard">MasterCard</option>
                            <option value="Visa">Visa</option>
                        </select>
                    </div>
                    <div className="userDetails">
                            <label>Card number:</label>
                            <input 
                                type="number" 
                                placeholder="Enter your Card number"
                                value={user.cardNumber}
                                onChange={(e) => cardNumber_dis(e.target.value)} />
                    </div>  
                   <button>
                        <Link to='/summary'>Go to summary</Link>
                    </button> 
                    </div>            
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return{
        name_dis: (value) => dispatch ({type: NAME, name: value}),
        email_dis: (value) => dispatch ({type: EMAIL , email: value}),
        address_dis: (value) => dispatch ({type: ADDRESS, address: value}),
        city_dis: (value) => dispatch ({type: CITY, city: value}),
        cardType_dis: (value) => dispatch ({type: CARD_TYPE, cardType: value}),
        cardNumber_dis: (value) => dispatch ({type: CARD_NUMBER, cardNumber: value}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (UserDetails)
