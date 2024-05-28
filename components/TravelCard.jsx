import {Avatar, Card} from "@rneui/themed"
import COLORS from "../constants/colors";
import {Text, TouchableOpacity, View} from "react-native";
import capitalizeFirstLetter from "../app/utils/capitalizeFirstLetter";
import {Entypo, MaterialCommunityIcons} from "@expo/vector-icons";
import {Rating} from "@kolking/react-native-rating";
import React from "react";

const TravelCard = ({item}) => {
  return (
      <View className="w-full">
        <Card containerStyle={{
          borderRadius: 10,
          borderWidth: 1,
          borderColor: COLORS.cgrey,
          padding: 8,
          marginHorizontal: 12,
        }}>

          <View className="flex-row items-center justify-between mb-3">
            <Text className="font-pbold text-xl text-cgrey" style={{width: "40%"}} numberOfLines={1}
                  ellipsizeMode="tail">{capitalizeFirstLetter(item.origin)}</Text>
            <MaterialCommunityIcons style={{marginHorizontal: 10, width: "10%"}} name="sign-direction" size={30}
                                    color={COLORS.brand}/>
            <Text className="font-pbold text-xl text-cgrey text-right" style={{width: "40%"}}
                  numberOfLines={1}
                  ellipsizeMode="tail">{capitalizeFirstLetter(item.destination)}</Text>
          </View>

          <View className="flex-row mb-2 justify-start">
            <MaterialCommunityIcons name="calendar-import" size={15} color={COLORS.brand}/>
            <Text className="font-psemibold text-cgrey text-xs"> Départ le {item.date}</Text>
          </View>

          <View className="flex-row items-center justify-between mb-2">
            <View className="flex-row">
              <MaterialCommunityIcons name="weight" size={15} color={COLORS.brand}/>
              <Text className="font-psemibold text-cgrey text-xs"> {item.weight} kg disponible</Text>
            </View>

            <View className="flex-row">
              <Entypo name="price-tag" size={15} color={COLORS.brand}/>
              <Text className="font-psemibold text-cgrey text-xs"> {item.price} DH/KG</Text>
            </View>
          </View>
          <Card.Divider color={COLORS.brand} width={1} style={{marginBottom: 8}}/>
          <View className="flex-row justify-between ">
            <TouchableOpacity className="flex-row items-center " onPress={() => {
              console.log(1)
            }}>
              <Avatar source={item.image} size={45} rounded={true}/>
              <View className="flex-col ml-4 h-full">
                <Text className="font-psemibold text-cgrey text-lg">{capitalizeFirstLetter(item.name)}</Text>
                <Rating rating={item.rating} size={14} scale={1} spacing={4} disabled={true}
                        baseColor={COLORS.cgrey}/>
              </View>
            </TouchableOpacity>
            <View className="flex-row items-center justify-center">
              <TouchableOpacity onPress={() => {
                console.log(1)
              }} className="flex-row items-center bg-brand px-3 rounded-3xl h-8" style={{alignItems: "center"}}>
                <Text className="font-psemibold text-right text-white" style={{fontSize: 12}}>Réserver</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Card>
      </View>
  )
}
export default TravelCard;
