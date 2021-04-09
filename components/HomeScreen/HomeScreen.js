import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import CreateModal from './CreateModal';
import ControllerList from './ControllerList';
import HomeActionBar from './HomeActionBar';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen(props) {

  const [modalCreate, setModalCreate] = useState(false);
  const [data, setData] = useState([])

  // when abraham (homeactionbar) sends me the screen that the user presses
  const screenCallback = (screen) => {
    props.changeScreen(screen);
  }

  const modalFunction = (state) => {
    setModalCreate(state);
  }

  const updateCont = async (value) => {
    try {
      const jsonValue = JSON.stringify({ id: "fksfii4h3546", title: value });
      await AsyncStorage.setItem("fksfii4h3546", jsonValue);
      setData([{ id: "fksfii4h3546", title: value }, ...data]);
      console.log('Success');

    } catch (error) {
      console.log("An Error has occurred");
      console.error(error);
    }
  }
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("fksfii4h3546");
      const value2 = JSON.parse(jsonValue);
      const bool = false;
      if(value2 != null)
      {
        setData([{id: value2.id, title: value2.title}]);
      }
    } catch (error) {
      console.log("An Error has ocurred");
      console.error(error);
    }
  }

  // does the return statement if the prop from App.js is true (if one of the different screens was clicked)
  if (props.shouldRender) {
    return(

    <View style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.headerText}>GameController</Text>
      </View>

      <View style={styles.list}>
        <ControllerList render={props.shouldRender} dataGet={() => getData()} controllerData={data} modalCreate={(state) => modalFunction(state)} Keys={() => props.allKeys()} render={modalCreate}></ControllerList>
      </View>

      <CreateModal updateController={(name) => updateCont(name)} shouldRender={modalCreate} modalCreate={(state) => modalFunction(state)} />
      <View style={styles.actionBar}>
        <HomeActionBar modalCreate={(state) => modalFunction(state)} screenRequest={screen => screenCallback(screen)}></HomeActionBar>
      </View>

    </View>)
  } else {
    return(null)
  }
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
    header: {
      flex: 0.2,
      paddingTop: 60,
      paddingBottom: 25,
      alignItems: 'center',
      justifyContent: 'center'
    },
    headerText: {
      fontSize: 40,
    },
    actionBar: {
      flex: 0.3,
    },
    list: {
      flex: 0.5,
    },
});