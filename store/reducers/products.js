import PRODUCTS from '../../data/dummy-data';

const initialState = {
    availableProducts: PRODUCTS,
    selectedProducts:PRODUCTS.filter(prod => prod.ownerId === 'u2'),
    userProducts: PRODUCTS.filter(prod => prod.ownerId === 'u1'),
    beveragesProducts: PRODUCTS.filter(prod => prod.pId === 'x6'),
    vegetableProducts: PRODUCTS.filter(prod => prod.pId === 'x1'),
    oilProducts: PRODUCTS.filter(prod => prod.pId === 'x2'),
    nonvegProducts: PRODUCTS.filter(prod => prod.pId === 'x3'),
    bakeryProducts: PRODUCTS.filter(prod => prod.pId === 'x4'),
    dairyEggProducts: PRODUCTS.filter(prod => prod.pId === 'x5'),
    pulseProducts: PRODUCTS.filter(prod => prod.pId === 'x7'),
    riceProducts: PRODUCTS.filter(prod => prod.pId === 'x8')
};

export default(state = initialState, action) => {
    return state;
};
