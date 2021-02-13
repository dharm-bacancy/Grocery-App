import React from 'react';
import {StyleSheet,View,Text,FlatList,Button,Dimensions,ScrollView} from 'react-native';
import Colors from '../constants/Colors';
import {useSelector,useDispatch} from 'react-redux';
import CartItem from '../components/CartItem';
import CustomButton from '../components/CustomButton';
import * as cartAction from '../../store/actions/cart';

const CartScreen = props => {
    const cartTotalAmount = useSelector(state => state.cart.totalAmount); 
    const cartItems = useSelector(state =>{
        const transformedCartItems = [];
        for (const key in state.cart.items) {
            transformedCartItems.push({
                productId: key,
                productTitle: state.cart.items[key].productTitle,
                productPrice: state.cart.items[key].productPrice,
                quantity: state.cart.items[key].quantity,
                sum: state.cart.items[key].sum,
                productImage: state.cart.items[key].productImage
            });
        }

        return transformedCartItems.sort((a,b) => 
            a.productId > b.productId ? 1: -1
        );
    });
    const dispatch = useDispatch();
    
    return(

        <ScrollView style={styles.screen}>
            <FlatList 
                data={cartItems} 
                keyExtractor={item => item.productId}
                renderItem={itemData => (
                    <CartItem 
                        quantity={itemData.item.quantity} 
                        title={itemData.item.productTitle} 
                        amount={itemData.item.sum}
                        image={itemData.item.productImage}
                        onRemove={()=>{
                            dispatch(cartAction.removeFromCart(itemData.item.productId));
                        }}
                        onAddItems = {()=>{
                            dispatch(cartAction.addItems(itemData.item.productId));
                        }} 
                    />
                )}
            />
            <View style={styles.button}>
                <CustomButton title='Go to Checkout' style={styles.customButton}>
                    <Text style={styles.summaryText}>
                        <Text style={styles.amount}>${cartTotalAmount.toFixed(2)}</Text>
                    </Text>
                </CustomButton>
            </View>
        </ScrollView>
    );
};

CartScreen.navigationOptions = {
    headerTitle: 'My Cart'
};

const styles = StyleSheet.create({
    screen:{
        margin: 20,
    },
    summaryText:{
        fontFamily:'OpenSans-Bold',
        fontSize: 16,
        marginRight:25,
        marginLeft: 6
    },
    amount:{
        color: Colors.primary,
    },
    button:{
        justifyContent:'flex-end',
        alignItems:'center',
    },
    customButton:{
        alignItems:'center',
        justifyContent:'flex-start',
        marginTop: 25
    }
});

CartScreen.navigationOptions ={
    headerTitle:"My Cart"
};

export default CartScreen;