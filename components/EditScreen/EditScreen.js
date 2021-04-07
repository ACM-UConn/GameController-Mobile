import React, { useState } from "react";
import { StyleSheet, Pressable, View, Text, Modal, TextInput, Dimensions } from "react-native";
import EditActionBar from "./EditActionBar.js";
// import SideMenu from "./SideMenu.js";
import Draggable from "react-native-draggable";
import DropDownPicker from "react-native-dropdown-picker";
// import EditScreenModal from "./EditScreenModal.js";

export default function EditScreen(props) {

  const [visibility, setVisibility] = useState(false);
  const [buttonList, setButtonList] = useState([]);
  const [buttonNum, setButtonNum] = useState(0);
  const [highlightedButton, setHighlightedButton] = useState({id: null, style: null});
  const [modalVisiblity, setModalVisiblity] = useState(false);
  const [btnName, setBtnName] = useState("");
  const [btnParam, setBtnParam] = useState({
    btnType: 'button',
    btnColor: 'red',
  });

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

  const handleAddButton = (btnName, btnType, btnColor) => {
    console.log(btnType);
    console.log(btnParam);
    if (highlightedButton.id == null && btnName != "") {
      setButtonList(
        [{id: buttonNum, style: {width: 60, height: 60, borderRadius: 8, padding: 15, backgroundColor: btnColor}}, ...buttonList]
      );
      setButtonNum(buttonNum+1);
      setBtnName("");
      setBtnParam({
        btnType: null,
        btnColor: null,
      });
    }
    modalVisible();
  }

  const setHighlighted = (item) => {
    setHighlightedButton({id: item.id, style: item.style});
    setVisibility(true);
  }

  const closeMenu = () => {
    setVisibility(false);
    setHighlightedButton({id: null, style: null});
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
    props.changeScreen(screen);
    setButtonList([]);
    setButtonNum(0);
  }

  const closeModal = () => {
    setBtnName("");
    setBtnParam({
      btnType: null,
      btnColor: null,
    });
    modalVisible();
  }

  const changeBtnParam = (item) => {
    if (item.type === "btnType") {
      setBtnParam({
        btnName: btnName,
        btnType: item.value,
        btnColor: btnParam["btnColor"],
      });
    } else if (item.type === "btnColor") {
      setBtnParam({
        btnName: btnName,
        btnType: btnParam["btnType"],
        btnColor: item.value,
      });
    }
  }

  if (props.shouldRender) {
    return(
      <View style={styles.container}>

        <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? "gray" : "darkgray"}, styles.wrapperCustom]} onPress={() => {props.changeScreen("home")}}>
          <Text styles={styles.text}>Back</Text>
        </Pressable>

        <View style={styles.body}>
          <Text>This is the body.</Text>
          {buttons}
        </View>

        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisiblity}>
            <View style={styles.centeredView}></View>
            <View style={styles.modalView}>

              <View style={styles.modalFlexbox}>

                <Pressable onPress={() => {closeModal()}} style={[styles.button, styles.closeModal]}>
                  <Text style={{color: "white", fontWeight: "bold"}}>Back</Text>
                </Pressable>

                <View>
                  <Text style={{marginBottom: 5}}>Name: </Text>
                  <TextInput
                    style={{height: 50, width: 200, borderWidth: 1, borderColor: "black", borderRadius: 10, paddingLeft: 10}}
                    placeholder="button name!"
                    onChangeText={text => setBtnName(text)}
                    value={btnName}
                  />
                </View>
                
                <View style={{zIndex: 2}}>
                  <DropDownPicker
                    items={[
                        {label: "Button", value: "button", type: "btnType"},
                        {label: "Joystick", value: "joystick", type: "btnType"},
                        {label: "D-pad", value: "dpad", type: "btnType"},
                    ]}
                    defaultValue={"button"}
                    containerStyle={{height: 50, width: 200}}
                    style={{backgroundColor: "#fafafa"}}
                    itemStyle={{ justifyContent: "flex-start", height: 50, borderBottomWidth: 1}}
                    dropDownStyle={{backgroundColor: "#fafafa", height: 120, width: 200}}
                    onChangeItem={(item) => {changeBtnParam(item)}}
                  />
                </View>

                <View style={{zIndex: 1}}>
                  <DropDownPicker
                    items={[
                        {label: "Red", value: "red", type: "btnColor"},
                        {label: "Orange", value: "orange", type: "btnColor"},
                        {label: "Yellow", value: "yellow", type: "btnColor"},
                        {label: "Green", value: "green", type: "btnColor"},
                        {label: "Blue", value: "blue", type: "btnColor"},
                        {label: "Pink", value: "pink", type: "btnColor"},
                    ]}
                    defaultValue={"red"}
                    containerStyle={{height: 50, width: 200}}
                    style={{backgroundColor: "#fafafa"}}
                    itemStyle={{ justifyContent: "flex-start", height: 50, borderBottomWidth: 1}}
                    dropDownStyle={{backgroundColor: "#fafafa", height: 120, width: 200}}
                    onChangeItem={(item) => {changeBtnParam(item)}}
                  />
                </View>

                <Pressable onPress={() => {handleAddButton(btnName, btnParam["btnType"], btnParam["btnColor"])}} style={[styles.button, styles.buttonCreate]}>
                  <Text style={{color: "white", fontWeight: "bold"}}>Create Button</Text>
                </Pressable>

              </View>

            </View>
        </Modal>

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
      width: "100%",
      flexDirection: "column"
    },

    body: {
      flex: 1,
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f5f5f5",
    },
    actionBar: {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "10%"
    },
    wrapperCustom: {
      width: 100,
      borderRadius: 8,
      padding: 15,
      marginLeft: 20
    },
    text: {
      fontSize: 24,
    },
    menu: {
      position: "absolute",
      width: 200,
      height: 250,
      top: 0,
      right: 0,
    },
    centeredView: {
      position: "absolute",
      width: Dimensions.get("window").width,
      height: Dimensions.get("window").height,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "black",
      opacity: 0.6
    },
    modalView: {
      position: "absolute",
      top: "30%",
      left: "10%",
      width: 300,
      height: 350,
      backgroundColor: "white",
      borderRadius: 20,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      }
    },
    modalFlexbox: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "100%",
      justifyContent: "space-evenly",
      alignItems: "center",
    },
    button: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
      elevation: 2,
      width: 200,
      height: 50,
    },
    closeModal: {
      backgroundColor: "rgba(200, 0, 0, .75)",
      width: 75,
      height: 40,
      alignSelf: "flex-start",
      marginLeft: 50
    },
    buttonCreate: {
      backgroundColor: "#2196F3"
    }
});