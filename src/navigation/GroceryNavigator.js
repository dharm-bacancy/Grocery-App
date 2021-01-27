import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SplashScreen from '../screens/SplashScreen';
import GettingStartedScreen from '../screens/GettingStartedScreen';
import SignInScreen from '../screens/SignInScreen';
import ProductsOverviewScreen from '../screens/ProductsOverviewScreen';
//import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import ExploreScreen from '../screens/ExploreScreen';
import CartScreen from '../screens/CartScreen';
import { Text, View } from 'react-native';
import FavoriteScreen from '../screens/FavoriteScreen';
import AccountScreen from '../screens/AccountScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';

const GroceryNavigator = createStackNavigator({
    Splash: SplashScreen,
    GettingStarted:GettingStartedScreen,
    SignIn: SignInScreen,
    ProductsOverview: ProductsOverviewScreen,
    Explore: ExploreScreen,
    Cart: CartScreen,
    Favorite: FavoriteScreen,
    Account: AccountScreen,
    ProductDetail: ProductDetailScreen
});




export default createAppContainer(GroceryNavigator);