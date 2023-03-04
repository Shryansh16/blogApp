import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";

import Navigation from "./navigation/Navigation";

const App = () => {
  return (
    <View style={styles.mainContainer} >
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />

      <Navigation />
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,

  }
})

export default App