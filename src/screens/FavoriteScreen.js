import React from 'react';
import {StyleSheet,View,Text,FlatList,Button,Dimensions,ScrollView} from 'react-native';
import Colors from '../constants/Colors';
import {useSelector,useDispatch} from 'react-redux';
import FavoriteItem from '../components/FavoriteItem';
import CustomButton from '../components/CustomButton';
import * as favoriteAction from '../../store/actions/favorite';
import * as cartAction from '../../store/actions/cart';

const FavoriteScreen = props => {
    const favItems = useSelector(state =>{
        const transformedCartItems = [];
        for (const key in state.favorite.items) {
            transformedCartItems.push({
                productId: key, 
                itemTitle: state.favorite.items[key].itemTitle,
                itemPrice: state.favorite.items[key].itemPrice,
                itemImage: state.favorite.items[key].itemImage,
                itemDetail: state.favorite.items[key].itemDetail
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
                data={favItems} 
                keyExtractor={item => item.productId}
                renderItem={itemData => (
                    <FavoriteItem 
                        title={itemData.item.itemTitle} 
                        amount={itemData.item.itemPrice}
                        image={itemData.item.itemImage}
                        detail={itemData.item.itemDetail}
                    />
                )}
            />
            <View style={styles.button}>
                <CustomButton title='Add All To Cart' style={styles.customButton}/>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen:{
        margin: 20,
    },
    button:{
        justifyContent:'flex-end',
        alignItems:'center',
        paddingTop: 25
    },
    customButton:{
        alignItems:'center',
        justifyContent:'center'
    }
});

export default FavoriteScreen;