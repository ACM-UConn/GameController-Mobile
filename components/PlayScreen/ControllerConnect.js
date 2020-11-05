import React from 'react';
import { ImagePropTypes, StyleSheet, View } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function ControllerConnect(props) {
  //cameraPerms
  const [scanned, setScanned] = useState(false);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    props.done(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };
  
  if(props.cameraPerms==null){
    //waiting for permission
    return(
      <View>
        <Text>Waiting for permission</Text>
      </View>
    )
  }
  if(props.cameraPerms==false){
    //denied permission
    return(
      <View>
        <Text>Permission Denied</Text>
      </View>
    )
  }
  if(props.cameraPerms==true){
    //permissions granted
   // <View>Permission Granted</View>
    return(
      <View>
        <BarCodeScanner onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}></BarCodeScanner>
      </View>
    )
  }

  }


const styles = StyleSheet.create({
    
});