import React from 'react';
import {StyleSheet,View,Text,TouchableOpacity,ScrollView,Image,TouchableNativeFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CartItem = props => {
    return(
        <ScrollView>
            <View style={styles.cart}>
                <Image source={{uri: props.image}} style={styles.imageCart}/>
                <View>
                    <Text style={styles.mainText}>{props.title}</Text>
                    <View style={styles.add}>
                        <View style={styles.minus}>
                            <TouchableOpacity onPress={props.onRemove}>
                            <Icon 
                                name='minus' 
                                size={25} 
                                color='gray'
                            />
                            </TouchableOpacity>
                        </View>
                        <Text style={{fontSize:25}}>{props.quantity}</Text>
                        <View style={styles.plus}>
                            <TouchableOpacity onPress={props.onAddItems}>
                            <Icon 
                                name='plus' 
                                size={25}   
                                color='green' 
                            />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <Text style={styles.mainText}>${props.amount.toFixed(2)}</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    cart:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom: 25
    },
    imageCart:{
        height:'100%',
        width:'25%',
        justifyContent:'flex-start'
    },
    mainText:{
        fontFamily:'bold',
        fontSize:18
    },
    add:{
        textAlign:'left',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    minus:{
        marginRight: 20,
        marginTop:7
    },
    plus:{
        marginLeft: 20,
        marginTop: 7
    },
    mainText:{
        justifyContent:'flex-end',
        fontFamily:'bold',
        fontSize:18
    }
});

export default CartItem;