import React, {useState} from 'react'
import {StatusBar, Text, TouchableOpacity, View} from 'react-native'
import DynamicSafeAreaView from "../../components/DynamicSafeAreaView";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import COLORS from "../../constants/colors";
import CityPicker from "../../components/CityPicker";

const Listings = () => {
  const [origin, setOrigin] = useState(null)
  const [destination, setDestination] = useState(null)
  const [originData, setOriginData] = useState([
    {label: "Safi, Maroc", value: {city: "Safi", country: "Maroc"}},
    {label: "Marrakech, Maroc", value: {city: "Marrakech", country: "Maroc"}},
    {label: "Fes, Maroc", value: {city: "Fes", country: "Maroc"}},
    {label: "Casablanca, Maroc", value: {city: "Casablanca", country: "Maroc"}},
    {label: "Tanger, Maroc", value: {city: "Tanger", country: "Maroc"}},
  ])

  const [destinationData, setDestinationData] = useState([
    {label: "Safi, Maroc", value: {city: "Safi", country: "Maroc"}},
    {label: "Marrakech, Maroc", value: {city: "Marrakech", country: "Maroc"}},
    {label: "Fes, Maroc", value: {city: "Fes", country: "Maroc"}},
    {label: "Casablanca, Maroc", value: {city: "Casablanca", country: "Maroc"}},
    {label: "Tanger, Maroc", value: {city: "Tanger", country: "Maroc"}},
  ])

  const swapFields = () => {
    const tmpData = originData
    setOriginData(destinationData)
    setDestinationData(tmpData)
    const tmp = origin
    setOrigin(destination)
    setDestination(tmp)
  }

  return (<DynamicSafeAreaView className="h-full bg-white">
    <StatusBar backgroundColor={COLORS.brand}/>
    <View className="bg-brand pt-2 pb-3">

      <View className="mx-3 rounded-md bg-white">
        <CityPicker placeholder="Départ" value={origin} setValue={setOrigin} iconName="airplane-takeoff"
                    labelField="label"
                    valueField="value"
                    searchPlaceholder="Cherchez votre ville de départ"
                    data={originData}
                    setData={setOriginData}/>
        <View
            style={{
              height: 0, zIndex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
            }}>
          <View style={{backgroundColor: COLORS.cgrey, height: 1, width: "85%",}}/>
          <TouchableOpacity onPress={swapFields}>
            <MaterialCommunityIcons name="swap-vertical-variant" size={40}
                                    style={{width: 40, height: 40, color: COLORS.brand, marginLeft: 10}}/>
          </TouchableOpacity>
        </View>
        <CityPicker placeholder="Déstination" value={destination} setValue={setDestination} iconName="airplane-landing"
                    labelField="label"
                    valueField="value"
                    searchPlaceholder="Cherchez votre ville de déstination"
                    data={destinationData}
                    setData={setDestinationData}/>
      </View>
      <TouchableOpacity>
        <Text>froijrf</Text>
      </TouchableOpacity>

    </View>
  </DynamicSafeAreaView>)
}

export default Listings
