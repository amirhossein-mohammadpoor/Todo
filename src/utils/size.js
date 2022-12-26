import { Platform, Dimensions } from "react-native"

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get("window")

export function isIphoneX() {
  return (
    Platform.OS === "ios"
    && !Platform.isPad
    && !Platform.isTVOS
    && ((SCREEN_HEIGHT >= 812 || SCREEN_WIDTH >= 812)
      || (SCREEN_HEIGHT >= 896 || SCREEN_WIDTH >= 896))
  )
}

export const getScreenHeight = () => SCREEN_HEIGHT
export const getScreenWidth = () => SCREEN_WIDTH

export function ifIphoneX(iphoneXStyle, regularStyle) {
  if (isIphoneX()) {
    return iphoneXStyle
  }
  return regularStyle
}

export const isIos = () => Platform.OS === "ios"

export const getStatusBarHeight = () => {
  const INNER_STATUS_BAR_HEIGHT = isIphoneX() ? 44 : 20
  return isIos() ? INNER_STATUS_BAR_HEIGHT : 0
}

export const getHeaderHeight = () => {
  const INNER_HEADER_HEIGHT = isIphoneX() ? 98 : 74
  return isIos() ? INNER_HEADER_HEIGHT : 56
}

export const getNavBarHeight = () => getHeaderHeight() - getStatusBarHeight()