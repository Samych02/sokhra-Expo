import React from 'react'
import {Dimensions, Text, TouchableOpacity, View} from 'react-native'
import PhoneNumberInput from "../../components/PhoneNumberInput";
import DynamicSafeAreaView from "../../components/DynamicSafeAreaView";

const {width, height} = Dimensions.get("window");

const login = () => {
  return (
      <DynamicSafeAreaView className="h-full bg-primary">
        <Text className="text-center font-psemibold text-2xl" style={{marginTop:height*0.1}}>Indiquez votre numéro</Text>
        <Text className="text-center font-pregular mx-10 mb-10">Nous vous enverrons un code pour vérifier votre
          téléphone</Text>
        <View className="mx-3">
          <PhoneNumberInput/>
          <TouchableOpacity className="justify-center items-center w-full h-11 bg-secondary rounded-md"
                            style={{marginBottom: 25}}>
            <Text className="text-white font-pmedium text-lg">Envoyer le code</Text>
          </TouchableOpacity>
        </View>
        <Text style={{fontSize: 11}} className="text-black font-pextralight mx-4 text-center">L'adhésion à notre
          application signifie que vous acceptez nos <Text className="underline">Conditions d'utilisation</Text> et
          notre <Text className="underline">Politique de confidentialité</Text></Text>

      </DynamicSafeAreaView>
  )
}

export default login