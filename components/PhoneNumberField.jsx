import PhoneInput from "react-native-international-phone-number";
import React from "react";


const PhoneNumberField = ({nationalNumber, setNationalNumber, countryCode, setCountryCode}) => {

  function handleNationalNumber(nationalNumber) {
    setNationalNumber(nationalNumber);
  }

  function handleCountryCode(countryCode) {
    setCountryCode(countryCode);
  }

  return (
      <PhoneInput
          value={nationalNumber}
          onChangePhoneNumber={handleNationalNumber}
          selectedCountry={countryCode}
          onChangeSelectedCountry={handleCountryCode}
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
export default PhoneNumberField;