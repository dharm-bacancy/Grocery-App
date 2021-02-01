import {ADD_ITEMS, ADD_TO_CART, REMOVE_FROM_CART} from '../actions/cart';
import CartItem from '../../models/cart-item';

const initialState = {
    items:{},
    totalAmount : 0
};

export default(state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const addedProduct = action.product;
            const prodPrice = addedProduct.price;
            const prodTitle = addedProduct.title;
            const prodImage = addedProduct.imageUrl;

            let updatedOrNewcartItem;

            if (state.items[addedProduct.id]) {
                updatedOrNewcartItem = new CartItem(
                    state.items[addedProduct.id].quantity + 1,
                    prodPrice,
                    prodTitle,
                    state.items[addedProduct.id].sum + prodPrice,
                    prodImage
                );
            } else{
                updatedOrNewcartItem = new CartItem(1, prodPrice, prodTitle, prodPrice, prodImage);
            }
            return{
                ...state,
                items: { ...state.items, [addedProduct.id]: updatedOrNewcartItem},
                totalAmount: state.totalAmount + prodPrice
            };
        
        case REMOVE_FROM_CART:
            const selectedCartItem = state.items[action.pid];
            const currentQty = selectedCartItem.quantity;
            let updateCartItems;
            if (currentQty > 1) {
                const updateCartItem = new CartItem(
                    selectedCartItem.quantity - 1,
                    selectedCartItem.productPrice,
                    selectedCartItem.productTitle,
                    selectedCartItem.sum - selectedCartItem.productPrice,
                    selectedCartItem.productImage
                );
                updateCartItems = {...state.items, [action.pid]: updateCartItem};
            } else{
                updateCartItems = {...state.items};
                delete updateCartItems[action.pid];
            }
            return{
                ...state,
                items: updateCartItems,
                totalAmount: state.totalAmount - selectedCartItem.productPrice
            };

        case ADD_ITEMS:
            const selectedItem = state.items[action.pid];
            const currentQuantity = selectedItem.quantity;
            let updateItems;

            if (currentQuantity >= 1) {
                const updateItem = new CartItem(
                    selectedItem.quantity + 1,
                    selectedItem.productPrice,
                    selectedItem.productTitle,
                    selectedItem.sum + selectedItem.productPrice,
                    selectedItem.productImage
                );
                updateItems = {...state.items, [action.pid]: updateItem};
             } else{
                //updateItem = new CartItem(1, selectedItem.productPrice, selectedItem.productTitle, selectedItem.productPrice, selectedItem.productImage);
                updateItems = {...state.items};
            }
            return{
                ...state,
                items: updateItems,
                totalAmount: state.totalAmount + selectedItem.productPrice
            };
    }
    return state;
};