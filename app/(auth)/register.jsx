import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import DynamicSafeAreaView from "../../components/DynamicSafeAreaView"
import {router} from "expo-router"
import COLORS from "../../constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import {Avatar} from "react-native-elements";

const register = () => {



  return (<DynamicSafeAreaView className="h-full bg-white">
    <TouchableOpacity onPress={() => {
      router.navigate("/login")
    }} style={{
      backgroundColor: COLORS.fgrey, borderRadius: 20, width: 40, height: 40, marginLeft: 15, justifyContent: "center"
    }}>
      <Ionicons
          name="close"
          style={{
            fontSize: 35, color: COLORS.cgrey, marginLeft: 2
          }}
      />
    </TouchableOpacity>
    <Text className="text-center font-psemibold text-2xl pt-10 pb-10">Complétez votre profile pour continuer</Text>

    <View style={{alignItems: "center"}}>
      <Avatar
          size={150}
          rounded
          icon={{name: "user", type: "font-awesome"}}
          containerStyle={{backgroundColor: COLORS.cgrey}}
          // source={require("../test.png")}
      >
        <Avatar.Accessory size={40} name="camera" type="entypo" color={COLORS.cgrey}
                          style={{backgroundColor: COLORS.fgrey}}/>
      </Avatar>


    </View>
  </DynamicSafeAreaView>)
}

export default register
