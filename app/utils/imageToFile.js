import {Platform} from "react-native";

const imageToFile = (image) => {
  return (
      {
        uri: Platform.OS === 'android' ? image.uri : 'file://' + image.uri,
        name: "image." + image.mimeType.split("/")[1],
        type: image.mimeType
      }
  )
}

export default imageToFile;

