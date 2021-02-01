import PRODUCTS from '../../data/dummy-data';

const initialState = {
    availableProducts: PRODUCTS,
    selectedProducts:PRODUCTS.filter(prod => prod.ownerId === 'u2'),
    userProducts: PRODUCTS.filter(prod => prod.ownerId === 'u1'),
    exploreProducts: PRODUCTS.filter(prod => prod.ownerId === 'u4')
};

export default(state = initialState, action) => {
    return state;
};
