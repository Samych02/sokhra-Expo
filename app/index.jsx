import {Dimensions, SafeAreaView, Text, View} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import Lottie from "lottie-react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import {router} from "expo-router";

const width = Dimensions.get("window").width;
const slides = [
  {
    title: "Bienvenue à Sokhra !",
    text: "Découvrez une nouvelle façon d'envoyer vos colis. Avec Sokhra, confiez vos paquets à des voyageurs " +
        "et bénéficiez d'une solution économique et sécurisée.",
    image: require('../assets/onboarding/1.json')
  },
  {
    title: "Gagnez en voyageant !",
    text: "Les voyageurs peuvent rentabiliser leurs déplacements en transportant des colis pour d'autres. Prêt à gagner" +
        " en voyageant ? Rejoignez-nous dès aujourd'hui sur Sokhra !",
    image: require('../assets/onboarding/2.json')
  },
  {
    title: "Expédiez en confiance !",
    text: "Sokhra met en relation expéditeurs et " +
        "voyageurs de confiance pour assurer une livraison sûre et fiable de vos colis.  Dites adieu aux frais " +
        "exorbitants et bonjour à une expédition économique et sécurisée.",
    image: require('../assets/onboarding/3.json')
  }
]

export default function App() {
  const _renderItem = ({item}) => {
    return (
        <View className="w-full h-full flex-col justify-center items-center">
          <View style={{flex: 1}}></View>
          <Lottie
              source={item.image}
              autoPlay={true}
              loop={true}
              style={{width: width * 0.9, height: width}}
              resizeMode="contain"
          />
          <View style={{flex: 1}}></View>
          <Text className="text-2xl text-black font-pextrabold text-center px-1.5">{item.title}</Text>
          <Text className="text-sm font-pregular mt-7 text-center px-4" numberOfLines={5}>{item.text}</Text>
          <View style={{flex: 3}}></View>
        </View>
    )
  }

  const _renderNextButton = () => {
    return (
        <View style={{
          backgroundColor: "#222325",
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
                fontSize: 24,
                color: "#BD965B",
              }}
          />
        </View>
    );
  };
  const _renderDoneButton = () => {
    return (
        <View style={{
          backgroundColor: "#222325",
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
                fontSize: 24,
                color: "#BD965B",
              }}
          />
        </View>
    );
  };


  return (
      <SafeAreaView className="bg-primary h-full">
        <AppIntroSlider
            data={slides}
            renderItem={_renderItem}
            renderNextButton={_renderNextButton}
            renderDoneButton={_renderDoneButton}
            onDone={() => router.replace("/login",)}
            activeDotStyle={{backgroundColor: "#BD965B", width: width * 0.08}}
            dotStyle={{backgroundColor: "#222325", width: width * 0.027}}
        />
      </SafeAreaView>
  );
}
