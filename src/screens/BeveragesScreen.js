import React from 'react';
import {View,StyleSheet,Text,FlatList,ScrollView,TouchableOpacity} from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import BeveragesItem from '../components/BeveragesItem';
import * as cartAction from '../../store/actions/cart';
import Icon from 'react-native-vector-icons/Entypo';

const BeveragesScreen = props =>{
    const products = useSelector(state => state.products.beveragesProducts);
    const dispatch = useDispatch();
    return(
        <View>
            <ScrollView>
                <FlatList
                    numColumns={2}
                    data={products}
                    renderItem={itemData => (
                        <BeveragesItem
                            image={itemData.item.imageUrl} 
                            title={itemData.item.title}
                            detail={itemData.item.detail}
                            price={itemData.item.price}
                            onViewDetail = {()=>{
                                props.navigation.navigate('ProductDetail',{
                                    productId: itemData.item.id,
                                    productTitle: itemData.item.title
                                });
                            }}
                            onAddToCart = {()=>{
                                dispatch(cartAction.addToCart(itemData.item));
                            }} 
                        />
                    )}
                />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({});

BeveragesScreen.navigationOptions =navData =>{
    return{
        headerTitle: 'Beverages',
        headerRight:(
            <TouchableOpacity onPress={() =>{}}>
                <Icon name='list' size={25} color='black'/>
            </TouchableOpacity>
        )
    };
};

export default BeveragesScreen;