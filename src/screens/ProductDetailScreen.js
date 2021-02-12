import React,{useReducer} from 'react';
import {View,StyleSheet} from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import Colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomButton from '../components/CustomButton';
import * as favoriteAction from '../../store/actions/favorite';
import * as cartAction from '../../store/actions/cart';
import ProductDetail from '../components/ProductDetail';

const ProductDetailScreen = props =>{
    const dispatch = useDispatch();
    const productId = props.navigation.getParam('productId');
    const selectedProduct = useSelector(state => 
        state.products.availableProducts.find(prod => prod.id === productId)    
    );
    const products = useSelector(state => state.products.availableProducts);
    return(
        <View>
            <ProductDetail
                image={selectedProduct.imageUrl}
                title={selectedProduct.title}
                onAddToFavorite = {()=>{
                    dispatch(favoriteAction.addToFavorite(selectedProduct));
                }} 
                detail={selectedProduct.detail}
                price = {selectedProduct.price}
                description={selectedProduct.description}
                onAddToCart={() =>{
                    dispatch(cartAction.addToCart(selectedProduct));
                }}
            />
        </View>
    );
};

ProductDetailScreen.navigationOptions = {
    headerShown: false
};

const styles = StyleSheet.create({
    
});

export default ProductDetailScreen;