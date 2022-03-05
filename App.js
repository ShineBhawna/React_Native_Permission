import React, {Component} from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import { Permission, PERMISSION_TYPE } from './src/AppPermission';

export default class App extends Component {
  checkPermission = () => {
    Permission.checkPermission(PERMISSION_TYPE.microphone),
    Permission.checkPermission(PERMISSION_TYPE.read_calendar),
    Permission.checkPermission(PERMISSION_TYPE.contact),
    Permission.checkPermission(PERMISSION_TYPE.call),
    Permission.checkPermission(PERMISSION_TYPE.location),
    Permission.checkPermission(PERMISSION_TYPE.send_sms),
    Permission.checkPermission(PERMISSION_TYPE.photo),
    Permission.checkPermission(PERMISSION_TYPE.camera)
}
  

render( ) {
  return (
   <View style={{ justifyContent:'center', alignItems:'center'}}>
      <Text style={{fontSize:30}}>
      React Native Permission {'\n'}
      </Text>
      <Button title="Record Audio" onPress={this.checkPermission}/><Text>{'\n'}</Text>
      <Button title="Calendar" onPress={this.checkPermission}/><Text>{'\n'}</Text>
      <Button title="Contact" onPress={this.checkPermission}/><Text>{'\n'}</Text>
      <Button title="Call" onPress={this.checkPermission}/><Text>{'\n'}</Text>
      <Button title="Location" onPress={this.checkPermission}/><Text>{'\n'}</Text>
      <Button title="Send SMS" onPress={this.checkPermission}/><Text>{'\n'}</Text>
      <Button title="Write External Storage" onPress={this.checkPermission}/><Text>{'\n'}</Text>
      <Button title="Camera" onPress={this.checkPermission}/>
      </View >
      
    )
  }
}
  


