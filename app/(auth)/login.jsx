import React, {useState} from 'react'
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native'
import PhoneInput from "react-native-international-phone-number";

const login = () => {
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [inputValue, setInputValue] = useState('')

  function handleInputValue(phoneNumber) {
    setInputValue(phoneNumber);
  }

  function handleSelectedCountry(country) {
    setSelectedCountry(country);
  }

  return (
      <SafeAreaView className="bg-primary h-full">
        <Text className="text-center font-psemibold text-2xl mt-10">Indiquez votre numéro</Text>
        <Text className="text-center font-pregular mx-10 mb-10">Nous vous enverrons un code pour vérifier votre
          téléphone</Text>
        <View className="mx-3">
          <PhoneInput
              value={inputValue}
              onChangePhoneNumber={handleInputValue}
              selectedCountry={selectedCountry}
              onChangeSelectedCountry={handleSelectedCountry}
              language="fr"
              defaultCountry="MA"
              placeholder=""
              phoneInputStyles={{
                divider: {display: "none"},
                flagContainer: {
                  backgroundColor: "white",
                  paddingEnd: 0
                },
                container: {
                  borderWidth: 0,
                  backgroundColor: "white",
                  marginBottom: 25
                },
                caret: {
                  color: "#222325",
                  fontSize: 15,
                  marginEnd: 30
                },
                callingCode: {
                  color: "#222325",
                  fontSize: 20
                },
                input: {
                  color: "#222325",
                  fontSize: 20
                },
              }}
              modalStyles={{
                modal: {
                  backgroundColor: '#DFD5CB',
                },
                searchInput: {
                  borderWidth: 2,
                  borderColor: "#BD965B",
                },
                countryButton: {
                  borderWidth: 1,
                  borderColor: "#BD965B",
                }
              }}
          />
          <TouchableOpacity className="justify-center items-center w-full h-11 bg-secondary rounded-md"
                            style={{marginBottom: 25}}>
            <Text className="text-white font-pmedium text-lg">Envoyer le code</Text>
          </TouchableOpacity>
        </View>
        <Text style={{fontSize: 11}} className="text-black font-pextralight mx-4 text-center">L'adhésion à notre
          application signifie
          que vous acceptez nos <Text className="underline">Conditions d'utilisation</Text> et notre <Text
              className="underline">Politique de confidentialité</Text></Text>

      </SafeAreaView>
  )
}

export default login