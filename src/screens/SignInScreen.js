import React from 'react';
import {StyleSheet,View,Text,ScrollView,Image,Dimensions,TextInput} from 'react-native'; 
import Flags from 'react-native-flags';
import CustomButton from '../components/CustomButton';
import Icon from 'react-native-vector-icons/FontAwesome';

const SignInScreen = (props) =>{
    return(
        <ScrollView>
            <View style={styles.sign}>
                <Image source={require('../../assets/images/signin.png')}/>
                <Text style={styles.captionText}>
                    Get Your Groceries With Nectar
                </Text>
                <View style={styles.inputText}>
                    <Flags code='IN' size={32} style={styles.flags}/>
                    <Text style={styles.countryCode}>+91</Text>
                    <TextInput keyboardType='numeric' maxLength={10} style={styles.contact}/>
                </View>
                <View>
                    <Text style={styles.text}>
                        Or connect with social media
                    </Text>
                </View>
                <CustomButton style={styles.facebook} title='Continue With Facebook' onSelect={()=>props.navigation.navigate('ProductsOverview')}>
                    <Icon name='facebook-square' size={30} color='white'/>
                </CustomButton>
                <CustomButton style={styles.google} title='Continue With Google' onSelect={()=>props.navigation.navigate('ProductsOverview')}>
                    <Icon name='google' size={30} color='white'/>
                </CustomButton>
            </View>
        </ScrollView>
    );
};

SignInScreen.navigationOptions = {
    headerShown: false
};

const styles = StyleSheet.create({
    sign:{
        flex:1,
        alignItems:'center'
    },
    captionText:{
        fontSize:30,
        fontWeight:'900',
        alignSelf:'flex-start',
        marginLeft:Dimensions.get('window').width / 15,
        marginRight:Dimensions.get('window').width / 5
    },
    inputText:{
        alignSelf:'flex-start',
        flexDirection:'row',
        marginTop: Dimensions.get('window').width /30,
        marginLeft: Dimensions.get('window').width /15,
        borderBottomWidth:3,
        borderBottomColor:'#E2E2E2',
        width:Dimensions.get('window').width / 1.2
    },
    countryCode:{
        fontSize:22,
        marginLeft:10,
        marginTop: 9
    },
    contact:{
        fontSize:22,
        color:'#030303',
    },
    flags:{
        marginTop: 9
    },
    text:{
        marginTop: Dimensions.get('window').width /20
    },
    facebook:{
        backgroundColor:'#4A66AC',
        marginTop:Dimensions.get('window').width / 20,
        width:Dimensions.get('window').width / 1.3,
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    google:{
        width:Dimensions.get('window').width / 1.3,
        justifyContent:'space-evenly',
        alignItems:'center',
        marginTop:Dimensions.get('window').width / 30,
        backgroundColor:'#FF3E30'
    }
});

export default SignInScreen;