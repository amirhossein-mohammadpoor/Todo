import React, { useState, useRef } from "react"
import {
  TextInput as RNTextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native"
import Icon from "react-native-vector-icons/Feather"

import { colors, fonts } from "themes"
import Label from "./Label"
import Text from "./Text"

const TextField = props => {
  const {
    initialValue,
    label,
    error,
    labelColor,
    renderRightComponent,
    hideError,
    secureTextEntry,
    multiline,
    onChangeText,
    value,
    ...otherProps
  } = props

  const [isFocused, setFocused] = useState(false)
  const [isSecureVisible, setSecureVisible] = useState(secureTextEntry)

  const inputRef = useRef(null)

  const isActive = value !== null && value !== ""
  const labelProps = {
    isActive,
    isFocused,
    isError: error !== null,
    onPress: () => inputRef?.current?.focus(),
    labelColor,
  }

  return (
    <View>
      <View style={[
        styles.inputContainer,
        isFocused && styles.inputContainerActive,
        error && styles.inputContainerError,
      ]}
      >
        <RNTextInput
          defaultValue={initialValue}
          value={value}
          style={[
            styles.input,
            multiline && styles.textarea,
          ]}
          autoCapitalize="none"
          onFocus={() => setFocused(true)}
          onEndEditing={() => setFocused(false)}
          ref={(ref) => { inputRef.current = ref }}
          onChangeText={onChangeText}
          underlineColorAndroid="transparent"
          secureTextEntry={isSecureVisible}
          multiline={multiline}
          {...otherProps}
        />
        {renderRightComponent && (
          <View
            style={styles.rightContainer}
          >
            {secureTextEntry && (
              <TouchableOpacity onPress={() => setSecureVisible(!isSecureVisible)}>
                <Icon name={isSecureVisible ? "eye" : "eye-off"} />
              </TouchableOpacity>
            )}
            {renderRightComponent()}
          </View>
        )}
        {secureTextEntry && (
          <View style={styles.rightContainer}>
            <TouchableOpacity onPress={() => setSecureVisible(!isSecureVisible)}>
              <Icon
                name={isSecureVisible ? "eye-off" : "eye"}
                color={colors.gray25}
                size={18}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
      {label && <Label {...labelProps}>{label}</Label>}
      {!hideError && <Text color="tertiary" style={styles.error}>{error}</Text>}
    </View>
  )
}

TextField.defaultProps = {
  value: null,
  error: null,
  label: null,
  onChangeText: () => {},
  labelColor: "white",
  initialValue: "",
  renderRightComponent: null,
  hideError: false,
  secureTextEntry: false,
  multiline: false,
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 3,
    borderWidth: 2,
    borderColor: colors.gray10,
  },
  input: {
    height: 40,
    flex: 1,
    paddingHorizontal: 15,
    color: colors.gray75,
    ...fonts.p2(),
  },
  inputContainerActive: {
    borderColor: colors.primary,
  },
  inputContainerError: {
    borderColor: colors.tertiary,
  },
  error: {
    marginBottom: 4,
  },
  rightContainer: {
    marginRight: 15,
  },
  textarea: {
    minHeight: 200
  },
})

export default TextField