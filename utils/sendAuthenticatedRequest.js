import axios from "axios";
import auth from "@react-native-firebase/auth";
import {Alert} from "react-native";

const sendAuthenticatedRequest = async (method, path, data = null, isFormData = false) => {
  const headers = {
    "Authorization": `Bearer ${await auth().currentUser.getIdToken(true)}`,
  }
  if (isFormData) headers["Content-Type"] = "multipart/form-data"
  const response = await axios({
    method: method,
    url: `http://10.0.2.2:8080${path}`,
    headers: headers,
    data: data
  })
  if (response.data.status === "success") {
    return response.data.data
  } else {
    Alert.alert(response.data.statusText)
    return null
  }
}
export default sendAuthenticatedRequest

