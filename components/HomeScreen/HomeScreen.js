import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ControllerList from './ControllerList';
import HomeActionBar from './HomeActionBar';

export default function HomeScreen(props) {

  // when abraham (homeactionbar) sends me the screen they press
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
      <ControllerList></ControllerList>
      <HomeActionBar screenRequest={screen => screenCallback(screen)}></HomeActionBar>  
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
      color: 'blue',
      textAlign: 'center',
      marginTop: 30,
      fontSize: 50,
    }
});