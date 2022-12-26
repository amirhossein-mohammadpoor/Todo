import React, { PureComponent } from "react"
import { Animated, StyleSheet } from "react-native"

import { colors } from "themes"

const DEFAULT_POSITION = 12
const FOCUSED_POSITION = -6
const DEFAULT_ANIMATION_DURATION = 225

class Label extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      input: new Animated.Value(this.inputState()),
      focus: new Animated.Value(this.focusState()),
    }
  }

  // TODO: convert this into a function component
  // eslint-disable-next-line react/no-deprecated
  componentWillReceiveProps(props) {
    const { focus, input } = this.state
    const {
      isActive, isFocused, isError,
    } = this.props
    const duration = DEFAULT_ANIMATION_DURATION

    if (isFocused ^ props.isFocused || isActive ^ props.isActive) { // eslint-disable-line
      const toValue = this.inputState(props)

      Animated
        .timing(input, { toValue, duration, useNativeDriver: false })
        .start()
    }

    if (isFocused ^ props.isFocused || isError ^ props.isError) { // eslint-disable-line
      const toValue = this.focusState(props)

      Animated
        .timing(focus, { toValue, duration, useNativeDriver: false })
        .start()
    }
  }

  inputState({ isFocused, isActive } = this.props) {
    return isActive || isFocused ? 1 : 0
  }

  focusState({ isFocused, isError } = this.props) {
    // eslint-disable-next-line no-nested-ternary
    return isError ? -1 : (isFocused ? 1 : 0)
  }

  render() {
    const {
      children,
      fontSize,
      activeFontSize,
      isError,
      isFocused,
      isActive,
      errorColor,
      focusedColor,
      baseColor,
      onPress,
      labelColor,
      ...props
    } = this.props
    const { input, focus } = this.state
    const color = focus.interpolate({
      inputRange: [-1, 0, 1],
      outputRange: [errorColor, baseColor, focusedColor],
    })

    const top = input.interpolate({
      inputRange: [0, 1],
      outputRange: [
        DEFAULT_POSITION,
        FOCUSED_POSITION,
      ],
    })

    const size = input.interpolate({
      inputRange: [0, 1],
      outputRange: [fontSize, activeFontSize],
    })

    const textStyle = {
      fontSize: size,
      color,
    }

    const containerStyle = {
      top,
    }

    return (
      <Animated.View
        style={[
          styles.container,
          { height: fontSize * 1.4 },
          { backgroundColor: colors[labelColor] },
          containerStyle,
        ]}
      >
        <Animated.Text style={[textStyle]} {...props} onPress={onPress}>
          {children}
        </Animated.Text>
      </Animated.View>
    )
  }
}

Label.defaultProps = {
  fontSize: 13,
  activeFontSize: 11,
  focusedColor: colors.primary,
  baseColor: colors.gray50,
  errorColor: colors.tertiary,
  labelColor: "white"
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 10,
    paddingHorizontal: 5,
    backgroundColor: "red"
  }
})

export default Label