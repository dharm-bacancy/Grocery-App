import React from 'react';
import GroceryNavigator from './src/navigation/GroceryNavigator';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import productsReducer from './store/reducers/products';
import cartReducer from './store/reducers/cart';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer);

const App = () =>{
  return (
    <Provider store={store}>
      <GroceryNavigator/>
    </Provider>
  );
};

export default App;