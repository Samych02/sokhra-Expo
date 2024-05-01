import React, {useState} from 'react'
import {ActivityIndicator, Alert, Dimensions, Text, TouchableOpacity, View} from 'react-native'
import PhoneNumberField from "../../components/PhoneNumberField";
import DynamicSafeAreaView from "../../components/DynamicSafeAreaView";
import {height} from "../../constants/dimmesions";

const otp = () => {


  return (
      <DynamicSafeAreaView className="h-full bg-primary">
        <Text className="text-center font-psemibold text-2xl" style={{marginTop: height * 0.1}}>Saisissez le code</Text>
        <Text className="text-center font-pregular mx-10 mb-10">Un code de vérification a été envoyé à </Text>
        <View className="mx-3">
          <TouchableOpacity className="justify-center items-center w-full h-11 bg-secondary rounded-md"
                            style={{marginBottom: 25}} onPress>
            {/*{loading ? <ActivityIndicator size="large" color="white"/> :*/}
            <Text className="text-white font-pmedium text-lg">Envoyer le code</Text>
          </TouchableOpacity>
        </View>
        <Text style={{fontSize: 11}} className="text-black font-pextralight mx-4 text-center">L'adhésion à notre
          application signifie que vous acceptez nos <Text className="underline">Conditions d'utilisation</Text> et
          notre <Text className="underline">Politique de confidentialité</Text></Text>
      </DynamicSafeAreaView>
  )
}

export default otp