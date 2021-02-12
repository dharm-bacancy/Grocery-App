import React from 'react';
import {StyleSheet,View,Text,TouchableOpacity,ScrollView,Image,TouchableNativeFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const FavoriteItem = props => {
    return(
        <ScrollView>
            <View style={styles.fav}>
                <Image source={{uri: props.image}} style={styles.imageFav}/>
                <View>
                    <Text style={styles.mainText}>{props.title}</Text>
                    <Text style={styles.detailText}>{props.detail}</Text>
                </View>
                <Text style={styles.mainAmount}>${props.amount.toFixed(2)}</Text>
            </View>
        </ScrollView>
    ); 
};

const styles = StyleSheet.create({
    fav:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom: 45
    },
    imageFav:{
        height:'150%',
        width:'30%',
        justifyContent:'flex-start'
    },
    mainText:{
        fontWeight:'bold',
        fontSize:18
    },
    detailText:{
        fontSize: 16,
        color: 'gray',
        marginTop: 10
        //paddingTop: 20
    },
    mainAmount:{
        justifyContent:'flex-end',
        fontWeight:'bold',
        fontSize:18,
        marginTop: 25
    }
});

export default FavoriteItem;