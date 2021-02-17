import React, { useState } from 'react';
import { ImagePropTypes, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function EditActionBar(props) {

  const [isOpen, setIsOpen] = useState(false);

  let buttonNames = null

  let buttonList = props.getButtonNames()

  buttonNames = buttonList.map((obj) => {
    let temp = JSON.parse(JSON.stringify({key: obj}));
    let item = temp.key;
    return (
      <Pressable style={styles.buttonItems}>
        <Text>{item}</Text>
      </Pressable>
    )
  })

  if (isOpen) {
    return(
      <View style={styles.container}>
        <Pressable style={[styles.openMenuButton, {bottom: "100%"}]} onPress={() => setIsOpen(false)}>
          <Text>Press to Close</Text>
        </Pressable>
        <ScrollView style={styles.buttonContainer} contentContainerStyle={{alignItems: 'flex-start'}} horizontal={true}>
          <Pressable style={styles.buttonItems} onPress={() => props.makeButton()}>
            <Text style={styles.buttonText}>+</Text>
          </Pressable>
          {buttonNames}
        </ScrollView>
      </View>
    )
  }

  else {
    return(
      <Pressable style={[styles.openMenuButton, {bottom: 0}]} onPress={() => setIsOpen(true)}>
        <Text>Press to Open</Text>
      </Pressable>
    );
  }
  
  // return (
  //     <View style={styles.container}>
  //       <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? 'gray' : 'darkgray'}, styles.wrapperCustom]} onPress={() => {props.screenRequest("home")}}>
  //         <Text styles={styles.text}>Back</Text>
  //       </Pressable>

  //       <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? 'gray' : 'darkgray'}, styles.wrapperCustom]} onPress={() => {props.addButton()}}>
  //         <Text styles={styles.text}>+</Text>
  //       </Pressable>

  //       <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? 'gray' : 'darkgray'}, styles.wrapperCustom]} onPress={() => {console.log('this is the saving action for now...')}}>
  //         <Text styles={styles.text}>Save</Text>
  //       </Pressable>
  //     </View>
  // );
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
    buttonContainer: {
      flex: 1,
      flexDirection: 'row',
    },
    buttonItems: {
      height: 50,
      width: 50,
      backgroundColor: 'black',
      color: 'white',
      borderRadius: 8,
      marginHorizontal: 20,
      justifyContent: 'center',
      alignItems: 'center'
    },
    buttonText: {
      fontSize: 16,
      color: 'white'
    }
});
