import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})


// import { Button, StyleSheet, TextInput, View, Alert } from 'react-native';
// import React, { useState } from 'react';
// import { PreventRemoveContext } from '@react-navigation/native';

// const HomeScreen = () => {
//   const [color, setColor] = useState('grey'); // Selected color
//   const [boxNumber, setBoxNumber] = useState(''); // Box number input
//   const [colors, setColors] = useState(Array(8).fill('red')); // All 8 boxes

//   const handleColorChange = () => {
//     const index = parseInt(boxNumber) - 1; // Convert 1-based input to 0-based index
//     if (index >= 0 && index < colors.length) {
//     setColors(PrevColors=>{
//         const updated = [...PrevColors];
//         updated[index] = color;
//         return updated;
//     })
//     } else {
//       Alert.alert('Invalid Box Number', 'Please enter a number between 1 and 8');
//     }
//   };

//   return (
//     <View style={styles.screen}>
//       {/* Boxes */}
//       <View style={styles.boxContainer}>
//         {colors.map((boxColor, index) => (
//           <View
//             key={index}
//             style={[styles.box, { backgroundColor: boxColor }]}
//           />
//         ))}
//       </View>

//       {/* Inputs */}
//       <View style={styles.inputContainer}>
//         <TextInput
//           placeholder="Enter Color"
//           onChangeText={setColor}
//           style={styles.input}
//         />
//         <TextInput
//           placeholder="Enter Box Number"
//           onChangeText={setBoxNumber}
//           keyboardType="numeric"
//           style={styles.input}
//         />
//       </View>

//       {/* Button */}
//       <Button title="Change Color" onPress={handleColorChange} />
//     </View>
//   );
// };

// export default HomeScreen;

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'gray',
//   },
//   boxContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap', // ✅ Wrap boxes into multiple rows
//     justifyContent: 'center',
//     width: '100%',
//     marginBottom: 20,
//   },
//   box: {
//     width: 50,
//     height: 50,
//     margin: 5,
//   },
//   inputContainer: {
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   input: {
//     width: '50%',
//     height: 50,
//     borderWidth: 1,
//     borderColor: 'black',
//     backgroundColor: 'white',
//     marginTop: 10,
//     paddingHorizontal: 10,
//   },
// });
