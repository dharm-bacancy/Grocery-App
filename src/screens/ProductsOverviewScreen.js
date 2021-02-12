import React from 'react';
import {View, Text,FlatList,TextInput,StyleSheet,Image,ScrollView,Dimensions} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ProductItem from '../components/ProductItem';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Colors from '../constants/Colors';
import ExploreScreen from '../screens/ExploreScreen';
import CartScreen from '../screens/CartScreen';
import FavouriteScreen from './FavoriteScreen';
import AccountScreen from '../screens/AccountScreen';
import * as cartAction from '../../store/actions/cart';
import * as Animatable from 'react-native-animatable';

const ProductsOverviewScreen = props =>{
    const products = useSelector(state => state.products.userProducts);
    const productsBest = useSelector(state => state.products.selectedProducts);
         const dispatch = useDispatch();
    return(
        <View>
            <ScrollView>
                <Animatable.View animation='slideInRight' duration={2000} style={styles.textInput}>
                    <Icon name='search' size={20} color='black'/>
                    <TextInput placeholder='Search Store' style={styles.text}/>
                </Animatable.View>
                <Image source={{uri:'https://cdn.grabon.in/gograbon/images/web-images/uploads/1593767938443/groceries-offers.jpg'}} style={styles.image}/>
                <ScrollView>
                    <Text style={styles.title}>Exclusive Offer</Text>
                    <FlatList
                        horizontal
                        //numColumns={2}
                        data={products}
                        renderItem={itemData => (
                            <ProductItem    
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
                    <Text style={styles.title}>Best Selling</Text>
                    <View style={styles.Best}>
                        <FlatList
                            horizontal
                            data={productsBest}
                            renderItem={itemData => (
                                <ProductItem
                                    image={itemData.item.imageUrl}
                                    title={itemData.item.title}
                                    detail={itemData.item.detail}
                                    price={itemData.item.price}
                                    onViewDetail = {() =>{
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
                    </View>
                </ScrollView>
            </ScrollView>
        </View>
    );
    
};

const styles = StyleSheet.create({
    title:{
        fontSize:22,
        fontWeight:'bold',
        marginTop: 5,
        marginLeft: 20
    },
    image:{
        width:'100%',
        height:'18%'
    },
    Best:{
        marginBottom:Dimensions.get('window').width /2
    },
    textInput:{
        width:Dimensions.get('window').width / 1.2,
        height:48,
        backgroundColor:'#F5F5F5',
        marginVertical:20,
        alignItems:'center',
        marginHorizontal:33,
        shadowColor: 'white',
        shadowOpacity: 0.26,
        shadowOffset:{width: 0, height: 2},
        elevation:5,
        borderRadius: 14,
        flexDirection:'row',
        paddingLeft:15
    },
    text:{
        fontSize: 18,
        paddingLeft: 10
    }
});

ProductsOverviewScreen.navigationOptions = {
    headerShown: false
};

export default ProductsOverviewScreen;