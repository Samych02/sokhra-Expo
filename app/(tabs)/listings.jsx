import React, {useState} from 'react'
import {StatusBar, TouchableOpacity, View} from 'react-native'
import {Input} from "react-native-elements";
import DynamicSafeAreaView from "../../components/DynamicSafeAreaView";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import CityPicker from "../../components/CityPicker";
import defaultCities from "../../constants/defaultCities";
import floatInputHandler from "../utils/floatInputHandler";
import COLORS from "../../constants/colors";
import dateToString from "../utils/dateToString";
import CustomDatePicker from "../../components/customDatePicker";
import {Button} from "react-native-paper";

const Listings = () => {
  const [origin, setOrigin] = useState(null)
  const [destination, setDestination] = useState(null)
  const [originData, setOriginData] = useState(defaultCities)
  const [open, setOpen] = useState(false)
  const [weight, setWeight] = useState("")

  const [destinationData, setDestinationData] = useState(defaultCities)

  const today = new Date()
  const [date, setDate] = useState(today)

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
            <View style={{backgroundColor: COLORS.cgrey, height: 1, width: "85%",}}/>
            <TouchableOpacity onPress={swapFields}>
              <MaterialCommunityIcons name="swap-vertical-variant" size={35}
                                      style={{width: 35, height: 35, color: COLORS.brand, marginLeft: 10}}/>
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
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8}}>

          <TouchableOpacity onPress={() => setOpen(true)} style={{width: "48%"}}>
            <Input
                value={date != today ? dateToString(date) : ""}
                placeholderTextColor="black"
                disabled={true}
                renderErrorMessage={false}
                inputContainerStyle={{borderBottomWidth: 0, height: 35}}
                containerStyle={{
                  backgroundColor: "white",
                  paddingHorizontal: 0,
                  borderRadius: 6,
                }}
                placeholder="Date"
                leftIcon={<MaterialCommunityIcons name="calendar-clock" size={20} color={COLORS.cgrey}/>}
                leftIconContainerStyle={{width: 25, height: 25, marginLeft: 5,}}
            />
          </TouchableOpacity>
          <CustomDatePicker date={date} open={open} setDate={setDate} setOpen={setOpen}/>

          <Input
              placeholderTextColor={COLORS.cgrey}
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
              leftIcon={<MaterialCommunityIcons name="weight-kilogram" size={20} color={COLORS.cgrey}/>}
              leftIconContainerStyle={{width: 25, height: 25, marginLeft: 5,}}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <Button labelStyle={{fontSize: 18,}} style={{width: "60%", borderRadius: 6, height: 40,}}
                  buttonColor="#3e824b" icon="plus" mode="contained" onPress={() => console.log('Pressed')}>
            Ajouter une annonce
          </Button>

          <Button labelStyle={{fontSize: 18}} style={{width: "35%", borderRadius: 6, height: 40}}
                  buttonColor={COLORS.cgrey} icon="magnify" mode="contained" onPress={() => console.log('Pressed')}>
            Chercher
          </Button>
        </View>


      </View>


    </View>
  </DynamicSafeAreaView>)
}

export default Listings
