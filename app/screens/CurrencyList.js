import React, {Component} from 'react';
import {FlatList, Text, StatusBar, View} from 'react-native';

import currencies from '../data/currencies';
import ListItem from "../components/List/ListItem";
import Separator from "../components/List/Separator";

const TEMP_CURRENT_CURRENCY = 'CAD'

class CurrencyList extends Component {

    handlePress = () => {
        console.log('Row press!')
    };

    render() {
        return (
            <View style={{flex: 1}}>
                <StatusBar translucent={false} barStyle="light-content"/>
                <FlatList
                    data={currencies}
                    renderItem={({item}) => (
                        <ListItem
                            text={item}
                            selected={item === TEMP_CURRENT_CURRENCY}
                            onPress={this.handlePress}
                        />
                    )}
                    keyExtractor={item => item}
                    ItemSeparatorComponent={Separator}/>
            </View>
        );
    }
}

export default CurrencyList;