import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const AccountScreen = props => {
    return(
        <View>
            <Text>Welcome to Account!!</Text>
        </View>
    );
};

AccountScreen.navigationOptions ={
    headreTitle: 'Account'
};

export default AccountScreen;