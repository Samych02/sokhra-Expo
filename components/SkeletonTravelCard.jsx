import {View} from "react-native";
import {Card, Skeleton} from "@rneui/themed";
import COLORS from "../constants/colors";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import React from "react";
import {LinearGradient} from "expo-linear-gradient";

const SkeletonTravelCard = () => {
  return (<View className="w-full">
    <Card containerStyle={{
      borderRadius: 10, borderWidth: 1, borderColor: COLORS.cgrey,
    }}>

      <View className="flex-row items-center justify-between mb-4">
        <Skeleton width="40%" height={25} LinearGradientComponent={LinearGradient} animation="wave"/>
        <MaterialCommunityIcons style={{marginHorizontal: 10, width: "10%"}} name="sign-direction" size={40}
                                color={COLORS.brand}/>
        <Skeleton width="40%" height={25} animation="wave" LinearGradientComponent={LinearGradient}/>

      </View>

      <View className="flex-row mb-3 ">
        <Skeleton width="50%" height={15} animation="wave" LinearGradientComponent={LinearGradient}/>
      </View>

      <View className="flex-row items-center justify-between mb-3">
        <Skeleton width="40%" height={15} animation="wave" LinearGradientComponent={LinearGradient}/>
        <Skeleton width="40%" height={15} animation="wave" LinearGradientComponent={LinearGradient}/>

      </View>
      <Card.Divider color={COLORS.brand} width={1}/>
      <View className="flex-row justify-between mt-3">
        <Skeleton width={55} height={55} circle={true} animation="wave" LinearGradientComponent={LinearGradient}/>
        <View className="flex-col ml-4 justify-between">
          <Skeleton width={80} height={15} animation="wave" LinearGradientComponent={LinearGradient}/>
          <Skeleton width={120} height={30} animation="wave" LinearGradientComponent={LinearGradient}/>
        </View>
        <View className="flex-row items-center justify-center">
          <Skeleton width={80} height={30}/>
        </View>
      </View>
    </Card>
  </View>)
}

export default SkeletonTravelCard
