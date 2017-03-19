import React, { Component } from 'react';
 import {
   View,
   Text,
   StyleSheet
 } from 'react-native';

export default class Settings extends Component {
   render() {
     const data = this.props.data;
     return (
       <View style={styles.container}>
        <Text onPress={()=>this.props.navigator.pop()}>Settings</Text>
       </View>
     )
   }}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'red'
  },
});
