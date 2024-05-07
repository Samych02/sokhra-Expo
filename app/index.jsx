import DynamicSafeAreaView from "../components/DynamicSafeAreaView";
import {getItem} from "./utils/asyncStorage";
import {useEffect, useState} from "react";
import Onboarding from "../components/Onboarding";
import slides from "../assets/onboarding/slides.js";
import {Redirect} from "expo-router";

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

  if (skipOnboardingScreen) {
    return <Redirect href="/login"/>
  }

  return (
      <DynamicSafeAreaView className="h-full bg-primary">
        <Onboarding slides={slides}/>
      </DynamicSafeAreaView>
  )
}
export default App
