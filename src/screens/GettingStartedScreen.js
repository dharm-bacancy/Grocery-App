import React from 'react';
import {View,StyleSheet,Text,ImageBackground,Image,Dimensions} from 'react-native';
import CustomButton from '../components/CustomButton';

const GettingStartedScreen = (props) => {
    return(
        <View style={{flex:1}}>
            <ImageBackground style={styles.background} source={require('../../assets/images/background.jpg')}>
                <View style={styles.container}>
                    <Image source={require('../../assets/images/Group.png')}/>
                    <Text style={styles.welcomeText} numberOfLines={2}>
                        Welcome To Our Store
                    </Text>
                    <Text style={styles.captionText}>
                        Get your groceries in as fast as one hour
                    </Text>
                    <CustomButton title='Get Started' style={styles.buttonCompo} onSelect={()=>props.navigation.navigate('SignIn')}/>
                </View>
            </ImageBackground>
        </View>
    );
};

GettingStartedScreen.navigationOptions = {
    headerShown:false
};

const styles = StyleSheet.create({
    background:{
        width:'100%',
        height:'100%'
    },
    container:{
        alignItems:'center',
        justifyContent:'flex-end',
        flex:1,
        marginBottom:Dimensions.get('window').height/10
    },
    welcomeText:{
        fontSize:45,
        textAlign:'center',
        color:'white',
        fontWeight:'900'
    },
    captionText:{
        color:'rgba(252, 252, 252, 0.7)',
        fontSize:18
    },
    buttonCompo:{
        marginTop: Dimensions.get("window").height / 25,
    }
});

export default GettingStartedScreen;