import React from "react"
import { Text as RNText, StyleSheet } from "react-native"

import { fonts, colors } from "themes"

const Text = (props) => {
  const {
    style, 
    children, 
    centered, 
    flex, 
    font, 
    weight, 
    color, 
    ...otherProps
  } = props

  return (
    <RNText
      allowFontScaling={false}
      style={StyleSheet.flatten([
        centered && styles.centered,
        flex && styles.flex,
        {
          color: colors[color],
          ...fonts[font](weight),
        },
        style,
      ])}
      {...otherProps}
    >
      {children}
    </RNText>
  )
}

Text.defaultProps = {
  children: null,
  style: null,
  centered: false,
  flex: false,
  color: "gray100",
  font: "p2",
  weight: "regular",
};

const styles = StyleSheet.create({
  centered: {
    textAlign: "center",
  },
  flex: {
    flex: 1,
  }
})

export default Text