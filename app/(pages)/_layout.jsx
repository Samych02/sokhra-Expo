import {Stack} from "expo-router";
import React from "react";
import {GestureHandlerRootView} from "react-native-gesture-handler";

export default function AppLayout() {
  return (
      <GestureHandlerRootView>
        <Stack
            screenOptions={{
              headerShown: false,
              // cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
            }}>
          <Stack.Screen name="home" options={{headerShown: false}}></Stack.Screen>
          <Stack.Screen name="test" options={{headerShown: false}}></Stack.Screen>
        </Stack>
      </GestureHandlerRootView>
  )
}

