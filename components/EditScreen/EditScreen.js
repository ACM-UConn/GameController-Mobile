import React, { useState } from 'react';
import { ImagePropTypes, StyleSheet, View, Text, Dimensions } from 'react-native';
import EditActionBar from './EditActionBar.js';
import SideMenu from './SideMenu.js';

export default function EditScreen(props) {

  const [visibility, setVisibility] = useState(false);

  const visible = () => {
    setVisibility(!visibility);
  }

  const handleAddButton = () => {
    console.log("Look i made a button :) ")
  }

  const screenCallback = (screen) => {
    props.changeScreen(screen)
  }

  if(props.shouldRender){
    return(
      <View style={styles.container}>
        <View style={styles.body}>
          <Text>This is the body.</Text>
        </View>
        <View style={styles.menu}>
          <SideMenu visible={visibility}></SideMenu>
        </View>
        <View style={styles.actionBar}>
          <EditActionBar visible={() => visible()} addButton={() => handleAddButton()} screenRequest={screen => screenCallback(screen)}></EditActionBar>
        </View>
      </View>
    );
  }
  else {
    return(
      null
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },

    body: {
      flex: 0.8,
      width: Dimensions.get('window').width,
      alignItems: 'center',
      justifyContent: 'center'
    },

    actionBar: {
      flex: 0.2,
      marginLeft: 15,
      marginRight: 15,
      marginBottom: 50,
      width: Dimensions.get('window').width,
    },

    menu: {
      position: 'absolute',
      width: 200,
      height: 250,
      top: 0,
      right: 0,
    }
});