import React, {Component} from 'react';
import {View,Text} from 'react-native';
import { Permission, PERMISSION_TYPE } from './src/AppPermission';

export default class App extends Component {
  componentDidMount() {
  Permission.requestMultiple([PERMISSION_TYPE.microphone, PERMISSION_TYPE.photo, PERMISSION_TYPE.send_sms,PERMISSION_TYPE.read_calendar, PERMISSION_TYPE.camera,PERMISSION_TYPE.location,PERMISSION_TYPE.contact,PERMISSION_TYPE.call])
  }
  
  render( ) {
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontSize:30}}>
        React Native Permission 
        </Text>
      </View>
    )

  }
}
 
     

