import {StatusBar, TouchableOpacity, View} from "react-native";
import COLORS from "../constants/colors";
import CityPicker from "./CityPicker";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {Input} from "react-native-elements";
import dateToString from "../app/utils/dateToString";
import CustomDatePicker from "./CustomDatePicker";
import floatInputHandler from "../app/utils/floatInputHandler";
import {Button} from "react-native-paper";
import React from "react";

const ListingForm = ({
                       formVisible,
                       originData,
                       setOriginData,
                       destinationData,
                       setDestinationData,
                       origin,
                       setOrigin,
                       destination,
                       setDestination,
                       date,
                       today,
                       open,
                       setDate,
                       setOpen,
                       weight,
                       setWeight
                     }) => {
  const swapFields = () => {
    const tmpData = originData
    setOriginData(destinationData)
    setDestinationData(tmpData)
    const tmp = origin
    setOrigin(destination)
    setDestination(tmp)
  }

  return (<>
    <StatusBar backgroundColor={COLORS.brand} barStyle="default"/>
    <View className="bg-brand"
          style={{
            overflow: 'hidden',
            height: formVisible ? "auto" : 0,
            backgroundColor: COLORS.brand,
            paddingTop: formVisible ? 8 : 0,
            paddingBottom: formVisible ? 12 : 0,
          }}>
      <View className="mx-3">
        <View className="bg-white mb-2" style={{borderRadius: 10}}>
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
        <View
            style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8}}>

          <TouchableOpacity onPress={() => setOpen(true)} style={{width: "48%"}}>
            <Input
                value={date !== today ? dateToString(date) : ""}
                placeholderTextColor="black"
                disabled={true}
                renderErrorMessage={false}
                inputContainerStyle={{borderBottomWidth: 0, height: 35}}
                containerStyle={{
                  backgroundColor: "white", paddingHorizontal: 0, borderRadius: 10,
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
                backgroundColor: "white", paddingHorizontal: 0, borderRadius: 10, width: "48%"
              }}
              placeholder="Poids"
              leftIcon={<MaterialCommunityIcons name="weight-kilogram" size={20} color={COLORS.cgrey}/>}
              leftIconContainerStyle={{width: 25, height: 25, marginLeft: 5,}}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <Button labelStyle={{fontSize: 18,}}
                  style={{width: "60%", borderRadius: 10, height: 40, backgroundColor: "#3db830"}}
                  icon="plus" mode="contained" onPress={() => console.log('Pressed')}>
            Ajouter une annonce
          </Button>

          <Button labelStyle={{fontSize: 18}} style={{width: "35%", borderRadius: 10, height: 40}}
                  buttonColor={COLORS.cgrey} icon="magnify" mode="contained" onPress={() => console.log('Pressed')}>
            Chercher
          </Button>
        </View>


      </View>
    </View>
  </>)
}

export default ListingForm
