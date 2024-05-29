import {TouchableOpacity, View} from "react-native";
import COLORS from "../constants/colors";
import CityPicker from "./CityPicker";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {Divider, Input} from "@rneui/themed";
import dateToString from "../utils/dateToString";
import CustomDatePicker from "./CustomDatePicker";
import intInputHandler from "../utils/intInputHandler";
import React, {useState} from "react";
import defaultCities from "../constants/defaultCities";

export default function ListingForm({
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
                                    }) {
  const [originData, setOriginData] = useState(defaultCities)
  const [destinationData, setDestinationData] = useState(defaultCities)


  return (<>
    <View className="mx-3 mt-5">
      <View className="flex-row items-center justify-center mb-5">
        <View className="bg-white" style={{borderRadius: 10, width: "80%"}}>
          <CityPicker placeholder="Départ" value={origin} setValue={setOrigin} iconName="airplane-takeoff"
                      labelField="label"
                      valueField="value"
                      searchPlaceholder="Cherchez votre ville de départ"
                      data={originData}
                      setData={setOriginData}/>
          <Divider color={COLORS.cgrey}/>
          <CityPicker placeholder="Déstination" value={destination} setValue={setDestination}
                      iconName="airplane-landing"
                      labelField="label"
                      valueField="value"
                      searchPlaceholder="Cherchez votre ville de déstination"
                      data={destinationData}
                      setData={setDestinationData}/>
        </View>

        <TouchableOpacity style={{
          width: 70,
          height: 70,
          justifyContent: "center",
          alignItems: "center",
          marginLeft: 10,
          borderRadius: 10
        }}>
          <MaterialCommunityIcons name="magnify" size={70}
                                  style={{width: 70, height: 70, color: "white",}}/>
        </TouchableOpacity>
        </View>
        <View
            style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 7}}>

          <TouchableOpacity onPress={() => setOpen(true)} style={{width: "48%"}}>
            <Input
                disabledInputStyle={{fontSize: 20, color: "black", opacity: 1}}
                value={date == null ? "" : dateToString(date)}
                placeholderTextColor="black"
                disabled={true}
                renderErrorMessage={false}
                inputContainerStyle={{borderBottomWidth: 0, height: 45}}
                containerStyle={{
                  backgroundColor: "white", paddingHorizontal: 0, borderRadius: 10,
                }}
                placeholder="Date"
                leftIcon={<MaterialCommunityIcons name="calendar-clock" size={25} color={COLORS.cgrey}/>}
                leftIconContainerStyle={{width: 35, height: 35, marginLeft: 5,}}
            />
          </TouchableOpacity>
          <CustomDatePicker date={date ? date : new Date()} open={open} setDate={setDate} setOpen={setOpen}/>

          <Input
              inputStyle={{fontsize: 50}}
              labelStyle={{fontSize: 50}}
              placeholderTextColor={COLORS.cgrey}
              value={weight}
              onChangeText={(input) => intInputHandler(input, setWeight)}
              inputMode="decimal"
              disabled={false}
              renderErrorMessage={false}
              inputContainerStyle={{borderBottomWidth: 0, height: 45}}
              containerStyle={{
                backgroundColor: "white", paddingHorizontal: 0, borderRadius: 10, width: "48%"
              }}
              placeholder="Poids (kg)"
              leftIcon={<MaterialCommunityIcons name="weight-kilogram" size={25} color={COLORS.cgrey}/>}
              leftIconContainerStyle={{width: 30, height: 30, marginLeft: 5,}}
          />
      </View>
    </View>
  </>)
}
