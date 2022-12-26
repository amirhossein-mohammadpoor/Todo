import React, { useState } from "react"
import { StyleSheet } from "react-native"
import MapView from "react-native-maps"

const malaysiaCoordinates = {
  latitude: 4.2105,
  longitude: 101.9758,
  latitudeDelta: 5,
  longitudeDelta: 5
}

const Home = () => {

  return (
    <MapView
      initialRegion={malaysiaCoordinates}
      style={styles.map}
    >
      
    </MapView>
  )
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
})

export default Home