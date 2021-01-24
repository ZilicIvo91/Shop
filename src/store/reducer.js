import * as actions from './actions';
import { AllProducts, ProductRules } from '../helpers/allProducts';


const initialState = {
    products: AllProducts,
    bagItems: [],
    total: 0,
    discount:0,
    checkout:false,
    name:"",
    email:"",
    address:"",
    city:"",
    cardType:"",
    cardNumber:""
}


const reducer = ( state = initialState, action ) => {
    if(action.type === actions.ADD){    
        const item = state.products.find((prod) => prod.id === action.payload.id);

        const exist = state.bagItems.find((item) =>
            item.id === action.payload.id ? true : false
        );

        return {
            ...state,
            bagItems: exist
            ? state.bagItems.map((item) => 
            item.id === action.payload.id
                ? {...item, quantity: item.quantity + 1}
                :item
            )
            : [...state.bagItems, {...item, quantity: 1 }], 
        }
    }

    if(action.type === actions.DECREMENT){
        const exist = state.bagItems.find((item) =>
            item.id === action.payload.id);
        
        return {
            ...state,
            bagItems: (exist.quantity !== 1)
            ? 
            state.bagItems.map((item) => 
            item.id === action.payload.id
                ? {...item, quantity: item.quantity - 1}
                :item
            )
            : state.bagItems
        }
    }
    
    if(action.type === actions.REMOVE){
        return{
            ...state,
            bagItems: state.bagItems.filter(item => item.id !== action.payload.id)
        }
    }

    if(action.type === actions.TOTAL){
        let total = 0.00;
        ProductRules.forEach(productRule => {
            let itemsMatching = state.bagItems.filter(item => item.id === productRule.productId);
            if(itemsMatching.length > 0){
                total += Math.floor(itemsMatching[0].quantity / productRule.quantity) * productRule.price 
                + (itemsMatching[0].quantity % productRule.quantity) * itemsMatching[0].price;
            }        
        });

        let productRuleIds = ProductRules.map(x => x.productId);
        for(let i = 0; i < state.bagItems.length; i++){
            if(!productRuleIds.includes(state.bagItems[i].id)) {
                total += state.bagItems[i].price * state.bagItems[i].quantity;
            }
        }
        total.toFixed(2)
        return{
            ...state,
            total: total
        }
    }

    if(action.type === actions.DISCOUNT_20){
        let discount = (state.total*0.2).toFixed(2);
       
        return {
            ...state,
            discount:discount,
            total:state.total - discount
        }
    }

    if(action.type === actions.DISCOUNT_5){
        let discount = (state.total*0.05).toFixed(2);

        return {
            ...state,
            discount:discount,
            total:state.total - discount
        }
    }

    if(action.type === actions.DISCOUNT_20EUR){
        let discount = (state.total-20).toFixed(2);

        return {
            ...state,
            total:discount
        }
    }

    if(action.type === actions.CHECKOUT){
        return{
            ...state,
            checkout: !state.checkout
        }
    }

    if(action.type === actions.NAME){
        return{
            ...state,
            name: action.name,
        }
    }
    if(action.type === actions.EMAIL){
        return{
            ...state,
            email: action.email,
        }
    }
    if(action.type === actions.ADDRESS){
        return{
            ...state,
            address: action.address,
        }
    }
    if(action.type === actions.CITY){
        return{
            ...state,
            city: action.city,
        }
    }
    if(action.type === actions.CARD_TYPE){
        return{
            ...state,
            cardType: action.cardType,
        }
    }
    if(action.type === actions.CARD_NUMBER){
        return{
            ...state,
            cardNumber: action.cardNumber,
        }
    }

    


    return state
}

export default reducer;