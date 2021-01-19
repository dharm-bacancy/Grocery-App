import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SplashScreen from '../screens/SplashScreen';
import GettingStartedScreen from '../screens/GettingStartedScreen';
import SignInScreen from '../screens/SignInScreen';

const GroceryNavigator = createStackNavigator({
    Splash: SplashScreen,
    GettingStarted:GettingStartedScreen,
    SignIn: SignInScreen
});

export default createAppContainer(GroceryNavigator);