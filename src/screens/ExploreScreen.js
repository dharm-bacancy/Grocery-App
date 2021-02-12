import React from 'react';
import {View,Text,StyleSheet,FlatList,ScrollView,TextInput,Dimensions,TouchableNativeFeedback,Image} from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import Colors from '../constants/Colors';
import * as cartAction from '../../store/actions/cart';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';

const ExploreScreen = props => {
    return(
        <View>
            <ScrollView >
                <Animatable.View animation='slideInRight' duration={2000} style={styles.textInput}>
                    <Icon name='search' size={20} color='black'/>
                    <TextInput placeholder='Search Store' style={styles.text}/>
                </Animatable.View>
                <View style={styles.touchable} >
                    <View style={{flexDirection:'row'}}>
                        <TouchableNativeFeedback useForeground onPress={()=>props.navigation.navigate('Vegetable')}>
                            <View style={styles.product}>
                                <View style={styles.imageContainer}>
                                    <Image style={styles.image} source={{uri:'https://lh3.googleusercontent.com/proxy/2YmDmFi1MSY0Fzc92mhdvBGxuk3lq0w95cWugO1KLOmGzq5kWl7Rzmv31-dCYTL3XahLT1QvjQYMuiL1hNfN7gMxyWytsh7Y8cMw4RLZEqSthJEjd8bwSiY'}}/>
                                </View>
                                <View style={styles.details}>
                                    <Text style={styles.title}>Frash Fruits & Vegetable</Text>
                                </View>
                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback useForeground onPress={()=>props.navigation.navigate('Oil')}>
                            <View style={styles.product}>
                                <View style={styles.imageContainer}>
                                    <Image style={styles.image} source={{uri:'https://p7.hiclipart.com/preview/2/84/34/soybean-oil-cooking-oils-vegetable-oil-sunflower-oil-oil.jpg'}}/>
                                </View>
                                <View style={styles.details}>
                                    <Text style={styles.title}>Cooking Oil & Ghee</Text>
                                </View>
                            </View> 
                        </TouchableNativeFeedback>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <TouchableNativeFeedback useForeground onPress={()=>props.navigation.navigate('Nonveg')}>
                            <View style={styles.product}>
                                <View style={styles.imageContainer}>
                                    <Image style={styles.image} source={{uri:'https://previews.123rf.com/images/magone/magone1502/magone150200094/36454292-fresh-raw-meat-products-on-wooden-table.jpg'}}/>
                                </View>
                                <View style={styles.details}>
                                    <Text style={styles.title}>Meat & Fish</Text>
                                </View>
                            </View> 
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback useForeground onPress={()=>props.navigation.navigate('Bakery')}>
                            <View style={styles.product}>
                                <View style={styles.imageContainer}>
                                    <Image style={styles.image} source={{uri:'https://content3.jdmagicbox.com/comp/def_content/bakeries/default-bakeries-13.jpg'}}/>
                                </View>
                                <View style={styles.details}>
                                    <Text style={styles.title}>Bakery & Snacks</Text>
                                </View>
                            </View> 
                        </TouchableNativeFeedback>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <TouchableNativeFeedback useForeground onPress={()=>props.navigation.navigate('Dairyegg')}>
                            <View style={styles.product}>
                                <View style={styles.imageContainer}>
                                    <Image style={styles.image} source={{uri:'https://www.dabiramagazine.com/wp-content/uploads/2019/05/PICTURE-2.jpg'}}/>
                                </View>
                                <View style={styles.details}>
                                    <Text style={styles.title}>Dairy & Eggs</Text>
                                </View>
                            </View> 
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback useForeground onPress={()=>props.navigation.navigate('Beverages')}>
                        <View style={styles.product}>
                            <View style={styles.imageContainer}>
                                <Image style={styles.image} source={{uri:'https://www.saltnspice.in/wp-content/uploads/2019/09/soft-drinks.jpg'}}/>
                            </View>
                            <View style={styles.details}>
                                <Text style={styles.title}>Beverages</Text>
                            </View>
                        </View> 
                        </TouchableNativeFeedback>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <TouchableNativeFeedback useForeground onPress={()=>props.navigation.navigate('Pulse')}>
                        <View style={styles.product}>
                            <View style={styles.imageContainer}>
                                <Image style={styles.image} source={{uri:'https://lh3.googleusercontent.com/proxy/vnD9br1v9VwwA5sOBeP6ikc-3O6IRuj5l_StrO04KAwvmYJpKyw53OhV98l0kCKvt39hkEaf0CaDXb5V1Nl9pc1dQMaNmOzkzN6vn15PedkigdIbDG4XiQ'}}/>
                            </View>
                            <View style={styles.details}>
                                <Text style={styles.title}>Pulses</Text>
                            </View>
                        </View> 
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback useForeground onPress={()=>props.navigation.navigate('Rice')}>
                        <View style={styles.product}>
                            <View style={styles.imageContainer}>
                                <Image style={styles.image} source={{uri:'https://previews.123rf.com/images/zendograph/zendograph1812/zendograph181200044/114671402-top-view-of-jasmine-rice-in-a-bowl-on-dark-wooden-table-with-rice-plants-jasmine-flower-ear-of-rices.jpg'}}/>
                            </View>
                            <View style={styles.details}>
                                <Text style={styles.title}>Rices</Text>
                            </View>
                        </View> 
                        </TouchableNativeFeedback>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    textInput:{
        width:Dimensions.get('window').width / 1.2,
        height:48,
        backgroundColor:'#F5F5F5',
        marginVertical:20,
        alignItems:'center',
        marginHorizontal:33,
        shadowColor: 'white',
        shadowOpacity: 0.26,
        shadowOffset:{width: 0, height: 2},
        elevation:5,
        borderRadius: 14,
        flexDirection:'row',
        paddingLeft:15
    },
    text:{
        fontSize: 18,
        paddingLeft: 10
    },
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
        overflow:'hidden',
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

ExploreScreen.navigationOptions = {
    headerTitle: 'Find Products',
};

export default ExploreScreen;