import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import SplashScreen from '../screens/SplashScreen';
import GettingStartedScreen from '../screens/GettingStartedScreen';
import SignInScreen from '../screens/SignInScreen';
import ProductsOverviewScreen from '../screens/ProductsOverviewScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import ExploreScreen from '../screens/ExploreScreen';
import CartScreen from '../screens/CartScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import AccountScreen from '../screens/AccountScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import BeveragesScreen from '../screens/BeveragesScreen';
import VegetableScreen from '../screens/VegetableScreen';
import OilScreen from '../screens/OilScreen';
import NonvegScreen from '../screens/NonvegScreen';
import BakeryScreen from '../screens/BakeryScreen';
import DairyeggScreen from '../screens/DairyeggScreen';
import PulseScreen from '../screens/PulseScreen';
import RiceScreen from '../screens/RiceScreen';
import Colors from '../constants/Colors';

const GroceryNavigator = createStackNavigator({
    Splash: SplashScreen,
    GettingStarted:GettingStartedScreen,
    SignIn: SignInScreen
});

const ShopNavigator = createStackNavigator({
    ProductsOverview: ProductsOverviewScreen,
    ProductDetail: ProductDetailScreen
});

const ExploreNavigator = createStackNavigator({
    Explore: ExploreScreen,
    ProductsOverview: ProductsOverviewScreen,
    ProductDetail: ProductDetailScreen,
    Beverages: BeveragesScreen,
    Vegetable: VegetableScreen,
    Oil: OilScreen,
    Nonveg: NonvegScreen,
    Bakery: BakeryScreen,
    Dairyegg: DairyeggScreen,
    Pulse: PulseScreen,
    Rice: RiceScreen,
}
);

const CartNavigator = createStackNavigator({
    Cart: CartScreen,
    ProductsOverview: ProductsOverviewScreen,
}
);

const FavNavigator = createStackNavigator({
    Favorite: FavoriteScreen,
    ProductsOverview: ProductsOverviewScreen,
},
);

const AccountNavigator = createStackNavigator({
    Account: AccountScreen,
    ProductsOverview: ProductsOverviewScreen,
}
);

const TabNavigator = createMaterialBottomTabNavigator({
    Shop:{
        screen: ShopNavigator,
        navigationOptions:{
            tabBarLabel:'Shop',
            tabBarColor:'#ADD8E6',
            tabBarIcon: (tabInfo) => {
                return(
                    <Icon name='shopping-basket' size={23} color='black'/>
                );
            }
        }
    },
    Explore:{
        screen: ExploreNavigator,
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
        screen:CartNavigator,
        navigationOptions:{
            tabBarLabel:'Cart',
            tabBarColor:Colors.accent,
            tabBarIcon: (tabInfo) => {
                return(
                    <Icon 
                        name='shopping-cart' 
                        size={25} color='black' 
                    /> 
                );
            }
        }
    },
    Favorite:{
        screen:FavNavigator,
        navigationOptions:{
            tabBarLabel:'Favorite',
            tabBarColor:'red',
            tabBarIcon: (tabInfo) => {
                return(
                    <Icon name='heart' size={23} color='black'/>
                );
            }
        }
    },
    Account:{
        screen:AccountNavigator,
        navigationOptions:{
            tabBarLabel:'Account',
            tabBarColor:'gray',
            tabBarIcon:(tabInfo) => {
                return(
                    <Icon name='user' size={25} color='black'/>
                );
            }
        }
    },
    
});

const AppNavigator = createSwitchNavigator({
    Grocery: GroceryNavigator,
    Tab: TabNavigator,
}, {
    // headerMode: 'none',
    //initialRouteName: 'Grocery'
});
export default createAppContainer(AppNavigator);