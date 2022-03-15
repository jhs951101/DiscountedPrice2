import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert, BackHandler } from 'react-native';

export default function AddTodo() {
    const [priceTxt, setPriceTxt] = useState('');
    const [discountrateTxt, setDiscountrateTxt] = useState('');
    const [discountedpriceTxt, setDiscountedpriceTxt] = useState('');

    const changeHandler_priceTxt = (val) => {
        setPriceTxt(val);
    }

    const changeHandler_discountrateTxt = (val) => {
        setDiscountrateTxt(val);
    }

    const submitHandler = (priceTxt, discountrateTxt) => {
      if(priceTxt.length < 1){
        Alert.alert('WAIT!', '가격을 입력하십시오', [
          {text: '확인'}
        ]);
      }
      else if(discountrateTxt.length < 1){
        Alert.alert('WAIT!', '할인율을 입력하십시오', [
          {text: '확인'}
        ]);
      }
      else {
        var discountedPrice = priceTxt - priceTxt * discountrateTxt / 100;
        discountedPrice = discountedPrice.toFixed(1);
        setDiscountedpriceTxt("$" + discountedPrice);
      }
    }

    const quitHandler = () => {
      BackHandler.exitApp();
    }

    return (
        <View>
            <Text style={styles.output}>
                {discountedpriceTxt}
            </Text>

            <TextInput
                style={styles.input}
                placeholder='Price'
                onChangeText={changeHandler_priceTxt}
            />

            <TextInput
                style={styles.input}
                placeholder='Discount Rate (%)'
                onChangeText={changeHandler_discountrateTxt}
            />

            <Button onPress={() => submitHandler(priceTxt, discountrateTxt)} title='CALCULATE' color='#00c800' />
        </View>
    )
}

const styles = StyleSheet.create({
    output: {
        fontWeight: 'bold',
        marginBottom: 10,
        paddingHorizontal: 5,
        paddingVertical: 6,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginBottom: 10,
        paddingHorizontal: 5,
        paddingVertical: 6,
    },
})