import React from 'react'
import DynamicSafeAreaView from "../../components/DynamicSafeAreaView";
import {Link} from "expo-router";
import {Text, View} from "react-native";

const shipments = () => {

  return (<DynamicSafeAreaView className="h-full bg-white">
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Link href="../(other)/modal.jsx">Present modal</Link>
    </View>

  </DynamicSafeAreaView>)
}

export default shipments
