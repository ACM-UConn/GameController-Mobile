import React, { useState } from 'react';
import { ImagePropTypes, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function EditActionBar(props) {

  const [isEditBarOpen, setIsEditBarOpen] = useState(false);
  const [editState, setEditState] = useState('default');
  const [selectedButton, setSelectedButton] = useState({id: null, style: null});
  const [actionButton, setActionButton] = useState('+');

  let buttonNames = null

  let buttonList = props.getButtonNames();
  console.log(buttonList);

  /* turn these two fucntions into a toggle function */
  const toggleActionButton = (item=null) => {
    if (item !== null) {
      setEditState('button');
      setActionButton(item);
      setSelectedButton({id: item, style: null}); /* style is null only for now. need to pass it in somehow */
    } else {
      setEditState('default');
      setActionButton('+');
      setSelectedButton({id: null, style: null}); /* style is null only for now. need to pass it in somehow */
    }
  }

  buttonNames = () => {
    let itemList = null;
    if (editState === 'default') {
      itemList = buttonList.map((obj, index) => {
        let temp = JSON.parse(JSON.stringify({key: obj}));
        let item = temp.key;
        return (
          <Pressable style={styles.listItem} onPress={() => toggleActionButton(item)} key={index}>
            <Text>{item}</Text>
          </Pressable>
        )
      })
    } else if (editState === 'button') {
      console.log('editstate = button')
    }
    return itemList;
  }

  const backButtonVisible = () => {
    if (editState === 'default') {
      return null
    } else if (editState === 'button') {
      return (
        <Pressable style={[styles.backButton, {bottom: "100%"}]} onPress={() => toggleActionButton()}>
          <Text>Back</Text>
        </Pressable>
      )
    }
  }

  if (isEditBarOpen) {
    return(
      <View style={styles.container}>
        <Pressable style={[styles.openMenuButton, {bottom: "100%"}]} onPress={() => setIsEditBarOpen(false)}>
          <Text>Press to Close</Text>
        </Pressable>
        {backButtonVisible()}
        <View style={styles.buttonContainer}>
          <View style={styles.actionButtonContainer}>
            <Pressable style={styles.actionButton} onPress={() => {
              editState === 'default' ? props.showModal() : null
            }}>
              <Text style={styles.buttonText}>{actionButton}</Text>
            </Pressable>
          </View>
          <ScrollView style={styles.listItems} contentContainerStyle={{}} horizontal={true} showsHorizontalScrollIndicator={false}>
            {buttonNames()}
          </ScrollView>
        </View>
      </View>
    )
  }

  else {
    return(
      <Pressable style={[styles.openMenuButton, {bottom: 0}]} onPress={() => setIsEditBarOpen(true)}>
        <Text>Press to Open</Text>
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      backgroundColor: 'grey'
    },
    wrapperCustom: {
      borderRadius: 8,
      padding: 15,
      width: 70,
      height: 60,
      alignItems: 'center',
      justifyContent: 'center'
    },
    text: {
      fontSize: 24,
    },
    menubutton: {
      width: 25,
      height: 5,
      backgroundColor: "black",
      marginLeft: 6,
      marginRight: 6
    },
    openMenuButton: {
      position: 'absolute',
      bottom: 0,
      right: 25,
      width: 75,
      height: 40,
      backgroundColor: "grey",
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
    },
    backButton: {
      position: 'absolute',
      bottom: 0,
      left: 25,
      width: 75,
      height: 40,
      backgroundColor: "grey",
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
    },
    buttonContainer: {
      flex: 1,
      flexDirection: 'row',
    },
    actionButtonContainer: {
      width: 100,
      borderRightWidth: 5,
      borderColor: "white"
    },
    actionButton: {
      height: 50,
      width: 50,
      backgroundColor: 'black',
      color: 'white',
      borderRadius: 8,
      marginHorizontal: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    listItems: {
      marginHorizontal: 10
    },
    listItem: {
      height: 50,
      width: 100,
      color: "white",
      borderColor: "black",
      borderWidth: 5,
      marginHorizontal: 10,
      justifyContent: 'center',
      alignItems: 'center'
    },
    buttonText: {
      fontSize: 16,
      color: 'white'
    }
});
