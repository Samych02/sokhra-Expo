import React from "react"
import {Tabs} from "expo-router"
import {Text, View} from "react-native"
import COLORS from "../../constants/colors"
import {MaterialCommunityIcons} from '@expo/vector-icons';

const TabBarIcon = (color, focused, title, icon) => {
  return (<View className="items-center justify-center content-center w-full h-full">
    {focused && <View className="w-full absolute top-0 bg-brand" style={{
      height: 2, borderBottomRightRadius: 4, borderBottomLeftRadius: 4,
    }}></View>}

    <MaterialCommunityIcons
        name={focused ? icon : icon + "-outline"}
        color={color}
        size={35}
    />
    <Text
        className="font-pregular text-xs"
        style={{color: color}}>
      {title}
    </Text>
  </View>)
}
const TabLayout = () => {
  return (<>
    <Tabs

        screenOptions={{
          tabBarActiveTintColor: COLORS.brand,
          tabBarInactiveTintColor: COLORS.cgrey,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "white",
            borderTopWidth: 0.2,
            borderTopColor: COLORS.cgrey,
            height: 80,
            paddingHorizontal: 4
          },

        }}
    >
      <Tabs.Screen
          name="listings"
          options={{
            title: "Annonces", // headerShown: false,
            tabBarIcon: ({color, focused}) => (TabBarIcon(color, focused, "Annonces", "map-search")),
          }}
      />
      <Tabs.Screen
          name="trips"
          options={{
            title: "Voyages", tabBarIcon: ({color, focused}) => (TabBarIcon(color, focused, "Voyages", "truck-fast")),
          }}
      />
      <Tabs.Screen
          name="tracking"
          options={{
            title: "Suivi", tabBarIcon: ({color, focused}) => (TabBarIcon(color, focused, "Suivi", "inbox-multiple")),
          }}
      />
      <Tabs.Screen
          name="inbox"
          options={{
            tabBarBadge: 3,
            tabBarBadgeStyle: {backgroundColor: "#D13744", marginTop: 5,},
            title: "Messages",
            tabBarIcon: ({color, focused}) => (TabBarIcon(color, focused, "Messages", "message")),
          }}
      />
      <Tabs.Screen
          name="account"
          options={{
            title: "Mon compte",
            tabBarIcon: ({color, focused}) => (TabBarIcon(color, focused, "Mon compte", "account-settings")),
          }}
      />
    </Tabs>
  </>)
}

export default TabLayout
