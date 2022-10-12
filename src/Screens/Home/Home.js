import { Image, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { styles } from './style'
import images from '../../assets/images'

export default class Home extends Component {
    constructor(){
        super();
        this.state={
            message: 'My App'
        }
    }
    
    
  render() {
    return (
      <View style={styles.container}>
         {/* header */}
        <View style={styles.header}>

            <Image style={styles.imageStyle} source={images.leftback}/>
            <Image style={styles.imageStyle} source={images.users}/>
            <Image style={styles.imageStyle} source={images.leftback}/>

        </View>

        {/* text */}

        <View style={styles.textViewStyle}>

            <Text style = {styles.textStyle}>
                {this.state.message}
            </Text>

        </View>

        <TouchableOpacity
        onPress={()=>{
            this.setState({message: 'react Native'})
        }}
        style={styles.button}>
            <Text>click Me</Text>
        </TouchableOpacity>

      </View>
    )
  }
}