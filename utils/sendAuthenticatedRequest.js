import axios from "axios";
import auth from "@react-native-firebase/auth";
import {Alert} from "react-native";
import domainName from "../constants/domainName";

const sendAuthenticatedRequest = async (method, path, data = null, isJsonData = false, isMultiPartForm = false, params = null,) => {
  const headers = {
    "Authorization": `Bearer ${await auth().currentUser.getIdToken(true)}`,
  }
  if (isMultiPartForm) headers["Content-Type"] = "multipart/form-data"
  if (isJsonData) headers["Content-Type"] = "application/json"
  const response = await axios({
    method: method,
    url: `${domainName}${path}`,
    params: params,
    data: data,
    headers: headers,
  })
  if (response.data.status === "success") {
    return response.data.data
  } else {
    Alert.alert(response.data.statusText)
    return null
  }
}
export default sendAuthenticatedRequest
