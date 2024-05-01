import React, {useState} from 'react'
import {ActivityIndicator, Alert, Text, TouchableOpacity, View} from 'react-native'
import PhoneNumberField from "../../components/PhoneNumberField";
import DynamicSafeAreaView from "../../components/DynamicSafeAreaView";
import {height} from "../../constants/dimmesions";
import validatePhoneNumber from "../utils/validatePhoneNumber";

const login = () => {
  const [countryCode, setCountryCode] = useState(null)
  const [nationalNumber, setNationalNumber] = useState("")
  const [loading, setLoading] = useState(false);

  const handlePress = () => {
    if (nationalNumber === "") {
      return Alert.alert("Veuillez entrer votre numéro de téléphone nn")
    }
    setLoading(true)
    const flag = validatePhoneNumber(countryCode.cca2, nationalNumber)
    setLoading(false)
    if (!flag) {
      return Alert.alert("Numéro de téléphone invalide")
    }
    return Alert.alert("ok")
  }
  // const handlePress = async () => {
  //   if (nationalNumber === "") {
  //     return Alert.alert("Veuillez entrer votre numéro de téléphone")
  //   }
  //   setLoading(true)
  //   const flag = await validatePhoneNumber(countryCode, nationalNumber).then(() => setLoading(false))
  //   if (!flag) {
  //     return Alert.alert("Numéro de téléphone invalide")
  //   }
  //   return Alert.alert("ok")
  // }



  return (
      <DynamicSafeAreaView className="h-full bg-primary">
        <Text className="text-center font-psemibold text-2xl" style={{marginTop: height * 0.1}}>Indiquez votre
          numéro</Text>
        <Text className="text-center font-pregular mx-10 mb-10">Nous vous enverrons un code pour vérifier votre
          téléphone</Text>
        <View className="mx-3">
          <PhoneNumberField nationalNumber={nationalNumber} setNationalNumber={setNationalNumber}
                            countryCode={countryCode} setCountryCode={setCountryCode}/>
          <TouchableOpacity className="justify-center items-center w-full h-11 bg-secondary rounded-md"
                            style={{marginBottom: 25}} onPress={handlePress}>
            {loading ? <ActivityIndicator size="large" color="white"/> :
                <Text className="text-white font-pmedium text-lg">Envoyer le code</Text>}
          </TouchableOpacity>
        </View>
        <Text style={{fontSize: 11}} className="text-black font-pextralight mx-4 text-center">L'adhésion à notre
          application signifie que vous acceptez nos <Text className="underline">Conditions d'utilisation</Text> et
          notre <Text className="underline">Politique de confidentialité</Text></Text>
      </DynamicSafeAreaView>
  )
}

export default login