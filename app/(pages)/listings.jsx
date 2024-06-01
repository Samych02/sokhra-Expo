import DynamicSafeAreaView from "../../components/DynamicSafeAreaView";
import COLORS from "../../constants/colors";
import {router} from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, {useEffect, useRef, useState} from "react";
import {ActivityIndicator, FlatList, Text, TouchableOpacity, View} from "react-native";
import SkeletonTravelCard from "../../components/SkeletonTravelCard";
import TravelCard from "../../components/TravelCard";
import BottomSheet, {BottomSheetView} from "@gorhom/bottom-sheet";
import {Chip} from "@rneui/themed";
import ListingForm from "../../components/ListingForm";
import sendAuthenticatedRequest from "../../utils/sendAuthenticatedRequest";

export default function Listings() {

  const [origin, setOrigin] = useState(null)
  const [destination, setDestination] = useState(null)
  const [weight, setWeight] = useState(null)
  const [departureDate, setDepartureDate] = useState(null)

  const [loading, setLoading] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)
  const [isLastPage, setIsLastPage] = useState(false)
  const [page, setPage] = useState(0);
  const [isEmpty, setIsEmpty] = useState(false)

  const [listingData, setListingData] = useState([])

  const bottomSheetRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const snapPoints = [80, 280]

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

  function filterData() {
    setListingData([])
    setPage(0)
    setIsEmpty(false)
    setIsLastPage(false)
    // await fetchData()
  }

  const fetchData = async () => {
    if (isLastPage) return
    if (page === 0) setLoading(true)
    else setLoadingMore(true)
    const response = await sendAuthenticatedRequest("get", "/trips",
        null, false, false, {
          page: page,
          originCity: (origin == null) ? null : origin.city,
          originCountry: (origin == null) ? null : origin.country,
          destinationCity: (destination == null) ? null : destination.city,
          destinationCountry: (destination == null) ? null : destination.city,
          departureDate: (departureDate == null) ? null : departureDate.toString(),
          weight: (weight == null || weight === "") ? null : parseInt(weight)
        })
    console.log(response)
    // if no results found
    if (page === 0 && response.tripPage.empty) setIsEmpty(true)
    setPage(page + 1)

    setIsLastPage(response.tripPage.last)
    let newArray = [...listingData, ...response.tripPage.content]
    setListingData(newArray)

    setLoading(false);
    setLoadingMore(false);
  }

  useEffect(() => {
    fetchData()
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
    {isEmpty && !loading && <View className="h-full items-center justify-center mx-3">
      <Text className="text-center font-psemibold text-2xl">Aucun voyage ne correspond à vos
        critères.</Text>
    </View>}

    {loading && <FlatList
        data={[...Array(10).keys()]} renderItem={SkeletonTravelCard}
        keyExtractor={(item) => item.toString()} contentContainerStyle={{
      paddingBottom: 90
    }}
    />}
    {!loading && !isEmpty && <FlatList data={listingData} renderItem={(item) => TravelCard(item)}
                                       keyExtractor={item => item.id}
                                       contentContainerStyle={{
                                         paddingBottom: 90
                                       }}
                                       ListFooterComponent={() => {
                                         return (loadingMore && page !== 0 &&
                                             <View style={{marginBottom: 100, marginTop: 20}}>
                                               <ActivityIndicator size="large" color={COLORS.brand}/>
                                             </View>)
                                       }}
                                       onEndReached={fetchData}/>}
    <BottomSheet
        backgroundStyle={{backgroundColor: COLORS.brand}}
        handleIndicatorStyle={{backgroundColor: "white"}}
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        onChange={(index) => setIsVisible(index === 1)}
    >
      <BottomSheetView>
        {!isVisible && <Chip
            titleStyle={{color: COLORS.cgrey, fontSize: 18,}}
            title="Filtrer votre recherche"
            icon={{
              name: 'search', type: 'font-awesome', size: 20, color: COLORS.cgrey,
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
        />}
        {isVisible && <ListingForm setDestination={setDestination}
                                   setOrigin={setOrigin}
                                   setDepartureDate={setDepartureDate}
                                   departureDate={departureDate}
                                   setWeight={setWeight}
                                   weight={weight}
                                   filterData={filterData}
        />}
      </BottomSheetView>
    </BottomSheet>

  </DynamicSafeAreaView>)
}
