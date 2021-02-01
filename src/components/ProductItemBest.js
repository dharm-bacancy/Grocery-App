import React from 'react';
import {View,StyleSheet,Text,Image,Button,Dimensions,ScrollView,TextInput,TouchableNativeFeedback,TouchableOpacity} from 'react-native';
import Colors from '../constants/Colors';
import CustomButton from '../components/CustomButton';
import Icon from 'react-native-vector-icons/Entypo';

const ProductItemBest = props => {
    return(
        <View style={styles.touchable}>
                <TouchableNativeFeedback onPress={props.onViewDetailBest} useForeground>
                    <View style={styles.product}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={{uri: props.imageBest}}/>
                        </View>
                        <View style={styles.details}>
                            <Text style={styles.title}>{props.titleBest}</Text>
                        </View>
                        <Text style={styles.detailItem}>{props.detailBest}</Text>
                        <View style={styles.actions}>
                            <Text style={styles.price}>${props.priceBest.toFixed(2)}</Text>
                            <TouchableOpacity>
                                <CustomButton style={styles.addButoon}>
                                    <Icon name='plus' size={25} color='white'/>
                                </CustomButton>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableNativeFeedback>
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
        height: 300,
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
        fontSize:18,
        marginVertical: 4,
    },
    detailItem:{
        fontSize: 15,
        //marginVertical: 4,
        paddingLeft:17,
        paddingBottom:2,
        color:'#888'
        //alignItems:'flex-start'
    },
    price:{
        fontSize: 20
    },
    actions:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignContent:'center',
        paddingHorizontal:20,
    },
    details:{
        padding:10,
        alignItems:'center',
        height:'15%'
    },
    addButoon:{
        width: Dimensions.get('window').width / 10,
        height:Dimensions.get('window').width /9
    },
});

export default ProductItemBest;