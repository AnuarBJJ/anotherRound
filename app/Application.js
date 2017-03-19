import React, { Component } from 'react';
 import {
   Navigator,
 } from 'react-native';

import Home from './containers/home';
import MakeVideo from './containers/make-video';
import Watch from './containers/watch';
import Settings from './containers/settings';

 export default class Application extends Component {
   render() {
     return (
       <Navigator
         initialRoute={{name: 'home'}}
         renderScene={(route, navigator) => {
           if(route.name === 'home'){
             return <Home navigator={navigator}/>
           } else if (route.name === 'video'){
              return <MakeVideo navigator={navigator}/>
           } else if(route.name === 'watch'){
              return <Watch navigator={navigator}/>
           } else if (route.name === 'settings'){
              return <Settings navigator={navigator}/>
           }
         }
       } />
     )
 }}
