import React from 'react';
import { ImagePropTypes, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function ControllerConnect() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const screenCallback = (screen)=>{
    props.changeScreen(screen)
  }

  
  if(props.shouldRender==True){
  return (
      null
  );
  }
}

const styles = StyleSheet.create({
    
});