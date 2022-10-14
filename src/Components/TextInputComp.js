//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

// create a component
const TextInputComp = ({
    placeholder,
    inputStyling,
    onChangeText = ()=>{},
    keyBoardtype,
    value,
}) => {
    return (
        <View style={{...styles.input,...inputStyling}}>
            <TextInput
             style={styles.container}
             placeholder={placeholder}
             onChangeText={onChangeText}
             keyboardType={keyBoardtype}
             value={value}
            >

            </TextInput>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        width: "100%",
        height: 54,
        backgroundColor: "grey",
        borderRadius: 7,
        flexDirection: "row",
        paddingHorizontal: 20,
        alignItems: "center",
        justifyContent: "center",
      },

});

//make this component available to the app
export default TextInputComp;
