import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, Image ,useWindowDimensions} from 'react-native'

import Navigation from './src/navigation';

const App = () => {
  return (
    <SafeAreaView style={[styles.root]}>
      <Navigation/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    //backgroundColor: '#000000'
  }
})

export default App