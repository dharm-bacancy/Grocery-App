import React from 'react';
import {View,Text,StyleSheet,Button,Image,Dimensions,TouchableNativeFeedback,ScrollView,TouchableOpacity} from 'react-native';
import Colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomButton from '../components/CustomButton';

const ProductDetail = props => {
    return(
        <ScrollView>
            <Image style={styles.image} source={{uri: props.image}}/>
            <View style={styles.title}>
                <Text style={styles.fontTitle}>{props.title}</Text>
                <Icon name='heart-o' size={27} color='gray'/>
            </View>
            <Text style={styles.detailText}>{props.detail}</Text>
            <View style={styles.price}>
                <View style={styles.add}>
                    <View style={styles.minus}>
                        <TouchableOpacity>
                        <Icon 
                            name='minus' 
                            size={25} 
                            color='gray'
                        />
                        </TouchableOpacity>
                    </View>
                    <Text style={{fontSize:25}}></Text>
                    <View style={styles.plus}>
                        <TouchableOpacity>
                        <Icon 
                            name='plus' 
                            size={25} 
                            color='green' 
                        />
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={styles.priceText}>${props.price}</Text>
            </View>
            <View style={styles.description}>
                <Text style={styles.productDetail}>Product Detail</Text>
                <Text style={styles.descriptionText}></Text>
            </View>
            <View style={styles.customButton}>
                <CustomButton title='Add To Basket'/>
            </View>
        </ScrollView>
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
        textAlign:'right'
    },
    price:{
        marginHorizontal: Dimensions.get('window').width / 20,
        marginTop:Dimensions.get('window').width / 15,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    add:{
        textAlign:'left',
        flexDirection:'row',
        justifyContent:'space-between',
        //alignItems:'flex-start'
    },
    minus:{
        marginRight: 20,
        marginTop:7
    },
    plus:{
        marginLeft: 20,
        marginTop: 7
    },
    description:{
        marginHorizontal: Dimensions.get('window').width / 20,
        marginTop:Dimensions.get('window').width / 15
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

export default ProductDetail;