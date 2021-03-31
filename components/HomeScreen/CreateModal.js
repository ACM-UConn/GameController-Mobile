import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, Button, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function CreateModal(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [controllerName, setControllerName] = useState('');

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify({ id: "fksfii4h3546", title: value });
      await AsyncStorage.setItem("fksfii4h3546mnmfj3", jsonValue);
      console.log('Success (dexters voice)');

    } catch (error) {
      console.log("An Error has occurred");
      console.error(error);
    }
  }

  const changeControllerName = (name) => {
    setControllerName(name)
  }

  const createController = () => {
    if(controllerName == '') {
      console.log("invaild input please input a correct title");
    }
    else
    {
      props.updateController(controllerName);
      setControllerName('')
      console.log("Controller has been created");
    }
    props.modalCreate(false);
  }

  const cancelModal = () => {
    props.modalCreate(false);
  }

  if(props.shouldRender) {
    return (
      <View style={styles.modalView}>
        <Modal animationType="slide" visible={props.shouldRender} transparent={true} >
          <View style={styles.modalObject}>
            <View style={styles.controllerName}>
              <Text>Name: </Text>
              <TextInput style={styles.controllerText} placeholder="Controller Name" value={controllerName} onChangeText={changeControllerName} />
            </View>
            <View style={styles.createButton}>
              <Button title="Create Controller" onPress={() => createController()} />
              <Button title="Cancel" onPress={() => cancelModal()}/>
            </View>
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
    height: 170,
    marginTop: -50,
    marginLeft: -120,
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
  controllerTextInput: {
    width: 300,
    padding: 20,
    borderRadius: 7,
    borderColor: 'black',
    borderWidth: 2
  },
  controllerName: {
    flexDirection: 'row',
    padding: 10,
  },
  createButton: {
    marginTop: 10
  }
})
