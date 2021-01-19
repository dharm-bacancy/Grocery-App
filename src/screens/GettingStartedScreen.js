import React from 'react';
import {StyleSheet,View,Text,Image,ImageBackground,Dimensions} from 'react-native';
import CustomButton from '../components/CustomButton';

const GettingStartedScreen = props => {
    return(
        <View style={{flex:1}}>
            <ImageBackground 
                style={styles.background}
                source={require('../../assets/images/background.jpg')}
            >
                <View style={styles.container}>
                    <Image source={require('../../assets/images/Group.png')}/>
                    <View style={styles.welcomeTextContainer}>
                        <Text style={styles.welcomeText} numberOfLines={2}>
                            Welcome to our store
                        </Text>
                    </View>
                    <View style={styles.captionTextContainer}>
                        <Text style={styles.captionText}>
                        Get your groceries in as fast as one hour
                        </Text>
                    </View>
                    <CustomButton
                        title="Get Started"
                        style={styles.button}
                        onSelect={() => {
                            props.navigation.navigate("SignIn");
                        }}
                    />
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    background:{
        flex:1,
        width:'100%',
        height:'100%'
    },
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'flex-end',
        marginBottom: Dimensions.get('window').height / 15
    },
    welcomeTextContainer:{
        marginTop: Dimensions.get('window').height / 50,
        height: 80,
        width:'70%'
    },
    welcomeText:{
        fontWeight:'600',
        fontSize: 40,
        textAlign: 'center',
        color:'white',
        fontFamily:'Gilroy-Regular'
    },
    captionTextContainer: {
        marginTop: Dimensions.get("window").height / 25,
        height: 15,
        width: "90%",
    },
    captionText: {
        fontFamily: "Gilroy-Medium",
        fontSize: 16,
        textAlign: "center",
        color: "rgba(252, 252, 252, 0.7)",
    },
    button: {
        marginTop: Dimensions.get("window").height / 15,
        width: Dimensions.get("window").width / 1.2,
    }
});

export default GettingStartedScreen;