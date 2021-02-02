import React from 'react';
import {View,StyleSheet,Text,FlatList,ScrollView} from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import RiceItem from '../components/RiceItem';
import * as cartAction from '../../store/actions/cart';


const RiceScreen = props =>{
    const products = useSelector(state => state.products.riceProducts);
    const dispatch = useDispatch();
    return(
        <View>
            <ScrollView>
                <FlatList
                    numColumns={2}
                    data={products}
                    renderItem={itemData => (
                        <RiceItem
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

export default RiceScreen;