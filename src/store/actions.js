export const ADD = "ADD";
export const REMOVE = "REMOVE";
export const DECREMENT = "DECREMENT";
export const TOTAL ="TOTAL";
export const DISCOUNT_20 = "DISCOUNT_20"
export const DISCOUNT_5 = "DISCOUNT_5"
export const DISCOUNT_20EUR = "DISCOUNT_20EUR"
export const CHECKOUT = "CHECKOUT"

export const NAME = "NAME"
export const EMAIL = "E_MAIL"
export const ADDRESS = "ADDRESS"
export const CITY = "CITY"
export const CARD_TYPE = "CARD_TYPE"
export const CARD_NUMBER = "CARD_NUMBER"


export const add = (itemId) => {
    return{
        type: ADD,
        payload: {
            id:itemId
        }
    }
}

export const remove = (itemId) => {
    return {
        type: REMOVE,
        payload:{
            id:itemId
        }
    }
}

export const dec = (itemId) => {
    return {
        type: DECREMENT,
        payload:{
            id:itemId
        }
    }
}