import React, {useState} from 'react'
import {Text, TextInput, View} from 'react-native'
import DynamicSafeAreaView from "../../components/DynamicSafeAreaView";

const Listings = () => {
  const handleOnChangeText = (text) => {
    setInput(text);
  };

  const [input, setInput] = useState("");

  return (<DynamicSafeAreaView className="h-full bg-white">
    <Text>listings</Text>
    <View>
      <TextInput
          placeholder="Enter city name"
          onChangeText={handleOnChangeText}
          value={input}
          style={{
            backgroundColor: "red",
            width: 300,
            height: 50
          }}
      />
    </View>

  </DynamicSafeAreaView>)
}

export default Listings
