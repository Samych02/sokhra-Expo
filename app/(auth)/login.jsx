import React, {useState} from 'react'
import {ActivityIndicator, Alert, Text, TouchableOpacity, View} from 'react-native'
import PhoneNumberField from "../../components/PhoneNumberField"
import DynamicSafeAreaView from "../../components/DynamicSafeAreaView"
import {height} from "../../constants/dimmesions"
import validatePhoneNumber from "../utils/validatePhoneNumber"
import parseValidePhoneNumber from "../utils/parseValidePhoneNumber"
import {router} from "expo-router"
import confirmStore from "../../store/confirmStore"
import loginWithPhoneNumber from "../utils/loginWithPhoneNumber";

const login = () => {
  const [countryCode, setCountryCode] = useState(null)
  const [nationalNumber, setNationalNumber] = useState("")
  const [loading, setLoading] = useState(false)
  const {confirm, setConfirm} = confirmStore();


  const handlePress = () => {
    if (nationalNumber === "") {
      return Alert.alert("Veuillez entrer votre numéro de téléphone")
    }
    setLoading(true)
    const flag = validatePhoneNumber(countryCode.cca2, nationalNumber)
    if (!flag) {
      setLoading(false)
      return Alert.alert("Numéro de téléphone invalide")
    }
    const parsedPhoneNumber = parseValidePhoneNumber(countryCode.cca2, nationalNumber)
    loginWithPhoneNumber(parsedPhoneNumber, setConfirm)
    setLoading(false)

    router.navigate({pathname: "/otp", params: {parsedPhoneNumber: parsedPhoneNumber}})
  }

  return (<DynamicSafeAreaView className="h-full bg-white">
    <Text className="text-center font-pbold text-2xl" style={{marginTop: height * 0.1}}>Indiquez votre
      numéro</Text>
    <Text className="text-center font-pregular mx-10 mb-10">Nous vous enverrons un code pour vérifier votre
      téléphone</Text>
    <View className="mx-3">
      <PhoneNumberField nationalNumber={nationalNumber} setNationalNumber={setNationalNumber}
                        countryCode={countryCode} setCountryCode={setCountryCode}/>
      <TouchableOpacity className="justify-center items-center w-full h-11 bg-brand rounded-md"
                        style={{marginBottom: 25}} onPress={handlePress} disabled={loading}>
        {loading ? <ActivityIndicator size="large" color="white"/> :
            <Text className="text-white font-pmedium text-lg">Envoyer le code</Text>}
      </TouchableOpacity>
    </View>
    <Text style={{fontSize: 11}} className="text-black font-pextralight mx-4 text-center">L'adhésion à notre
      application signifie que vous acceptez nos <Text className="underline">Conditions d'utilisation</Text> et
      notre <Text className="underline">Politique de confidentialité</Text></Text>
  </DynamicSafeAreaView>)
}

export default login
