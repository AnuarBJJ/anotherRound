/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import {
   AppRegistry,
   View,
   StyleSheet
 } from 'react-native';

 import Application from './app/Application';

 export default class AnotheRound extends Component {
   render() {
     return (
       <View style={styles.container}>
         <Application/>
       </View>
     );
   }
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('AnotheRound', () => AnotheRound);
