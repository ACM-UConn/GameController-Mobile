import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import ControllerList from './ControllerList';
import HomeActionBar from './HomeActionBar';

export default function HomeScreen(props) {

  // when abraham (homeactionbar) sends me the screen that the user presses
  const screenCallback = (screen) => {
    props.changeScreen(screen)
  }

  // does the return statement if the prop from App.js is true (if one of the different screens was clicked)
  if (props.shouldRender) {
    return(

    <View style={styles.container}>

      <View>
        <Text style={styles.header}>GameController</Text>
      </View>

      <View style={styles.list}>
        <ControllerList></ControllerList>
      </View>

      <View style={styles.actionBar}>
        <HomeActionBar screenRequest={screen => screenCallback(screen)}></HomeActionBar>  
      </View>

    </View>)
  } else {
    return(null)
  }
}



const styles = StyleSheet.create({

    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      marginTop: 60,
    },

    header: {
      flex: 0.08,
      padding: 40,
      alignItems: 'center',
      fontSize: 40,
    },

    actionBar: {
      flex: 0.2,
      marginLeft: 15,
      marginRight: 15,
      marginBottom: 50,
    },

    list: {
      flex: 0.75,
      marginTop: 20
    },
});