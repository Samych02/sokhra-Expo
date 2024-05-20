import {getItem} from "./utils/asyncStorage";
import {useMemo, useState} from "react";
import {Redirect} from "expo-router";
import auth from "@react-native-firebase/auth";

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(null)

  const checkIfLoggedIn = async () => {
    try {
      console.log(await auth().currentUser.getIdToken())
    } catch (e) {
    }

    if ((await getItem("isLoggedIn")) != null) {
      setIsLoggedIn(true)
      return
    }

    // check if user is only logged in firebase
    //  this check is for when a new user successfully login but doesn't complete registration
    if ((await auth().currentUser) != null) {
      await auth().signOut()
    }
    setIsLoggedIn(false)
  }
  useMemo(async () => {
    await checkIfLoggedIn()
  }, [])

  // wait until isLoggedIn is set
  if (isLoggedIn != null) {
    return <Redirect href={isLoggedIn ? "/listings" : "/listings"}/>
  }
}
export default App
