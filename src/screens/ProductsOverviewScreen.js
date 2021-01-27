import React from 'react';
import {View, Text,FlatList,TextInput,StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import ProductItem from '../components/ProductItem';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Colors from '../constants/Colors';
import ExploreScreen from '../screens/ExploreScreen';
import CartScreen from '../screens/CartScreen';
import FavouriteScreen from './FavoriteScreen';
import AccountScreen from '../screens/AccountScreen';

const ProductsOverviewScreen = props =>{
    const products = useSelector(state => state.products.availableProducts);
    return(
        <View>
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
                    />
                )}
            />
        {/* // <View style={{flexDirection:'row', flex:1}}>
        //      {products.map((itemData, index) =>             
        //         key={index}
        // </View> */}
        </View>
    );
    
};

const styles = StyleSheet.create({
    title:{
        fontSize:22,
        fontWeight:'bold',
        marginTop: 5,
        marginLeft: 20
    }
});

const TabNavigator = createMaterialBottomTabNavigator({
    Shop:{
        screen: ProductsOverviewScreen,
        navigationOptions:{
            tabBarLabel:'Shop',
            tabBarColor:'white',
            tabBarIcon: (tabInfo) => {
                return(
                    <Icon name='shopping-basket' size={25} color='black'/>
                );
            }
        }
    },
    Explore:{
        screen: ExploreScreen,
        navigationOptions:{
            tabBarLabel:'Explore',
            tabBarColor:Colors.primaryColor,
            tabBarIcon: (tabInfo) => {
                return(
                    <Icon name='search' size={25} color='black'/>
                );
            }
        }
    },
    Cart:{
        screen:CartScreen,
        navigationOptions:{
            tabBarLabel:'Cart',
            tabBarColor:Colors.accent,
            tabBarIcon: (tabInfo) => {
                return(
                    <Icon name='shopping-cart' size={25} color='black'/> 
                );
            }
        }
    },
    Favourite:{
        screen:FavouriteScreen,
        navigationOptions:{
            tabBarLabel:'Favorite',
            tabBarColor:'red',
            tabBarIcon: (tabInfo) => {
                return(
                    <Icon name='heart' size={25} color='black'/>
                );
            }
        }
    },
    Account:{
        screen:AccountScreen,
        navigationOptions:{
            tabBarLabel:'Account',
            tabBarColor:'gray',
            tabBarIcon:(tabInfo) => {
                return(
                    <Icon name='user' size={25} color='black'/>
                );
            }
        }
    }
});

ProductsOverviewScreen.navigationOptions = {
    headerShown: false
};

export default TabNavigator;