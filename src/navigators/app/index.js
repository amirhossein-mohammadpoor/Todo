import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { Home } from "pages"

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <Stack.Navigator
      mode="modal"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}

export default App