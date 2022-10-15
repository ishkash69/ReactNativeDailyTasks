/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Home from './src/Screens/Home/Home';


class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
        
        <View style={styles.container}>
          <Home />
        </View>
      

        

      


    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

  }
})



export default App;
