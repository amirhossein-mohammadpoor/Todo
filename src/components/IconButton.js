import React from "react"
import { StyleSheet, TouchableOpacity, View, ActivityIndicator } from "react-native"
import Feather from "react-native-vector-icons/Feather"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

import colors from "themes"
import Text from "./Text"

const IconButton = props => {
  const {
    icon,
    size,
    onPress,
    text,
    color,
    style,
    badge,
    iconType,
    loading,
    disabled
  } = props

  const Icon = iconType === "Feather" ? Feather : MaterialCommunityIcons
  return (
    <TouchableOpacity
      onPress={!loading && onPress}
      style={StyleSheet.flatten([styles.container, style])}
      disabled={disabled}
    >
      {badge && <View style={styles.badge}><Text color="white" weight="medium" font="h6">{badge}</Text></View>}
      {loading ?
        <ActivityIndicator color="white" size={20} /> :
        <Icon
          size={size}
          name={icon}
          color={colors[color]}
        />
      }
      {text && <Text font="h6" color={color} weight="medium">{text}</Text>}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  badge: {
    borderRadius: 100,
    height: 16,
    width: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.tertiary,
    padding: 2,
    position: "absolute",
    top: -5,
    right: -5,
    zIndex: 10
  }
})

IconButton.defaultProps = {
  loading: false,
  size: 20,
  onPress: null,
  text: null,
  color: "gray100",
  style: null,
  badge: null,
  iconType: "Feather",
  disabled: false
}

export default IconButton