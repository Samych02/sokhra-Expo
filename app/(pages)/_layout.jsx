import {Stack} from "expo-router";
import React from "react";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {View} from "react-native";

export default function AppLayout() {
  return (
      <GestureHandlerRootView>
        <View className="h-full w-full">
          <Stack
              screenOptions={{
                headerShown: false,
                // cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
              }}>
            <Stack.Screen name="home" options={{headerShown: false}}></Stack.Screen>
            <Stack.Screen name="listings" options={{headerShown: false}}></Stack.Screen>
            {/*<Stack.Screen name="chatList" options={{headerShown: false}}></Stack.Screen>*/}
            {/*<Stack.Screen name="chatScreen" options={{headerShown: false}}></Stack.Screen>*/}
            <Stack.Screen name="test" options={{headerShown: false}}></Stack.Screen>
          </Stack>
        </View>
      </GestureHandlerRootView>
  )
}

