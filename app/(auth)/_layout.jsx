import React from "react"
import {Stack} from "expo-router"

export default function AuthLayout() {
  return (<Stack
      screenOptions={{
        headerShown: false,
      }}>
    {/*<Stack.Screen name="login" options={{headerShown: false}}></Stack.Screen>*/}
    {/*<Stack.Screen name="otp" options={{headerShown: false}}></Stack.Screen>*/}
    {/*<Stack.Screen name="register" options={{headerShown: false}}></Stack.Screen>*/}
  </Stack>)
}

