import React, { Component } from 'react';
 import {
   Button,
   Text,
   StyleSheet
 } from 'react-native';

export default class HomeButton extends Component {
   render() {
     const data = this.props.data;
     return (
       <Button style={styles.button}
          title={data.title}
          onPress={() => {
            this.props.navigator.push(data.link)
       }}>
       </Button>
     )
   }}


const styles = StyleSheet.create({
  button: {
    // flex: 1,
    textAlign: 'center',
  },
});
