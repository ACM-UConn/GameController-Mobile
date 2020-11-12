import  React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import ControllerPlay from './ControllerPlay.js'
import ControllerConnect from './ControllerConnect.js';
import io from "socket.io-client";

export default function PlayScreen(props) {
  
  const [connected, setConnected] = useState('scan')

  const handleData = (data) => {
    let temp = JSON.parse(data)
    const socket = io.connect(temp.address + ":" + temp.port)
    setConnected('loading')
    socket.emit("init", {A: 'left', D: 'right', S: 'down', W: 'up'})
    setTimeout(() => {
      console.log("Waiting...")
    }, 3000)
    setConnected('playing')
  }

  const handleButtonPress = (buttonPressed) => {
    if(buttonPressed.status == 'pressed'){
      socket.emit("pressed", buttonPressed.button)
    }
    else if(buttonPressed.status == 'released'){
      socket.emit("released", buttonPressed.button)
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
    else if(connected == 'loading'){
      return(
        <View style={styles.container}>
          <Text>Loading...</Text>
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