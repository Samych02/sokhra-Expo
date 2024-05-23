import React, {useLayoutEffect, useState} from 'react'
import {
  FlatList,
  LayoutAnimation,
  Platform,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  UIManager,
  View
} from 'react-native'
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
import TravelCard from "../../components/TravelCard";

const Listings = () => {
  const [origin, setOrigin] = useState(null)
  const [destination, setDestination] = useState(null)
  const [originData, setOriginData] = useState(defaultCities)
  const [open, setOpen] = useState(false)
  const [weight, setWeight] = useState("")

  const [destinationData, setDestinationData] = useState(defaultCities)

  const today = new Date()
  const [date, setDate] = useState(today)

  if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
  //
  const [formVisible, setFormVisible] = useState(true);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
  });
  const handleScroll = (event) => {
    const scrollY = event.nativeEvent.contentOffset.y;
    setFormVisible(scrollY <= 50);
  };
  useLayoutEffect(() => LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut), [formVisible])
  //
  const data = [
    {
      id: "1234",
      origin: "Safi",
      destination: "Rabat",
      date: "25/05/2024",
      weight: 20,
      price: 5,
      name: "samy",
      rating: 5,
      image: require("../test.png")
    }, {
      id: "12345",
      origin: "Safi",
      destination: "Rabat",
      date: "25/05/2024",
      weight: 20,
      price: 5,
      name: "samy",
      rating: 3.5,
      image: require("../test.png")
    }, {
      id: "123fr45",
      origin: "Safi",
      destination: "Rabat",
      date: "25/05/2024",
      weight: 20,
      price: 5,
      name: "samy",
      rating: 0,
      image: require("../test.png")
    }, {
      id: "12frfr345",
      origin: "Safi",
      destination: "Rabat",
      date: "25/05/2024",
      weight: 20,
      price: 5,
      name: "samy",
      rating: 3.5,
      image: require("../test.png")
    }, {
      id: "123frfr45",
      origin: "Safi",
      destination: "Rabat",
      date: "25/05/2024",
      weight: 20,
      price: 5,
      name: "samy",
      rating: 3.5,
      image: require("../test.png")
    }, {
      id: "1233fe45",
      origin: "Safi",
      destination: "Rabat",
      date: "25/05/2024",
      weight: 20,
      price: 5,
      name: "samy",
      rating: 3.5,
      image: require("../test.png")
    },]

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
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8}}>

          <TouchableOpacity onPress={() => setOpen(true)} style={{width: "48%"}}>
            <Input
                value={date !== today ? dateToString(date) : ""}
                placeholderTextColor="black"
                disabled={true}
                renderErrorMessage={false}
                inputContainerStyle={{borderBottomWidth: 0, height: 35}}
                containerStyle={{
                  backgroundColor: "white",
                  paddingHorizontal: 0,
                  borderRadius: 10,
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
                borderRadius: 10,
                width: "48%"
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


    {/**/}

    <FlatList
        data={data}
        renderItem={(item) => TravelCard(item)}
        onScroll={handleScroll}
        keyExtractor={item => item.id}
    />

    {/*//*/}
  </DynamicSafeAreaView>)
}

export default Listings
