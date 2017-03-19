import React, { Component } from 'react';
 import {
   View,
   Text,
   StyleSheet
 } from 'react-native';

export default class Watch extends Component {
   render() {
     const data = this.props.data;
     return (
       <View style={styles.container}>
        <Text onPress={()=> this.props.navigator.pop()}>Watch</Text>
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
