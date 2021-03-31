import React, { useState } from 'react';
import { StyleSheet, Pressable, View, Text, ScrollView } from 'react-native';

export default function DropdownMenu(props) {
  const [value, setValue] = useState("select " + props.attribute);
  const [menuVisible, setMenuVisible] = useState(true);

  const updateValue = newValue => {
    setValue(newValue);
    setMenuVisible(!menuVisible);
  }
  
  const options = props.options.map((option, _key) => {
    key = _key;
    return(
      <Pressable style={styles.option}  onPress={() => updateValue(option)} key={option.id}>
        <Text>{option}</Text>
      </Pressable>
    )
  })
  
  return(
    <View style={styles.dropdownMenu}>
      
      <Pressable styles={styles.value} onPress={() => setMenuVisible(!menuVisible)}>
        <Text>{value}</Text>
      </Pressable>

      <ScrollView style={styles.picker, {display: menuVisible}}>
        {options}
      </ScrollView>
    
    </View>
  )
}


const styles = StyleSheet.create({
  dropdownMenu: {
    position: 'relative',
    width: 200,
    height: 50,
    borderWidth: 1
  },
  value: {
    backgroundColor: 'green'
  },
  picker: {
    borderWidth: 1 
  },
  option: {
    height: 25,
    borderWidth: 1
  }
})