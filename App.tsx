import { View, Text } from 'react-native'
import React from 'react'
import Navigation from './src/navigation/Navigation'

const App = () => {
  return <Navigation/>
}

export default App



// import { View, Text, TextInput, FlatList, Button, Alert } from 'react-native'
// import React, { useState } from 'react'

// import Navigation from './src/navigation/Navigation'


// export default function App() {
//   const [data, setData] = useState<string[]>([]);
//   const [task, setTask] = useState('');
//   const [editIndex, setEditIndex] = useState<number | null>(null);

//   const handlePress = () => {
//     if (task.trim()) {
//       if (editIndex !== null) {
//         // Update existing task
//         const newData = [...data];
//         newData[editIndex] = task;
//         setData(newData);
//         setEditIndex(null);
//       } else {
//         // Add new task
//         setData(prevData => [...prevData, task]);
//       }
//       setTask('');
//     }
//   };

//   return (
//     <View style={{ flex: 1, backgroundColor: 'white' }}>
//       <View style={{ padding: 10 }}>
//         <TextInput
//           value={task}
//           placeholder='Set a task'
//           onChangeText={setTask}
//           style={{
//             height: 50,
//             borderWidth: 1,
//             borderColor: 'black',
//             marginBottom: 10,
//             paddingHorizontal: 10,
//             borderRadius: 5
//           }}
//         />
//         <Button title={editIndex !== null ? 'Update Task' : 'ADD'} onPress={handlePress} />
//       </View>

//       <View style={{ flex: 1, paddingHorizontal: 10 }}>
//         <FlatList
//           data={data}
//           renderItem={({ item, index }) => (
//             <View style={{
//               height: 50,
//               borderWidth: 1,
//               borderColor: 'black',
//               marginVertical: 5,
//               paddingHorizontal: 10,
//               justifyContent: 'center',
//               borderRadius: 5
//             }}>
//               <View style={{
//                 flexDirection: 'row',
//                 justifyContent: 'space-between',
//                 alignItems: 'center',
//                 backgroundColor: 'white'
//               }}>
//                 <Text>{item}</Text>
//                 <Button
//                   title='Delete'
//                   onPress={() => {
//                     Alert.alert('Delete Task', 'Are you sure?', [
//                       { text: 'Cancel', style: 'cancel' },
//                       {
//                         text: 'Delete',
//                         onPress: () => setData(prevData => prevData.filter((_, i) => i !== index))
//                       }
//                     ]);
//                   }}
//                 />
//                 <Button
//                   title='Edit'
//                   onPress={() => {
//                     setTask(item);
//                     setEditIndex(index);
//                   }}
//                 />
//               </View>
//             </View>
//           )}
//           keyExtractor={(item, index) => index.toString()}
//           showsVerticalScrollIndicator={false}
//           ListEmptyComponent={() => (
//             <View style={{ padding: 10 }}>
//               <Text>No tasks added yet</Text>
//             </View>
//           )}
//         />
//       </View>
//     </View>
//   );
// }
