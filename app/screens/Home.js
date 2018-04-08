import PropTypes from 'prop-types';
import React from 'react';
import {StatusBar, KeyboardAvoidingView} from 'react-native';

import Container from '../components/Container/Container';
import {Logo} from '../components/Logo';
import InputWithButton from '../components/TextInput/InputWithButton';
import ClearButton from "../components/Button/ClearButton";
import LastConverted from "../components/Text/LastConverted";
import Header from '../components/Header/Header';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '69.96';

const TEMP_LAST_CONVERTED = new Date();
const TEMP_CONVERSION_RATE = 0.79739;

class Home extends React.Component {

    static propTypes = {
        navigation: PropTypes.object
    }

    handleChangeText = () => {
        console.log('Change Text');
    };

    handlePressBaseCurrency = () => {
        this.props.navigation.navigate('CurrencyList', {title: 'Base Currency'})
    };

    handlePressQuoteCurrency = () => {
        this.props.navigation.navigate('CurrencyList', {title: 'Quote Currency'})
    }

    handleSwapCurrency = () => {
        console.log('Press swap currency')
    }

    handleOptionPress = () => {
        this.props.navigation.navigate('Options')
    }

    render() {

        return (
            <Container>
                <StatusBar backgroundColor="blue" barStyle={"light-content"}/>

                <Header onPress={this.handleOptionPress}/>

                {/*Logo is here*/}
                <KeyboardAvoidingView behavior="padding">

                    <Logo/>

                    {/*Input button for Base*/}
                    <InputWithButton
                        buttonText={TEMP_BASE_CURRENCY}
                        onPress={this.handlePressBaseCurrency}
                        defaultValue={TEMP_BASE_PRICE}
                        keyboardType="numeric"
                        onChangeText={this.handleChangeText}
                    />

                    {/*Input button for Quote*/}
                    <InputWithButton
                        editable={false}
                        buttonText={TEMP_QUOTE_CURRENCY}
                        onPress={this.handlePressQuoteCurrency}
                        value={TEMP_QUOTE_PRICE}/>

                    {/*Convert result found here*/}
                    <LastConverted
                        date={TEMP_LAST_CONVERTED}
                        base={TEMP_BASE_CURRENCY}
                        quote={TEMP_QUOTE_CURRENCY}
                        conversionRate={TEMP_CONVERSION_RATE}>
                    </LastConverted>

                    {/*Clear button goes here*/}
                    <ClearButton onPress={this.handleSwapCurrency} text="Reverse Currencies"/>
                </KeyboardAvoidingView>
            </Container>
        );
    }
}

export default Home;