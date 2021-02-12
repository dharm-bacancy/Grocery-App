import React from 'react';
import {View,StyleSheet,Text,FlatList,ScrollView,TouchableOpacity} from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import NonvegItem from '../components//NonvegItem';
import * as cartAction from '../../store/actions/cart';
import Icon from 'react-native-vector-icons/Entypo';

const NonvegScreen = props =>{
    const products = useSelector(state => state.products.nonvegProducts);
    const dispatch = useDispatch();
    return(
        <View>
            <ScrollView>
                <FlatList
                    numColumns={2}
                    data={products}
                    renderItem={itemData => (
                        <NonvegItem
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

NonvegScreen.navigationOptions =navData => {
    return{
        headerTitle: 'Meat & Fish',
        headerRight:(
            <TouchableOpacity onPress={() =>{}}>
                <Icon name='list' size={25} color='black'/>
            </TouchableOpacity>
        )
    };
};

export default NonvegScreen;