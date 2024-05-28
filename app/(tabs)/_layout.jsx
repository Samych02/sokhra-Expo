import React from "react"
import {Tabs} from "expo-router"
import {Text, View} from "react-native"
import COLORS from "../../constants/colors"
import {MaterialCommunityIcons} from '@expo/vector-icons';

const TabBarIcon = (color, focused, title, icon, focusedIcon) => {
  return (<View className="items-center justify-center content-center w-full h-full">
    {focused && <View className="w-full absolute top-0 bg-brand" style={{
      height: 2, borderBottomRightRadius: 4, borderBottomLeftRadius: 4,
    }}></View>}


    <MaterialCommunityIcons
        name={focused ? focusedIcon : icon}
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
            height: 65,
            paddingHorizontal: 4
          },

        }}
    >

      <Tabs.Screen
          name="listings"
          options={{
            title: "Annonces", // headerShown: false,
            tabBarIcon: ({
                           color,
                           focused
                         }) => (TabBarIcon(color, focused, "Annonces", "map-search-outline", "map-search")),
          }}
      />
      <Tabs.Screen
          name="shipments"
          options={{
            title: "Expéditions",
            tabBarIcon: ({
                           color,
                           focused
                         }) => (TabBarIcon(color, focused, "Expéditions", "package-variant-closed", "package-variant")),
          }}
      />
      <Tabs.Screen
          name="trips"
          options={{
            title: "Voyages",
            tabBarIcon: ({
                           color,
                           focused
                         }) => (TabBarIcon(color, focused, "Voyages", "bag-suitcase-outline", "bag-suitcase")),
          }}
      />
      <Tabs.Screen
          name="inbox"
          options={{
            tabBarBadge: 3,
            tabBarBadgeStyle: {backgroundColor: "#D13744", marginTop: 2},
            title: "Messages",
            tabBarIcon: ({
                           color,
                           focused
                         }) => (TabBarIcon(color, focused, "Messages", "chat-outline", "chat")),
          }}
      />
      <Tabs.Screen
          name="account"
          options={{
            title: "Mon compte",
            tabBarIcon: ({
                           color,
                           focused
                         }) => (TabBarIcon(color, focused, "Mon compte", "account-outline", "account")),
          }}
      />
    </Tabs>
  </>)
}

export default TabLayout
