import PhoneInput from "react-native-international-phone-number";
import React, {useState} from "react";

const PhoneNumberInput = () => {
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [inputValue, setInputValue] = useState('')

  function handleInputValue(phoneNumber) {
    setInputValue(phoneNumber);
  }

  function handleSelectedCountry(country) {
    setSelectedCountry(country);
  }

  return (
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
  )
}
export default PhoneNumberInput;