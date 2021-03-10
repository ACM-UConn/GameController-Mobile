import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, Button } from 'react-native';


export default function CreateModal(props) {
  const [modalVisible, setModalVisible] = useState(false);

  if(props.shouldRender) {
    return (
      <View style={styles.modalView}>
        <Modal animationType="slide" visible={props.shouldRender} transparent={true} >
          <View style={styles.modalObject}>
            <Text>Hello World!</Text>
            <Button title="End my misery" onPress={() => props.modalCreate(false)} />
          </View>
        </Modal>
      </View>
    )  
  }
  else {
    console.log('returning Null')
    return null;
  }
}

const styles = StyleSheet.create({
  modalObject: {
    top: "50%",
    left: "50%",
    height: 110,
    marginTop: -50,
    marginLeft: -110,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    position: "absolute",
  },
  modalView: {
    backgroundColor: "white",
    position: "absolute",
  },
})
