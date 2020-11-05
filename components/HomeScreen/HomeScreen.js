import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
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
        <Text style={styles.header}> GameController </Text>
      </View>
      <ControllerList style={styles.list}></ControllerList>
      <HomeActionBar style={styles.actionBar} screenRequest={screen => screenCallback(screen)}></HomeActionBar>  
    </View>)
  } else {
    return(null)
  }
}



const styles = StyleSheet.create({

    container: {
      flex: 1,
    },

    header: {
      flex: 0.3,
      color: 'blue',
      textAlign: 'center',
      marginTop: 30,
      fontSize: 50,
    },

    actionBar: {
      flex: 0.2,
    },

    list: {
      flex: 0.5,
    },
});