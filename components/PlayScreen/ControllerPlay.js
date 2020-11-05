import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View} from 'react-native';

export default function ControllerPlay() {
  const [a, setA] = useState(0);
  const onPressA = () => setA(a + 1)

  const [b, setB] = useState(0);
  const onPressB = () => setB(b + 1)
  
  const [x, setX] = useState(0);
  const onPressX = () => setX(x + 1)
  
  const [y, setY] = useState(0);
  const onPressY = () => setY(y + 1)

  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={onPressA}>
        <View style={styles.button, styles.buttonA}>
          <Text>A: {a}</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={onPressB}>
        <View style={styles.button, styles.buttonB}>
          <Text>B: {b}</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={onPressX}>
        <View style={styles.button, styles.buttonX}>
          <Text>X: {x}</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={onPressY}>
        <View style={styles.button, styles.buttonY}>
          <Text>Y: {y}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    height: 25,
    width: 25,
    color: '#000000',
    backgroundcolor: '#000000',
    borderRadius: 12.5,
    display: inline-block
  },
  buttonA: { backgroundcolor: 'green' },
  buttonB: { backgroundcolor: 'red' },
  buttonX: { backgroundcolor: 'blue' },
  buttonY: { backgroundcolor: 'yellow' },
});