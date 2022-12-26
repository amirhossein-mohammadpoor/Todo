import React, { useEffect, useRef } from "react"
import SplashScreen from "react-native-splash-screen"
import { LogBox, BackHandler } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
// import { Provider } from "react-redux"
// import { getInternetCredentials } from "react-native-keychain"
// import messaging from "@react-native-firebase/messaging"
// import { PersistGate } from "redux-persist/integration/react"
import Toast from "react-native-simple-toast"

// import sendFcmToken from "./utils/sendFcmToken"
import AppNavigator from "./navigators/app"
// import { store, persistor } from "./redux/store"

LogBox.ignoreLogs(["VirtualizedLists", "componentWillReceiveProps"])

const App = () => {
  const backClickCount = useRef(0)
  const ref = useRef(ref)

  // const requestUserPermission = async () => {
  //   const authStatus = await messaging().requestPermission()
  //   const enabled =
  //     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  //     authStatus === messaging.AuthorizationStatus.PROVISIONAL

  //   if (!enabled) return

  //   sendFcmToken()
  // }

  // const getTokenFromSecureStorage = async () => {
  //   const response = await getInternetCredentials("tokens")
  //   const json = response?.password || null
  //   const tokens = JSON.parse(json) || { accessToken: null, refreshToken: null }
  //   store.dispatch(setTokens(tokens))

  //   if (!json) return

  //   setUserInfo(true)
  // }

  const handleBackButton = () => {
    backClickCount.current === 0 &&
      Toast.show("Press again to exit")

    backClickCount.current += 1

    backClickCount.current === 1 ?
      setTimeout(() => backClickCount.current = 0, 1000) : BackHandler.exitApp()

    return true
  }

  useEffect(() => {
    // getTokenFromSecureStorage()
    SplashScreen.hide()
    // requestUserPermission()
    BackHandler.addEventListener("hardwareBackPress", handleBackButton)
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackButton)
    }
  }, [])

  return (
    // <Provider store={store}>
    //   <PersistGate loading={null} persistor={persistor}>
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
    //   </PersistGate>
    // </Provider>
  )
}

export default App