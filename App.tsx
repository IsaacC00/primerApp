import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FloatingActionButton from './components/FloatingActionButton';

export default function App() {

  const [count, setCount] = useState<number>(0);

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Text>Hola Mundo !!!</Text>
      <Text style={styles.textHuge} >{count}</Text>
      {/* //? ya no se recomienda utilizar buttons, es emjor utilizar  */}\


      <FloatingActionButton label='+1' 
      onLongPress={ () => setCount(0) } 
      onPress={ () => setCount(count+1) }
      position='right'
      />

      <FloatingActionButton label='-1' 
      onLongPress={ () => setCount(0) } 
      onPress={ () => setCount(count-1) }
      position='left'
      />


      {/* <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => setCount(count - 1)}
      >
        <Text>-1</Text>
      </TouchableOpacity> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textHuge: {
    fontSize: 120,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right:20,
    backgroundColor:'#65558f',
    padding:20,
    borderRadius: 15,
    shadowColor:'#000',
    shadowOffset:{width:0, height:4},
    shadowOpacity:0.3,
    elevation: 3,
    shadowRadius:3

  }

});
