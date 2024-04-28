import {Platform, SafeAreaView, StatusBar} from "react-native";

const DynamicSafeAreaView = ({children, style}) => {

  return (
      <SafeAreaView className={{}}
                    style={[style,
                      {paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,}]}>
        {children}
      </SafeAreaView>
  )
}
export default DynamicSafeAreaView;