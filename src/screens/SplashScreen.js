import React from 'react';
import {StyleSheet,View,Text,Image} from 'react-native';
import Colors from '../constants/Colors';

const SplashScreen = (props) =>{
    setTimeout(() => {
        props.navigation.replace('GettingStarted');
    },1500);
    return(
        <View style={styles.container}>
            <Image source={require('../../assets/images/groceries.jpg')}/>
        </View>
    );
};

SplashScreen.navigationOptions ={
    headerShown: false
};
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: Colors.primaryColor,
        width: '100%',
        height: '100%',
        alignItems:'center',
        justifyContent:'center'
    }
});

export default SplashScreen;