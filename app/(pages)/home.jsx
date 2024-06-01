import DynamicSafeAreaView from "../../components/DynamicSafeAreaView";
import {Avatar, Badge, Divider, Icon} from "@rneui/themed";
import COLORS from "../../constants/colors";
import {LayoutAnimation, Platform, Text, TouchableOpacity, UIManager, View} from "react-native";
import {useState} from "react";
import {router} from "expo-router";

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function Home() {
  const [expanded, setExpanded] = useState(false);

  const toggleHeight = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };
  return (<DynamicSafeAreaView className="h-full bg-white">
        <View style={{
          position: 'absolute', top: 70, left: 0, right: 0, justifyContent: 'center', alignItems: 'center'
        }}>

          <View className="px-5 rounded-3xl py-6 bg-fgrey"
                style={{zIndex: 1, width: '80%', height: (expanded) ? 310 : ""}}>

            <View className=" flex-row items-center justify-between ">
              <Icon pressableProps={{backgroundColor: "transparent"}} name={expanded ? "x" : "menu"} type="feather"
                    color={COLORS.cgrey} containerStyle={{alignContent: "flex-start", activeOpacity: 1}}
                    onPress={toggleHeight}/>
              <View className="flex-row items-center">
                <Avatar size={45} rounded source={require('../test.png')} containerStyle={{marginRight: 10}}/>
                <View className="flex-col justify-evenly">
                  <Text className="text-xs font-pmedium ">Hello</Text>
                  <Text className="text-lg font-pbold">Samy</Text>
                </View>
              </View>

              <View className="flex-row items-center">
                <Icon name="chat" type="material-community" color={COLORS.cgrey} containerStyle={{alignSelf: "center"}}
                      size={30} onPress={() => router.navigate("/chatList")}/>
                <Badge value={1} badgeStyle={{
                  backgroundColor: COLORS.nred, opacity: (1 === 0) ? 0 : 1, marginBottom: 10, marginLeft: -10
                }}/>
              </View>
            </View>
            {expanded && <>
              <Divider color={COLORS.cgrey} style={{marginTop: 10}}/>
              <TouchableOpacity style={{marginVertical: 10}} onPress={() => console.log(1)}>
                <View className="flex-row items-center ">
                  <Icon name="package-variant-closed" type="material-community" color={COLORS.cgrey} size={35}
                        containerStyle={{marginRight: 10}}/>
                  <Text className="text-2xl font-pmedium text-black">Mes expéditions</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{marginVertical: 10}} onPress={() => console.log(1)}>
                <View className="flex-row items-center ">
                  <Icon name="bag-suitcase-outline" type="material-community" color={COLORS.cgrey} size={35}
                        containerStyle={{marginRight: 10}}/>
                  <Text className="text-2xl font-pmedium text-black">Mes voyages</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{marginVertical: 10}} onPress={() => console.log(1)}>
                <View className="flex-row items-center ">
                  <Icon name="account-outline" type="material-community" color={COLORS.cgrey} size={35}
                        containerStyle={{marginRight: 10}}/>
                  <Text className="text-2xl font-pmedium text-black">Mon profil</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{marginVertical: 10}} onPress={() => console.log(1)}>
                <View className="flex-row items-center ">
                  <Icon name="logout" type="material" color={COLORS.cgrey} size={35}
                        containerStyle={{marginRight: 10}}/>
                  <Text className="text-2xl font-pmedium text-black">Se déconnecter</Text>
                </View>
              </TouchableOpacity>

            </>}
          </View>
        </View>
        <View className="flex-1 items-center justify-center">

          <Text className="font-psemibold text-center text-xl mt-8">Vous souhaitez?</Text>
          <Text className="font-pextrabold text-center text-xl mt-12 mb-5">Chercher un voyage</Text>
          <Icon size={100} name="search-outline" type="ionicon" color="white"
                onPress={() => router.navigate("listings")}
                containerStyle={{backgroundColor: COLORS.brand, padding: 10, alignSelf: "center", borderRadius: 20}}/>
          <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 50, marginHorizontal: 50}}>
            <Divider style={{flex: 1,}} color={COLORS.cgrey} width={1.5}/>
            <Text style={{marginHorizontal: 16, fontFamily: "Poppins-SemiBold", lineHeight: 20}}>OU</Text>
            <Divider style={{flex: 1}} color={COLORS.cgrey} width={1.5}/>
          </View>
          <Icon size={100} name="add" type="ionicon" color="white"
                containerStyle={{backgroundColor: COLORS.brand, padding: 10, alignSelf: "center", borderRadius: 20}}/>
          <Text className="font-pextrabold text-center text-xl mt-5">Ajouter une annonce</Text>

        </View>


      </DynamicSafeAreaView>

  )
}
