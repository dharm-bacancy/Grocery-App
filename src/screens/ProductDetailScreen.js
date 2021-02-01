import React,{useReducer} from 'react';
import {View,Text,StyleSheet,Button,Image,Dimensions,TouchableNativeFeedback,ScrollView} from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import Colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomButton from '../components/CustomButton';
import * as cartAction from '../../store/actions/cart';
import CartItem from '../components/CartItem';

const reducer = (state,action) =>{
    switch (action.type) {
        case 'increment':
            return {...state, count: state.count + action.payload};
        case 'decrement':
            return {...state, count: state.count - action.payload};
        default:
            return state;
    }
};

const ProductDetailScreen = props =>{
    const productId = props.navigation.getParam('productId');
        //const dispatch = useDispatch();
        //const [state, dispatch] = useReducer(reducer, {count: 0})
    //const productIdBest = props.navigation.getParam('productIdBest')
    const selectedProduct = useSelector(state => 
        state.products.availableProducts.find(prod => prod.id === productId)    
    );
    return(
        <View>
        <ScrollView>
            <Image style={styles.image} source={{uri: selectedProduct.imageUrl}}/>
            <View style={styles.title}>
                <Text style={styles.fontTitle}>{selectedProduct.title}</Text>
                <Icon name='heart-o' size={27} color='gray'/>
            </View>
            <Text style={styles.detailText}>{selectedProduct.detail}</Text>
            <View style={styles.price}>
                <View style={styles.add}>
                    <View style={styles.minus}>
                        <Icon 
                            name='minus' 
                            size={25} 
                            color='gray' 
                            //onPress={()=>{dispatch({type:'decrement', payload: 1})}}
                        />
                    </View>
                    {/* { state.count > 0 ? <Text style={{fontSize:25}}>{state.count}</Text>: null} */}
                    <Text style={{fontSize:25}}></Text>
                    <View style={styles.plus}>
                        <TouchableNativeFeedback>
                        <Icon 
                            name='plus' 
                            size={25}   
                            color='green' 
                           // onPress={()=>{dispatch({type:'increment', payload: 1})}}
                            />
                        </TouchableNativeFeedback>
                    </View>
                </View>
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
    </View>
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

export default ProductDetailScreen;

// import React from 'react';
// import {FlatList,View} from 'react-native';
// import {useDispatch, useSelector} from 'react-redux';
// import ProductDetail from '../components/ProductDetail';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import * as cartAction from '../../store/actions/cart';

// const ProductDetailScreen = props => {
//     // const productId = props.navigation.getParam('productId');
//     //     const dispatch = useDispatch();
//     // const products = useSelector(state => state.products.availableProducts);
//     // const selectedProduct = useSelector(state => 
//     //     state.products.availableProducts.find(prod => prod.id === productId)    
//     //  );
//     //const productId = props.navigation.getParam('productId');
//     const products = useSelector(state => state.products.availableProducts);
//         const dispatch = useDispatch();
//     return(
//         <View>
//             <FlatList
//                 data={products}
//                 renderItem={itemData => (
//                     <ProductDetail
//                         image={itemData.item.imageUrl} 
//                         title={itemData.item.title}
//                         detail={itemData.item.detail}
//                         price={itemData.item.price}
//                         description={itemData.item.description}
//                         //quantity={itemData.item.quantity}
//                         onAddToCart = {()=>{
//                             dispatch(cartAction.addToCart(itemData.item));
//                         }} 
//                     />
//                 )}  
//             />
//         </View>
//     );
// };

// ProductDetailScreen.navigationOptions = {
//     headerShown: false
// };

// export default ProductDetailScreen;