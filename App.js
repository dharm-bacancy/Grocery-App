import React from 'react';
import GroceryNavigator from './src/navigation/GroceryNavigator';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import productsReducer from './store/reducers/products';

const rootReducer = combineReducers({
  products: productsReducer
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