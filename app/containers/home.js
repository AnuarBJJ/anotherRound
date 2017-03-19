import React, { Component } from 'react';
import {
 View,
 Text,
 TouchableHighlight,
 StyleSheet
} from 'react-native';

import HomeButton from '../components/home-button';

export default class Home extends Component {
   render() {
     const buttons = [
       {title: 'Make Video', link: {name: 'video'}},
       {title: 'Watch technique', link: {name: 'watch'}},
       {title: 'Settings', link: {name: 'settings'}}
     ];

     const buttonsRendered = buttons.map(data =>
       <HomeButton key={data.title} data={data} navigator={this.props.navigator}/>
     )

     return (
       <View style={styles.container}>
         {buttonsRendered}
       </View>
        )
   }}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: 'blue',
    marginTop: 40,
  },
});
