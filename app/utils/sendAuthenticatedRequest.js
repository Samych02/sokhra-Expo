import axios from "axios";
import auth from "@react-native-firebase/auth";

const sendAuthenticatedRequest = async (method, path, data = null) => {
  const response = await axios({
    method: method, url: `http://10.0.2.2:8080${path}`, headers: {
      "Authorization": `Bearer ${await auth().currentUser.getIdToken(true)}`,
    }, data: data
  })
  return (response.data)
}

export default sendAuthenticatedRequest

