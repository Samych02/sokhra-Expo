import {Avatar, Card} from "@rneui/themed"
import COLORS from "../constants/colors";
import {Text, TouchableOpacity, View} from "react-native";
import capitalizeFirstLetter from "../app/utils/capitalizeFirstLetter";
import {FontAwesome5, MaterialCommunityIcons} from "@expo/vector-icons";
import {Rating} from "@kolking/react-native-rating";
import React from "react";

const TravelCard = ({item}) => {
  return (
      <View className="w-full">
        <Card containerStyle={{
          borderRadius: 10,
          borderWidth: 1,
          borderColor: COLORS.cgrey,
        }}>

          <View className="flex-row items-center justify-between mb-4">
            <Text className="font-pbold text-2xl text-cgrey" style={{width: "40%"}} numberOfLines={1}
                  ellipsizeMode="tail">{capitalizeFirstLetter(item.origin)}</Text>
            <MaterialCommunityIcons style={{marginHorizontal: 10, width: "10%"}} name="sign-direction" size={40}
                                    color={COLORS.brand}/>
            <Text className="font-pbold text-2xl text-cgrey text-right" style={{width: "40%"}}
                  numberOfLines={1}
                  ellipsizeMode="tail">{capitalizeFirstLetter(item.destination)}</Text>
          </View>

          <View className="flex-row mb-2 ">
            <MaterialCommunityIcons name="calendar-import" size={20} color={COLORS.brand}/>
            <Text className="font-psemibold text-cgrey"> Départ le {item.date}</Text>
          </View>

          <View className="flex-row items-center justify-between mb-2">
            <View className="flex-row">
              <MaterialCommunityIcons name="weight" size={20} color={COLORS.brand}/>
              <Text className="font-psemibold text-cgrey"> {item.weight} kg disponible</Text>
            </View>

            <View className="flex-row">
              <FontAwesome5 name="dollar-sign" size={20} color={COLORS.brand}/>
              <Text className="font-psemibold text-cgrey"> {item.price} DH/KG</Text>
            </View>
          </View>
          <Card.Divider color={COLORS.brand} width={1}/>
          <View className="flex-row justify-between ">
            <TouchableOpacity className="flex-row items-center " onPress={() => {
              console.log(1)
            }}>
              <Avatar source={item.image} size={55} rounded={true}/>
              <View className="flex-col ml-4 justify-between">
                <Text className="mb-2 font-psemibold text-cgrey text-xl">{capitalizeFirstLetter(item.name)}</Text>
                <Rating rating={item.rating} size={18} scale={1} spacing={4} disabled={true}
                        baseColor={COLORS.cgrey}/>
              </View>
            </TouchableOpacity>
            <View className="flex-row items-center justify-center">
              <TouchableOpacity onPress={() => {
                console.log(1)
              }} className="flex-row items-center bg-brand px-3 rounded-3xl h-11" style={{alignItems: "center"}}>
                <Text className="font-psemibold text-xl text-right text-white">Réserver</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Card>
      </View>
  )
}
export default TravelCard;
