import React from "react"
import { View, ActivityIndicator, StyleSheet } from "react-native"

import { colors } from "themes"

const LoadingMore = ({ size = 50, loading }) => {
  if (!loading) return null

  return (
    <View style={styles.center}>
      <ActivityIndicator
        color={colors.tertiary}
        size={size}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  center: {
    alignItems: "center",
    marginVertical: 16
  }
})

export default LoadingMore