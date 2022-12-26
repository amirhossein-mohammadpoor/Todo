import React from "react"
import { View, StyleSheet } from "react-native"

import { colors } from "themes"

const Card = ({ children, style }) => (
  <View style={StyleSheet.flatten([styles.container, style])}>
    {children}
  </View>
)

Card.defaultProps = {
  style: null
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    shadowColor: colors.gray50,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
    borderRadius: 8
  }
})

export default Card