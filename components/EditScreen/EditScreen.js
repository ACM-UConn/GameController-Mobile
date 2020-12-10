import React, { useState } from 'react';
import { StyleSheet, Pressable, View, Text, Dimensions } from 'react-native';
import EditActionBar from './EditActionBar.js';
import SideMenu from './SideMenu.js';
import Draggable from 'react-native-draggable';

export default function EditScreen(props) {

  const [visibility, setVisibility] = useState(false);
  const [buttonList, setButtonList] = useState([]);
  const [buttonNum, setButtonNum] = useState(0);
  const [highlightedButton, setHighlightedButton] = useState({id: null, style: null});

  const updateButton = (attribute, item) => {
    let listCopy = [...buttonList];
    for(let i = 0; i < listCopy.length; i++) {
      if (highlightedButton["id"] === listCopy[i]["id"]) {
        listCopy[i]["style"][item] = attribute
        break;
      }
    }
    setButtonList([...listCopy])
  }

  const visible = () => {
    setVisibility(!visibility);
  }

  const handleAddButton = () => {
    if(highlightedButton.id==null){
      setButtonList(
        [...buttonList, {id: buttonNum, style: {width: 60, height: 60, borderRadius: 8, padding: 15, backgroundColor: 'grey'}}]
      );
      setButtonNum(buttonNum+1);
    }
  }

  const setHighlighted = (item) => {
    setHighlightedButton({id: item.id, style: item.style})
    setVisibility(true)
  }

  const closeMenu = () => {
    setVisibility(false)
    setHighlightedButton({id: null, style: null})
  }

  let buttons = buttonList.map((obj) => {
    let item = JSON.parse(JSON.stringify(obj));
    return(
      <Draggable x={150} y={300} key={item.id} onLongPress={() => setHighlighted(item)} disabled={highlightedButton.id !== null}>
        <View style={item.style}>
          <Text>{item.id}</Text>
        </View>
      </Draggable>
    )
  });

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
          <SideMenu visible={visibility} closeMenu={() => closeMenu()} buttonStyle={highlightedButton.style} updateButton={(text, attribute) => updateButton(text, attribute)}></SideMenu>
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
});