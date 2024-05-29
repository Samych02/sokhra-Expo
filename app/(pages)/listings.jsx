import DynamicSafeAreaView from "../../components/DynamicSafeAreaView";
import COLORS from "../../constants/colors";
import {router} from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, {useEffect, useRef, useState} from "react";
import {FlatList, TouchableOpacity} from "react-native";
import SkeletonTravelCard from "../../components/SkeletonTravelCard";
import TravelCard from "../../components/TravelCard";
import BottomSheet, {BottomSheetView} from "@gorhom/bottom-sheet";
import {Chip} from "@rneui/themed";
import ListingForm from "../../components/ListingForm";

export default function Listings() {

  const [origin, setOrigin] = useState(null)
  const [destination, setDestination] = useState(null)

  const [open, setOpen] = useState(false)
  const [weight, setWeight] = useState("")

  const today = new Date()
  const [date, setDate] = useState(null)

  const bottomSheetRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  // Bottom Sheet breakpoints
  const snapPoints = [80, 280]

  // Function to handle button press to toggle visibility
  const handleToggleVisibility = () => {
    if (bottomSheetRef.current) {
      if (isVisible) {
        bottomSheetRef.current.snapToIndex(0)
      } else {
        bottomSheetRef.current.snapToIndex(1)
      }
      setIsVisible(!isVisible)
    }
  }

  const [loading, setLoading] = useState(true)


  const [data, setData] = useState([])
  useEffect(() => {
    // Simulate a network request
    setTimeout(() => {
      setData([{
        id: "1234",
        origin: "Safi",
        destination: "Rabat",
        date: "25/05/2024",
        weight: 20,
        price: 5,
        numberOfRating: 10,
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
        numberOfRating: 10,

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
        numberOfRating: 10,

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
        numberOfRating: 10,

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
        numberOfRating: 10,

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
        numberOfRating: 10,

        image: require("../test.png")
      },]);
      setLoading(false);
    }, 2500);
  }, []);


  return (<DynamicSafeAreaView className="h-full bg-white">
    <TouchableOpacity onPress={() => {
      bottomSheetRef.current.snapToIndex(0)
      router.navigate("/home")
    }} style={{
      backgroundColor: COLORS.fgrey,
      borderRadius: 20,
      width: 40,
      height: 40,
      marginLeft: 15,
      justifyContent: "center",
      marginBottom: 5
    }}>
      <Ionicons
          name="chevron-back"
          style={{
            fontSize: 35, color: COLORS.cgrey
          }}
      />
    </TouchableOpacity>

    {loading &&
        <FlatList data={[...Array(6).keys()]} renderItem={SkeletonTravelCard} keyExtractor={(item) => item.toString()}
                  scrollEnabled={false}/>}
    {!loading && <FlatList data={data} renderItem={(item) => TravelCard(item)}
                           keyExtractor={item => item.id}/>}
    <BottomSheet
        backgroundStyle={{backgroundColor: COLORS.brand}}
        handleIndicatorStyle={{backgroundColor: "white"}}
        ref={bottomSheetRef}
        index={0} // Initial snap point
        snapPoints={snapPoints}
        onChange={(index) => setIsVisible(index === 1)}
    >
      <BottomSheetView>
        {!isVisible &&
            <Chip
                titleStyle={{color: COLORS.cgrey, fontSize: 18,}}
                title="Filtrer votre recherche"
                icon={{
                  name: 'search',
                  type: 'font-awesome',
                  size: 20,
                  color: COLORS.cgrey,
                }}
                onPress={handleToggleVisibility}
                type="outline"
                buttonStyle={{
                  backgroundColor: COLORS.fgrey,
                  height: 40,
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignSelf: "center",
                  width: "90%"
                }}
            />
        }
        {isVisible && <ListingForm today={today} setDestination={setDestination} setOrigin={setOrigin}
                                   setOpen={setOpen}
                                   setDate={setDate}
                                   open={open}
                                   date={date} destination={destination} origin={origin} setWeight={setWeight}
                                   weight={weight}/>}
      </BottomSheetView>
    </BottomSheet>

  </DynamicSafeAreaView>)
}
