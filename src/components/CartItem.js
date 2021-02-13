import React from 'react';
import {StyleSheet,View,Text,TouchableOpacity,ScrollView,Image,TouchableNativeFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ICON from 'react-native-vector-icons/Entypo';

const CartItem = props => {
    return(
        <ScrollView>
            <View style={styles.cart}>
                <Image source={{uri: props.image}} style={styles.imageCart}/>
                <View>
                    <View>
                        <Text style={styles.mainText}>{props.title}</Text>
                    </View>
                    
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
                <View style={styles.removeAmount}>
                    <TouchableOpacity>
                        <ICON name='cross' size={30} color='#C0C0C0' style={styles.remove}/>
                    </TouchableOpacity>
                    <Text style={styles.mainAmount}>${props.amount.toFixed(2)}</Text>
                </View>
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
        height:'150%',
        width:'25%',
        justifyContent:'flex-start'
    },
    mainText:{
        fontWeight:'bold',
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
    mainAmount:{
        //justifyContent:'flex-end',
        fontWeight:'bold',
        fontSize:18,
        //marginTop: 35
    },
    remove:{
        //marginLeft: 30,
        justifyContent:'flex-end'
    },
    removeAmount:{
        flexDirection:'column',
        marginLeft: 10,
        justifyContent:'space-between'
    }
});

export default CartItem;