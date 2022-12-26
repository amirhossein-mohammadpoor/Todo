import React from "react"
import { TouchableOpacity, StyleSheet, View } from "react-native"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import LinearGradient from "react-native-linear-gradient"

import { colors } from "themes"
import Text from "./Text"

const Checkbox = (props) => {
  const { label, style, value, onChange, disabled, variant } = props

  const Component = value ?
    variant === "gradient" ? LinearGradient : View
    : View
  const componentProps = value ?
    variant === "gradient" ? {
      colors: [colors.tertiary, colors.primaryAlt, colors.primary],
      start: { x: 0, y: 0 },
      end: { x: 1, y: 0 },
    } : {
      backgroundColor: colors.green
    }
    : {}

  return (
    <TouchableOpacity
      disabled={disabled}
      style={styles.container}
      onPress={() => !disabled && onChange(!value)}
    >
      <Component
        {...componentProps}
        style={[
          styles.checkbox,
          !value && styles.default,
          style
        ]}
      >
        <Icon
          name="check"
          color={colors.white}
          size={12}
        />
      </Component>
      {label && <Text>{label}</Text>}
    </TouchableOpacity>
  )
}

Checkbox.defaultProps = {
  style: null,
  label: null,
  value: false,
  onChange: () => {},
  controlledExternally: false,
  disabled: false,
  variant: "gradient"
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  default: {
    borderColor: colors.gray25,
    borderWidth: 1
  },
})

export default Checkbox