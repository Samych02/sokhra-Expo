import React, {useState} from 'react'
import {ActivityIndicator, Alert, Text, TouchableOpacity, View} from 'react-native'
import {router, useLocalSearchParams} from 'expo-router'
import DynamicSafeAreaView from "../../components/DynamicSafeAreaView";
import {height} from "../../constants/dimmesions";
import {OtpInput} from "react-native-otp-entry";
import COLORS from "../../constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import auth from "@react-native-firebase/auth";
import {log} from "expo/build/devtools/logger";
import confirmStore from "../../store/confirmStore";

const otp = () => {


  const {parsedPhoneNumber} = useLocalSearchParams()
  const [numberOfSeconds, setNumberOfSeconds] = useState(30)
  const [loading, setLoading] = useState(false)
  const { confirm, setConfirm } = confirmStore();


  const confirmCode = async (code) => {
    try {
      await confirm.confirm(code)
      console.log(await auth().currentUser.getIdToken(true))
      console.log(2)
      console.log(await auth().currentUser)
    } catch (error) {
      Alert.alert("code incorrect")
    }
  }

  const handlePress = () => {
    setNumberOfSeconds(60)
    Alert.alert("Un nouveau code à été envoyé")
  }
  if (numberOfSeconds >= 0) {
    setTimeout(() => setNumberOfSeconds(numberOfSeconds - 1), 1000);
  }

  return (
      <DynamicSafeAreaView className="h-full bg-primary">
        <TouchableOpacity onPress={() => {
          router.navigate("/login")
        }}>
          <Ionicons
              name="arrow-back-circle-outline"
              style={{
                marginLeft: 15, fontSize: 40, color: COLORS.secondary,
              }}
          />
        </TouchableOpacity>
        <Text className="text-center font-psemibold text-2xl" style={{marginTop: height * 0.1}}>Saisissez le code</Text>
        {/*<Text className="text-center font-pregular mx-10 mb-10">Un code de vérification a été envoyé*/}
        {/*  à {parsedPhoneNumber.replace(" ", "\u00A0")}</Text>*/}
        <View className="mx-5 mb-10">

          <OtpInput
              numberOfDigits={6}
              focusColor={COLORS.secondary}
              hideStick
              theme={{
                pinCodeContainerStyle: {
                  backgroundColor: "white", width: 50, height: 50,
                }, focusedPinCodeContainerStyle: {
                  borderWidth: 3,
                }, pinCodeTextStyle: {
                  fontWeight: "bold"
                }
              }}
              onFilled={(code)=>confirmCode(code)}
          />
        </View>
        {numberOfSeconds >= 0 &&
            <Text className="mx-5 text-center justify-center font-pmedium text-lg">Vous pouvez demander un code à
              nouveau dans {numberOfSeconds} s</Text>}
        {numberOfSeconds < 0 &&
            <TouchableOpacity className="mx-4 justify-center items-center  h-11 bg-secondary rounded-md"
                              style={{marginBottom: 25}} onPress={handlePress}>
              {loading ? <ActivityIndicator size="large" color="white"/> :
                  <Text className="text-white font-pmedium text-lg">Renvoyer le code</Text>}
            </TouchableOpacity>}
      </DynamicSafeAreaView>)
}

export default otp
