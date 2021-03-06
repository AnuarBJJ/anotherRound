import React, { Component } from 'react';
 import {
   AppRegistry,
   View,
   Text,
   Navigator,
   TouchableHighlight,
   StyleSheet
 } from 'react-native';

 import Camera from 'react-native-camera';

export default class MakeVideo extends Component {
   render() {
     return (
       <View style={styles.container}>
         <Camera
           ref={(cam) => {
             this.camera = cam;
           }}
           style={styles.preview}
           aspect={Camera.constants.Aspect.fill}>
           <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
         </Camera>
       </View>
     )
   }}


   const styles = StyleSheet.create({
     container: {
       flex: 1,
       flexDirection: 'row',
     },
     preview: {
       flex: 1,
       justifyContent: 'flex-end',
       alignItems: 'center'
     },
     capture: {
       flex: 0,
       backgroundColor: '#fff',
       borderRadius: 5,
       color: '#000',
       padding: 10,
       margin: 40
     }
   });
