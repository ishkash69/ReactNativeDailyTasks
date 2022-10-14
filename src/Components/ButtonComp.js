//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Touchable, TouchableOpacity } from 'react-native';

// create a component
const ButtonComp = ({
    buttonText = '',
    buttonStyle,
    onPress = ()=>{},
    textStyle,

}) => {
    return (
       <TouchableOpacity
       style={{...styles.container,...buttonStyle}}
       onPress ={onPress}
       >
        <Text style={{...styles.title,...textStyle}}>
            {buttonText}
        </Text>

       </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding:10,
    backgroundColor: "grey",
    borderRadius: 7,
    flexDirection: "row",
    width: "100%",
    marginTop:20
    },
    title:{
        fontSize: 18,
    color:'white'
    }
});

//make this component available to the app
export default ButtonComp;
