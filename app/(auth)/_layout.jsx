import React from "react";
import {Stack} from "expo-router";

const AuthLayout = () => {

  return (<Stack>
        <Stack.Screen name="login" options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name="otp" options={{headerShown: false}}></Stack.Screen>
      </Stack>);
};

export default AuthLayout;