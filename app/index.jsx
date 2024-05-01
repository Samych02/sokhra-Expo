import {Text, View} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import Lottie from "lottie-react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import {Redirect, router} from "expo-router";
import DynamicSafeAreaView from "../components/DynamicSafeAreaView";
import {height, width} from "../constants/dimmesions";
import {getItem, setItem} from "./utils/asyncStorage";
import {useEffect, useState} from "react";
import COLORS from "../constants/colors";

const slides = [{
  title: "Bienvenue à Sokhra !",
  text: "Découvrez une nouvelle façon d'envoyer vos colis. Avec Sokhra, confiez vos paquets à des voyageurs et bénéficiez d'une solution économique et sécurisée.",
  image: require('../assets/onboarding/1.json')
}, {
  title: "Gagnez en voyageant !",
  text: "Les voyageurs peuvent rentabiliser leurs déplacements en transportant des colis pour d'autres. Prêt à gagner en voyageant ? Rejoignez-nous dès aujourd'hui sur Sokhra !",
  image: require('../assets/onboarding/2.json')
}, {
  title: "Expédiez en confiance !",
  text: "Sokhra met en relation expéditeurs et voyageurs de confiance pour assurer une livraison sûre et fiable de vos colis.  Dites adieu aux frais " + "exorbitants et bonjour à une expédition économique et sécurisée.",
  image: require('../assets/onboarding/3.json')
}]

const App = () => {
  const [skipOnboardingScreen, setSkipOnboardingScreen] = useState(false)
  const checkIfAlreadyOnboarded = async () => {
    if (await getItem("SkipOnboardingScreen")) {
      setSkipOnboardingScreen(true)
    }
  }
  useEffect(() => {
    checkIfAlreadyOnboarded()
  }, [])

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

  // if (skipOnboardingScreen) {
  //   return <Redirect href="/login"/>
  // }

  return (<DynamicSafeAreaView className="h-full bg-primary">
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
  </DynamicSafeAreaView>)
}
export default App