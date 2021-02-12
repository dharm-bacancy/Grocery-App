import React from 'react';
import {View,StyleSheet,Text,FlatList,ScrollView,TouchableOpacity} from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import DairyeggItem from '../components//DairyeggItem';
import * as cartAction from '../../store/actions/cart';
import Icon from 'react-native-vector-icons/Entypo';

const DairyeggScreen = props =>{
    const products = useSelector(state => state.products.dairyEggProducts);
    const dispatch = useDispatch();
    return(
        <View>
            <ScrollView>
                <FlatList
                    numColumns={2}
                    data={products}
                    renderItem={itemData => (
                        <DairyeggItem
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

DairyeggScreen.navigationOptions = navData =>{
    return{
        headerTitle: 'Dairy & Eggs',
        headerRight:(
            <TouchableOpacity onPress={() =>{}}>
                <Icon name='list' size={25} color='black'/>
            </TouchableOpacity>
        )
    };
};

export default DairyeggScreen;