import React from 'react';
import {View,StyleSheet,Text,Image,Button,Dimensions,ScrollView} from 'react-native';
import Colors from '../constants/Colors';
import CustomButton from '../components/CustomButton';
import Icon from 'react-native-vector-icons/Entypo';

const ProductItem = props =>{
    return(
        <View style={styles.product}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri: props.image}}/>
            </View>
            <View style={styles.details}>
                <Text style={styles.title}>{props.title}</Text>
            </View>
            <View style={styles.actions}>
                <Text style={styles.price}>${props.price.toFixed(2)}</Text>
                <CustomButton style={styles.addButoon}>
                    <Icon name='plus' size={30} color='white'/>
                </CustomButton>
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
        height: 290,
        margin: 20,
        width:Dimensions.get('window').width /2.4,
        
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
        fontSize:18,
        marginVertical: 4
    },
    price:{
        fontSize: 20,
        color:'#888'
    },
    actions:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignContent:'center',
        //height:'25%',
        paddingHorizontal:20,
        //marginBottom:Dimensions.get('window').width /20
    },
    details:{
        padding:10,
        alignItems:'center',
        height:'15%'
    },
    addButoon:{
        width: Dimensions.get('window').width / 10,
        height:Dimensions.get('window').width /9
    }
});

export default ProductItem;