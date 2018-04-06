import React from 'react';
import {StatusBar} from 'react-native';

import {Container} from '../components/Container';
import {Logo} from '../components/Logo';
import {InputWithButton} from '../components/TextInput';
import ClearButton from "../components/Button/ClearButton";

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '69.96';

class Home extends React.Component {
    handleChangeText = () => {
        console.log('Change Text');
    };

    handlePressBaseCurrency = () => {
        console.log('Press base currency');
    };

    handlePressQuoteCurrency = () => {
        console.log('Press quote currency');
    }

    handleSwapCurrency = () => {
        console.log('Press swap currency')
    }

    render() {
        return (
            <Container>
                <StatusBar backgroundColor="blue" barStyle={"light-content"}/>
                <Logo/>
                <InputWithButton
                    buttonText={TEMP_BASE_CURRENCY}
                    onPress={this.handlePressBaseCurrency}
                    defaultValue={TEMP_BASE_PRICE}
                    keyboardType="numeric"
                    onChangeText={this.handleChangeText}
                />
                <InputWithButton
                    editable={false}
                    buttonText={TEMP_QUOTE_CURRENCY}
                    onPress={this.handlePressQuoteCurrency}
                    value={TEMP_QUOTE_PRICE}/>
                <ClearButton onPress={this.handleSwapCurrency} text="Reverse Currencies"/>
            </Container>
        );
    }
}

export default Home;