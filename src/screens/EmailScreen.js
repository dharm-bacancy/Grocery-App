import React from 'react';
import {StyleSheet,View,Text,ScrollView,KeyboardAvoidingView,Button,ActivityIndicator,Alert} from 'react-native';
import Card from '../components/UI/Card';
import Input from '../components/UI/Input';
import Colors from '../constants/Colors';

const EmailScreen = props => {
    return(
        <KeyboardAvoidingView
            behavior='padding'
            keyboardVerticalOffset={50}
            style={styles.screen}
        >
            <Card style={styles.authContainer}>
                <ScrollView>
                    <Input
                        id='email'
                        label='E-Mail'
                        keyboardType='email-address'
                        required
                        email
                        autoCapitalized='none'
                        errorText='Please enter valid email address'
                        //onInputChange={inputChageHandler}
                        initialValue=''
                    />
                    <Input
                        id='password'
                        label='Password'
                        keyboardType='default'
                        secureTextEntry
                        required
                        minLength={5}
                        autoCapitalized='none'
                        errorText='Please enter valid password'
                        //onInputChange={inputChageHandler}
                        initialValue=''
                    />
                    <View style={styles.buttonContainer}>
                        {/* {isloading ? (
                            <ActivityIndicator size='small' color={Colors.primary}/>
                        ) : ( */}
                            <Button 
                                // title={isSignup ? 'Sign up' : 'Login'} 
                                title='Login'
                                color={Colors.primary} 
                                //onPress={authHandler}
                            />
                        {/* )} */}
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button 
                            // title={`Switch to ${isSignup ? 'Login' : 'Sign Up'}`} 
                            title='Signup'
                            color={Colors.accent} 
                            // onPress={()=>{
                            //     setIsSignup(prevState => !prevState);
                            // }}
                        />
                    </View>
                </ScrollView>
            </Card>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'pink'
    },
    authContainer:{
        width:'80%',
        maxWidth:400,
        maxHeight: 400,
        padding:20
    },
    buttonContainer:{
        marginTop: 10
    }
});

export default EmailScreen;