import  React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import ControllerPlay from './ControllerPlay.js'
import ControllerConnect from './ControllerConnect.js'

export default function PlayScreen(props) {
  
  const [connected, setConnected] = useState(false); 

  const connectRender = (status) => {
    setConnected(status);
  }
  
  if(props.shouldRender) {
    if(connected){
      return(
        <View style={styles.container}>
          <ControllerPlay></ControllerPlay>
        </View>
      )
    } else {
        return(
          <View style={styles.container}>
            <ControllerConnect done={(status) => connectRender(status)} cameraPerms={cameraPermission}></ControllerConnect>
          </View>
        )
    }
  }
  return (
      null
  );
}

// get info from App.js to tell controller list to render

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
  },
});