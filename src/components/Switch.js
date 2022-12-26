import React from "react"
import { Switch as RNSwitch } from "react-native"

import { colors } from "themes"

const Switch = ({ value, toggleSwitch, ...props }) => (
  <RNSwitch
    trackColor={{ false: colors.gray10, true: colors.primary }}
    ios_backgroundColor={colors.gray10}
    onValueChange={toggleSwitch}
    value={value}
    {...props}
  />
)

Switch.defaultProps = {
  value: false,
}

export default Switch