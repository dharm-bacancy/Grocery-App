import React from 'react';
import {View,Text,StyleSheet,Button,Image,Dimensions} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import Colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomButton from '../components/CustomButton';

const ProductDetailScreen = props =>{
    const productId = props.navigation.getParam('productId');
    const selectedProduct = useSelector(state => 
        state.products.availableProducts.find(prod => prod.id === productId)    
    );
    return(
        <ScrollView>
            <Image style={styles.image} source={{uri: selectedProduct.imageUrl}}/>
            <View style={styles.title}>
                <Text style={styles.fontTitle}>{selectedProduct.title}</Text>
                <Icon name='heart-o' size={27} color='gray'/>
            </View>
            <Text style={styles.detailText}>{selectedProduct.detail}</Text>
            <View style={styles.price}>
                <Text style={styles.priceText}>${selectedProduct.price}</Text>
            </View>
            <View style={styles.description}>
                <Text style={styles.productDetail}>Product Detail</Text>
                <Text style={styles.descriptionText}>{selectedProduct.description}</Text>
            </View>
            <View style={styles.customButton}>
                <CustomButton title='Add To Basket'/>
            </View>
        </ScrollView>
    );
};

ProductDetailScreen.navigationOptions = {
    headerShown: false
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
        textAlign:'right'
    },
    price:{
        marginHorizontal: Dimensions.get('window').width / 20,
        marginTop:Dimensions.get('window').width / 20
    },
    description:{
        marginHorizontal: Dimensions.get('window').width / 20,
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
        alignItems:'center',
        marginTop:Dimensions.get('window').width / 7
    }
});

export default ProductDetailScreen;