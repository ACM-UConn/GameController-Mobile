import React,{useState} from 'react';
import { Text, StyleSheet, View, Dimensions, Pressable } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function ControllerConnect(props) {
  const [scanned, setScanned] = useState(false);

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;


  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    props.passData(data);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };
  
  console.log(props.cameraPerms)
  if(props.cameraPerms==null){
    return(
      <View style={styles.container}>
        <Text>Waiting for permission</Text>
      </View>
    )
  }
  else if(props.cameraPerms==false){
    return(
      <View style={styles.container}>
        <Text>Permission Denied</Text>
      </View>
    )
  }
  else if(props.cameraPerms==true){
    return(
      <View style={styles.container}> 
        <BarCodeScanner style={{ height: windowHeight+20, width: windowWidth}} onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}></BarCodeScanner>
        <Pressable style={({ pressed }) => [{backgroundColor: pressed ? 'grey' : 'white'}, styles.exitBtn]} onPress={() => {props.navigate('home')}}>
          <Text style={styles.text}>Back</Text>
        </Pressable>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  barcodeContainer:{
    width: 700  
  },

  exitBtn: {
    position: 'absolute',
    left: 25,
    top: 25,
    borderRadius: 8,
    padding: 15
  },

  text: {
    fontSize: 24
  }
});