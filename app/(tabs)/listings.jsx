import React, {useState} from 'react'
import {StatusBar, TouchableOpacity, View} from 'react-native'
import {Input} from "react-native-elements";
import DynamicSafeAreaView from "../../components/DynamicSafeAreaView";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import CityPicker from "../../components/CityPicker";
import defaultCities from "../../constants/defaultCities";
import floatInputHandler from "../utils/floatInputHandler";

const Listings = () => {
  const [origin, setOrigin] = useState(null)
  const [destination, setDestination] = useState(null)
  const [originData, setOriginData] = useState(defaultCities)
  const [weight, setWeight] = useState("")

  const [destinationData, setDestinationData] = useState(defaultCities)

  const swapFields = () => {
    const tmpData = originData
    setOriginData(destinationData)
    setDestinationData(tmpData)
    const tmp = origin
    setOrigin(destination)
    setDestination(tmp)
  }

  return (<DynamicSafeAreaView className="h-full bg-white">
    <StatusBar backgroundColor={Colors.brand}/>
    <View className="bg-brand pt-2 pb-3 ">
      <View className="mx-3">

        <View className="rounded-md bg-white mb-2">
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
            <View style={{backgroundColor: Colors.cgrey, height: 1, width: "85%",}}/>
            <TouchableOpacity onPress={swapFields}>
              <MaterialCommunityIcons name="swap-vertical-variant" size={40}
                                      style={{width: 40, height: 40, color: Colors.brand, marginLeft: 10}}/>
            </TouchableOpacity>
          </View>
          <CityPicker placeholder="Déstination" value={destination} setValue={setDestination}
                      iconName="airplane-landing"
                      labelField="label"
                      valueField="value"
                      searchPlaceholder="Cherchez votre ville de déstination"
                      data={destinationData}
                      setData={setDestinationData}/>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>

          <Input
              inputMode="decimal"
              disabled={false}
              renderErrorMessage={false}
              inputContainerStyle={{borderBottomWidth: 0, height: 35}}

              containerStyle={{
                backgroundColor: "white",
                paddingHorizontal: 0,
                borderRadius: 6,
                width: "48%"

              }}
              placeholder="Mafekuhsse"
              leftIcon={<MaterialCommunityIcons name="weight-kilogram" size={20} color={Colors.cgrey}/>}
              leftIconContainerStyle={{width: 25, height: 25, marginLeft: 5,}}
          />
          <Input
              value={weight}
              onChangeText={(input) => floatInputHandler(input, setWeight)}
              inputMode="decimal"
              disabled={false}
              renderErrorMessage={false}
              inputContainerStyle={{borderBottomWidth: 0, height: 35}}
              containerStyle={{
                backgroundColor: "white",
                paddingHorizontal: 0,
                borderRadius: 6,
                width: "48%"
              }}
              placeholder="Masse"
              leftIcon={<MaterialCommunityIcons name="weight-kilogram" size={20} color={Colors.cgrey}/>}
              leftIconContainerStyle={{width: 25, height: 25, marginLeft: 5,}}
          />
        </View>
      </View>


    </View>
  </DynamicSafeAreaView>)
}

export default Listings
