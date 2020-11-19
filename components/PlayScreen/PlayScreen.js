import  React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ControllerPlay from './ControllerPlay.js'
import ControllerConnect from './ControllerConnect.js';
let socket = null;

export default function PlayScreen(props) {
  const [connected, setConnected] = useState('scan')

  const handleData = (data) => {
    socket = new WebSocket('ws://172.20.1.168:4567');
    setConnected('loading');
    socket.onopen = () => {
      socket.send(JSON.stringify({type: 'init', A: 'left', D: 'right', S: 'down', W: 'up'}))
    }
    setConnected('playing');
  }

  const handleButtonPress = (buttonPressed) => {
    if(buttonPressed.status == 'pressed'){
      socket.send(JSON.stringify({pressed: buttonPressed.button}))
    }
    else if(buttonPressed.status == 'released'){
      socket.send(JSON.stringify({released: buttonPressed.button}))
    }
  }
  
  if(props.shouldRender) {
    if(connected == 'playing'){
      return(
        <View style={styles.container}>
          <ControllerPlay buttonPress={(buttonPressed) => handleButtonPress(buttonPressed)}></ControllerPlay>
        </View>
      )
    }
    else if(connected == 'scan'){
        return(
          <View style={styles.container}>
            <ControllerConnect passData={(data) => handleData(data)} cameraPerms={props.cameraPermission}></ControllerConnect>
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