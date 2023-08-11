//For add products to cart

export const addToCart = (item) => {
    return{
        type:'ADD_TO_CART',
        payload:item,
    };
};

//To remove products from cart
export const removeFromCart = (item) =>{
    return{
        type:"REMOVE_FROM_CART",
        payload: item,
    };
};