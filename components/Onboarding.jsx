import {Text, View} from "react-native";
import Lottie from "lottie-react-native";
import {height, width} from "../constants/dimmesions";
import COLORS from "../constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import {setItem} from "../app/utils/asyncStorage";
import {router} from "expo-router";
import AppIntroSlider from "react-native-app-intro-slider";

const Onboarding = ({slides}) => {
  const _renderItem = ({item}) => {
    return (<View className="w-full justify-center items-center">
      <Lottie
          source={item.image}
          autoPlay={true}
          loop={true}
          style={{width: width * 0.9, height: width}}
          resizeMode="contain"
      />
      <Text className="text-2xl text-black font-pextrabold text-center px-1.5"
            style={{marginTop: height * 0.02}}>{item.title}</Text>
      <Text className="text-sm font-pregular text-center px-4 mt-2">{item.text}</Text>
    </View>)
  }

  const _renderNextButton = () => {
    return (<View style={{
      backgroundColor: COLORS.dgrey,
      width: 40,
      height: 40,
      borderRadius: 20,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 5
    }}>
      <Ionicons
          name="arrow-forward-outline"
          style={{
            fontSize: 24, color: COLORS.secondary,
          }}
      />
    </View>)
  }
  const _renderDoneButton = () => {
    return (<View style={{
      backgroundColor: COLORS.dgrey,
      width: 40,
      height: 40,
      borderRadius: 20,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 5
    }}>
      <Ionicons
          name="checkmark-outline"
          style={{
            fontSize: 24, color: COLORS.secondary,
          }}
      />
    </View>)
  }

  return (
      <AppIntroSlider
          data={slides}
          renderItem={_renderItem}
          renderNextButton={_renderNextButton}
          renderDoneButton={_renderDoneButton}
          onDone={() => {
            setItem("SkipOnboardingScreen", "1")
            router.replace("/login")
          }}
          activeDotStyle={{backgroundColor: COLORS.secondary, width: width * 0.08}}
          dotStyle={{backgroundColor: COLORS.dgrey, width: width * 0.027}}
      />
  )
}
export default Onboarding;
