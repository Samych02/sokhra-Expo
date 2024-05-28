import {StatusBar, TouchableOpacity, View} from "react-native";
import COLORS from "../constants/colors";
import CityPicker from "./CityPicker";
import {AntDesign, MaterialCommunityIcons} from "@expo/vector-icons";
import {Input} from "@rneui/themed";
import dateToString from "../app/utils/dateToString";
import CustomDatePicker from "./CustomDatePicker";
import intInputHandler from "../app/utils/intInputHandler";
import {IconButton} from "react-native-paper";
import React from "react";
import {router} from "expo-router";

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
            paddingTop: formVisible ? 2 : 0,
            paddingBottom: formVisible ? 2 : 0,
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
            style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4}}>

          <TouchableOpacity onPress={() => setOpen(true)} style={{width: "48%"}}>
            <Input
                value={date == null ? "" : dateToString(date)}
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
          <CustomDatePicker date={date ? date : new Date()} open={open} setDate={setDate} setOpen={setOpen}/>

          <Input
              placeholderTextColor={COLORS.cgrey}
              value={weight}
              onChangeText={(input) => intInputHandler(input, setWeight)}
              inputMode="decimal"
              disabled={false}
              renderErrorMessage={false}
              inputContainerStyle={{borderBottomWidth: 0, height: 35}}
              containerStyle={{
                backgroundColor: "white", paddingHorizontal: 0, borderRadius: 10, width: "48%"
              }}
              placeholder="Poids (kg)"
              leftIcon={<MaterialCommunityIcons name="weight-kilogram" size={20} color={COLORS.cgrey}/>}
              leftIconContainerStyle={{width: 25, height: 25, marginLeft: 5,}}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => router.navigate("/test")} style={{width: "48%"}}>
            <Input
                value={null}
                renderErrorMessage={false}
                inputContainerStyle={{borderBottomWidth: 0, height: 35}}
                containerStyle={{
                  backgroundColor: "#3db830", paddingHorizontal: 0, borderRadius: 10
                }}
                inputStyle={{fontSize: 17}}
                placeholder="Nouvelle annonce"
                placeholderTextColor="white"
                placeholderTextSize={20}
                leftIcon={<AntDesign name="plus" size={20} color="white"/>}
                leftIconContainerStyle={{width: 25, height: 25, marginLeft: 5,}}
            />
          </TouchableOpacity>

          <IconButton icon="close" mode="contained" size={28} iconColor="red" containerColor={COLORS.cgrey}
                      style={{width: 35, height: 35}}/>
          <IconButton icon="magnify" mode="contained" size={28} iconColor="white" containerColor="#A004BA"
                      style={{width: 35, height: 35}}/>
        </View>


      </View>
    </View>
  </>)
}

export default ListingForm
