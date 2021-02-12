import { ADD_TO_FAVORITE } from '../actions/favorite';
import FavoriteItem from '../../models/favorite-item';

const initialState = {
    items:{}
};

export default(state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVORITE:
            const favProduct = action.product;
            const favprodPrice = favProduct.price;
            const favprodTitle = favProduct.title;
            const favprodDetail = favProduct.detail;
            const favprodImage = favProduct.imageUrl;

            let favItem;

            favItem = new FavoriteItem(favprodPrice, favprodTitle, favprodDetail, favprodImage);

            return{
                ...state,
                items: {...state.items, [favProduct.id]: favItem}
            };
    }
    return state;
};