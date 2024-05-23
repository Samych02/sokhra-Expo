import React, {useEffect, useLayoutEffect, useState} from 'react'
import {FlatList, LayoutAnimation, Platform, UIManager} from 'react-native'
import DynamicSafeAreaView from "../../components/DynamicSafeAreaView";
import defaultCities from "../../constants/defaultCities";
import TravelCard from "../../components/TravelCard";
import ListingForm from "../../components/ListingForm";
import SkeletonTravelCard from "../../components/SkeletonTravelCard";

const Listings = () => {
  const [origin, setOrigin] = useState(null)
  const [destination, setDestination] = useState(null)

  const [originData, setOriginData] = useState(defaultCities)
  const [destinationData, setDestinationData] = useState(defaultCities)

  const [open, setOpen] = useState(false)
  const [weight, setWeight] = useState("")

  const today = new Date()
  const [date, setDate] = useState(today)

  const [formVisible, setFormVisible] = useState(true);
  const [loading, setLoading] = useState(true)

  // enable animation for android
  if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const handleScroll = (event) => {
    const scrollY = event.nativeEvent.contentOffset.y
    setFormVisible(scrollY <= 50)
  }

  useLayoutEffect(() => LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut), [formVisible])

  const [data, setData] = useState([])
  useEffect(() => {
    // Simulate a network request
    setTimeout(() => {
      setData([
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
        },
        {
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
        },]);
      setLoading(false);
    }, 2000);
  }, []);

  return (<DynamicSafeAreaView className="h-full bg-white">
    <ListingForm today={today} setDestination={setDestination} setOrigin={setOrigin}
                 setDestinationData={setDestinationData} destinationData={destinationData} setOriginData={setOriginData}
                 originData={originData} formVisible={formVisible} setOpen={setOpen} setDate={setDate} open={open}
                 date={date} destination={destination} origin={origin} setWeight={setWeight} weight={weight}/>


    {loading &&
        <FlatList data={[...Array(6).keys()]} renderItem={SkeletonTravelCard} keyExtractor={(item) => item.toString()}
                  scrollEnabled={false}/>}
    {!loading && <FlatList data={data} renderItem={(item) => TravelCard(item)} onScroll={handleScroll}
                           keyExtractor={item => item.id}/>}
  </DynamicSafeAreaView>)
}

export default Listings
