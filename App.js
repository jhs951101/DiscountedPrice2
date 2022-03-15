import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Title from './components/title';
import Body from './components/body';

export default function App() {

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        <Title />
        
        <View style={styles.inner_container}>
          <Body/>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inner_container: {
    flex: 1,
    backgroundColor: '#eee',
    padding: 10,
    justifyContent: 'center',
    //alignItems: 'center',
  },
});
