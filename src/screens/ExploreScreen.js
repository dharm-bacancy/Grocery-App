import React from 'react';
import {View,Text,StyleSheet,FlatList,ScrollView} from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import ExploreItem from '../components/ExploreItem';
import Colors from '../constants/Colors';
import * as cartAction from '../../store/actions/cart';

const ExploreScreen = props => {
    const products = useSelector(state => state.products.exploreProducts);
    return(
        <View>
            <ScrollView>
                <FlatList
                    numColumns={2}
                    data={products}
                    renderItem={itemData =>(
                        <ExploreItem
                            image={itemData.item.imageUrl}
                            title={itemData.item.title}
                        />
                    )}
                />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    
});

export default ExploreScreen;