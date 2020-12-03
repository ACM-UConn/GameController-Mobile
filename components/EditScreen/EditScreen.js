import React, { useState } from 'react';
import { StyleSheet, Pressable, View, Text, Dimensions } from 'react-native';
import EditActionBar from './EditActionBar.js';
import SideMenu from './SideMenu.js';
import Draggable from 'react-native-draggable';

export default function EditScreen(props) {

  const [visibility, setVisibility] = useState(false);
  const [buttonList, setButtonList] = useState([]);
  const [buttonNum, setButtonNum] = useState(0);

  const visible = () => {
    setVisibility(!visibility);
  }

  const handleAddButton = () => {
    setButtonList(
      [...buttonList, {id: buttonNum}]
    );
    setButtonNum(buttonNum+1);
  }

  let buttons = buttonList.map((item) =>
    <Draggable x={200} y={300} key={item.id}>
      <View style={styles.controllerItem}>
        <Text>{item.id} + hi</Text>
      </View>
    </Draggable>
  );

  const screenCallback = (screen) => {
    props.changeScreen(screen)
    setButtonList([]);
    setButtonNum(0);
  }

  if(props.shouldRender){
    return(
      <View style={styles.container}>
        <View style={styles.body}>
          <Text>This is the body.</Text>
          {buttons}
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
      flexDirection: 'column'
    },

    body: {
      flex: 0.90,
      alignSelf: 'stretch',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f5f5f5'
    },

    actionBar: {
      flex: 0.1,
      width: Dimensions.get('window').width,
    },

    menu: {
      position: 'absolute',
      width: 200,
      height: 250,
      top: 0,
      right: 0,
    },

    controllerItem: {
      width: 30,
      height: 30,
      borderRadius: 8,
      padding: 15,
      backgroundColor: 'grey'
    },
});