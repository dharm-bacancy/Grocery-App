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
import BeveragesScreen from '../screens/BeveragesScreen';
import VegetableScreen from '../screens/VegetableScreen';
import OilScreen from '../screens/OilScreen';
import NonvegScreen from '../screens/NonvegScreen';
import BakeryScreen from '../screens/BakeryScreen';
import DairyeggScreen from '../screens/DairyeggScreen';
import PulseScreen from '../screens/PulseScreen';
import RiceScreen from '../screens/RiceScreen';

const GroceryNavigator = createStackNavigator({
    Splash: SplashScreen,
    GettingStarted:GettingStartedScreen,
    SignIn: SignInScreen,
    ProductsOverview: ProductsOverviewScreen,
    Explore: ExploreScreen,
    Cart: CartScreen,
    Favorite: FavoriteScreen,
    Account: AccountScreen,
    ProductDetail: ProductDetailScreen,
    Beverages: BeveragesScreen,
    Vegetable: VegetableScreen,
    Oil: OilScreen,
    Nonveg: NonvegScreen,
    Bakery: BakeryScreen,
    Dairyegg: DairyeggScreen,
    Pulse: PulseScreen,
    Rice: RiceScreen
});




export default createAppContainer(GroceryNavigator);