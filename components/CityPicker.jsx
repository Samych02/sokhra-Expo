import {Dropdown} from "react-native-element-dropdown"
import {MaterialCommunityIcons} from "@expo/vector-icons"
import React from "react"
import axios from "axios"
import {google_places_api_key} from "../config/apiKeys";


const CityPicker = ({placeholder, iconName, value, setValue, searchPlaceholder, data, setData}) => {

  const searchCity = async (searchQuery = "") => {
    if (searchQuery.length < 3) return
    const response = await axios.get("https://maps.googleapis.com/maps/api/place/autocomplete/json\n", {
      params: {
        input: searchQuery, language: "fr", types: "(cities)", key: google_places_api_key
      }
    })
    await setData(response.data.predictions.map(prediction => ({
      label: prediction.description, value: {
        city: prediction.description.split(", ")[0],
        country: prediction.description.split(", ").reverse()[0]
      }
    })))
  }

  return (<Dropdown
      onFocus={() => console.log(1)}
      onBlur={() => console.log(2)}
      // disable={true}
      searchPlaceholder={searchPlaceholder}
      labelField="label"
      valueField="value"
      placeholder={placeholder}
      renderLeftIcon={() => (
          <MaterialCommunityIcons name={iconName} size={20} style={{color: Colors.cgrey, marginHorizontal: 5}}/>)}
      renderRightIcon={() => null}
      value={value}
      data={data}
      onChange={item => {
        setValue(item)
      }}
      search
      autoScroll={false}
      onChangeText={(searchQuery) => {
        searchCity(searchQuery)
      }}
      searchQuery={() => true}
      style={{height: 45,}}
  />)
}
export default CityPicker;
