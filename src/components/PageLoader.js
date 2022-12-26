import React from "react"
import { View, ActivityIndicator, StyleSheet } from "react-native"

import { colors } from "themes"

const PageLoader = () => (
  <View style={styles.centered}>
    <ActivityIndicator color={colors.tertiary} size={50} />
  </View>
)

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default PageLoader