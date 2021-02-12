import React from 'react';
import {View,Text,StyleSheet,Button,Image,Dimensions,TouchableNativeFeedback,ScrollView,TouchableOpacity} from 'react-native';
import Colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomButton from '../components/CustomButton';


const ProductDetail = props => {
    return(
        <View>
            <ScrollView>
                <Image style={styles.image} source={{uri: props.image}}/>
                <View style={styles.title}>
                    <Text style={styles.fontTitle}>{props.title}</Text>
                    <TouchableOpacity onPress={props.onAddToFavorite} >
                        <Icon name='heart-o' size={27} color='gray'/> 
                    </TouchableOpacity>
                </View>
                <Text style={styles.detailText}>{props.detail}</Text>
                <View style={styles.price}>
                    <Text style={styles.priceText}>${props.price}</Text>
                </View>
                <View style={styles.description}>
                    <Text style={styles.productDetail}>Product Detail</Text>
                    <Text style={styles.descriptionText}>{props.description}</Text>
                </View>
                <View style={styles.customButton}>
                    <TouchableNativeFeedback>
                        <Button title='Add To Basket' onPress={props.onAddToCart} color={Colors.primaryColor}/>
                    </TouchableNativeFeedback>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    image:{
        width: '100%',
        height: 300
    },
    fontTitle:{
        fontSize:25,
        fontWeight:'bold'
    },
    title:{
        justifyContent:'space-between',
        flexDirection:'row',
        marginTop:15,
        marginHorizontal: Dimensions.get('window').width / 20
    },
    detailText:{
        fontSize: 17,
        color:'gray',
        fontWeight:'900',
        marginLeft:Dimensions.get('window').width / 20
    },
    priceText:{
        fontSize: 24,
        fontWeight:'bold',
        textAlign:'right',
    },
    price:{
        marginHorizontal: Dimensions.get('window').width / 20,
        marginTop:Dimensions.get('window').width / 25,
        justifyContent:'space-between',
        alignItems:'flex-end'
    },
    description:{
        marginHorizontal: Dimensions.get('window').width / 20,
        marginTop:Dimensions.get('window').width / 20
    },
    productDetail:{
        fontSize:18,
        fontWeight:'bold'
    },
    descriptionText:{
        fontSize:16,
        color:'gray'
    },
    customButton:{
        marginTop:Dimensions.get('window').width / 7,
        width: Dimensions.get('window').width / 1.5,
        height: Dimensions.get("window").height /15 ,
        marginLeft: Dimensions.get('window').width /6,
        borderRadius: 19
    }
});

export default ProductDetail;