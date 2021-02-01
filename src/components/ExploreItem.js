import React from 'react';
import {View,StyleSheet,Text,Image,Button,Dimensions,ScrollView,TextInput,TouchableNativeFeedback,TouchableOpacity} from 'react-native';
import Colors from '../constants/Colors';

const ExploreItem = props =>{
    return(
        <View>
            <View style={styles.touchable}>
                <TouchableNativeFeedback useForeground>
                    <View style={styles.product}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={{uri: props.image}}/>
                        </View>
                        <View style={styles.details}>
                            <Text style={styles.title}>{props.title}</Text>
                        </View>
                    </View>
                </TouchableNativeFeedback>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    product:{
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset:{width: 0, height: 2},
        shadowRadius: 8,
        elevation:5,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 240,
        margin: 20,
        width:Dimensions.get('window').width /2.4,
        
    },
    touchable:{
        overflow:'hidden'
    },
    imageContainer:{
        width:'100%',
        height:'60%',
        borderTopLeftRadius: 10,
        borderTopRightRadius:10,
        overflow:'hidden'
    },
    image:{
        width:'100%',
        height:'100%'
    },
    title:{
        fontSize:20,
        marginVertical: 20,
        fontWeight:'bold',
        textAlign:'center',
    }
});

export default ExploreItem;