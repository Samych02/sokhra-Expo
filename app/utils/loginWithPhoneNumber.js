import auth from "@react-native-firebase/auth";

const loginWithPhoneNumber = async (phoneNumber, setConfirm) => {
  const confirmation = await auth().signInWithPhoneNumber(phoneNumber)
  setConfirm(confirmation)
}
export default loginWithPhoneNumber;
