import React, { useState } from 'react';
import { StyleSheet, Pressable, View, Text, Dimensions, Modal, TextInput, TouchableWithoutFeedback } from 'react-native';
import EditActionBar from './EditActionBar.js';
import SideMenu from './SideMenu.js';
import Draggable from 'react-native-draggable';
import EditScreenModal from './EditScreenModal.js';

export default function EditScreen(props) {

  const [visibility, setVisibility] = useState(false);
  const [buttonList, setButtonList] = useState([]);
  const [buttonNum, setButtonNum] = useState(0);
  const [highlightedButton, setHighlightedButton] = useState({id: null, style: null});
  const [modalVisiblity, setModalVisiblity] = useState(false);

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
  const returnButtonNames = () => {
    let temp = []
    for(let i=0; i<buttonList.length; i++) {
      temp.push(buttonList[i]["id"])
    }
    return(temp)
  }

  const visible = () => {
    setVisibility(!visibility);
  }

  const modalVisible = () => {
    setModalVisiblity(!modalVisiblity);
  }

  const handleAddButton = () => {
    if(highlightedButton.id==null){
      setButtonList(
        [{id: buttonNum, style: {width: 60, height: 60, borderRadius: 8, padding: 15, backgroundColor: 'grey'}}, ...buttonList]
      );
      setButtonNum(buttonNum+1);
    }
    modalVisible();
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

  if (props.shouldRender) {
    return(
      <View style={styles.container}>

        <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? 'gray' : 'darkgray'}, styles.wrapperCustom]} onPress={() => {props.changeScreen("home")}}>
          <Text styles={styles.text}>Back</Text>
        </Pressable>

        <View style={styles.body}>
          <Text>This is the body.</Text>
          {buttons}
        </View>

        <EditScreenModal 
          shouldRender={modalVisiblity} 
          hideModal={() => modalVisible()} 
          makeButton={() => handleAddButton()}>
        </EditScreenModal>

        <View style={styles.menu}>
          <SideMenu visible={visibility} closeMenu={() => closeMenu()} buttonStyle={highlightedButton.style} updateButton={(text, attribute) => updateButton(text, attribute)}></SideMenu>
        </View>

        <View style={styles.actionBar}>
          <EditActionBar 
            visible={() => visible()} 
            addButton={() => handleAddButton()} 
            getButtonNames={() => returnButtonNames()} 
            screenRequest={screen => screenCallback(screen)}
            showModal={() => modalVisible()}>
          </EditActionBar>
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
      width: '100%',
      flexDirection: 'column'
    },

    body: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f5f5f5',
    },
    actionBar: {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: '100%',
      height: '10%'
    },
    wrapperCustom: {
      width: 100,
      borderRadius: 8,
      padding: 15,
      marginLeft: 20
    },
    text: {
      fontSize: 24
    },
    menu: {
      position: 'absolute',
      width: 200,
      height: 250,
      top: 0,
      right: 0,
    },
});