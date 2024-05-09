import {getItem} from "./utils/asyncStorage";
import {useEffect, useState} from "react";
import {Redirect} from "expo-router";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const checkIfLoggedIn = async () => {
    if (await getItem("isLoggedIn")) {
      setIsLoggedIn(true)
    }
  }
  useEffect(() => {
    checkIfLoggedIn()
  }, [])

  if (isLoggedIn) {
    return <Redirect href="/inbox"/>
  }
  return <Redirect href="/login"/>

}
export default App
