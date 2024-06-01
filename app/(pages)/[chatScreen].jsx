// import React, {useState, useEffect} from 'react';
// import {View} from 'react-native';
// import {Chatty} from 'react-native-chatty';
// import firebase from '@react-native-firebase/app';
// import '@react-native-firebase/firestore';
//
// export default function ChatScreen() {
//   const [messages, setMessages] = useState([]);
//   const {conversationId} = route.params;
//
//   useEffect(() => {
//     const unsubscribe = firebase.firestore()
//         .collection('conversations')
//         .doc(conversationId)
//         .collection('messages')
//         .orderBy('createdAt', 'desc')
//         .onSnapshot(querySnapshot => {
//           const messages = querySnapshot.docs.map(doc => {
//             const firebaseData = doc.data();
//             const data = {
//               _id: doc.id,
//               text: '',
//               createdAt: new Date().getTime(),
//               ...firebaseData
//             };
//             return data;
//           });
//           setMessages(messages);
//         });
//
//     return () => unsubscribe();
//   }, []);
//
//   const handleSend = newMessages => {
//     const text = newMessages[0].text;
//     const user = firebase.auth().currentUser;
//
//     firebase.firestore()
//         .collection('conversations')
//         .doc(conversationId)
//         .collection('messages')
//         .add({
//           text,
//           createdAt: new Date().getTime(),
//           user: {
//             _id: user.uid,
//           }
//         });
//   };
//
//   return (
//       <View style={{flex: 1}}>
//         <Chatty
//             messages={messages}
//             user={{_id: firebase.auth().currentUser.uid}}
//             onSend={handleSend}
//          footerProps="" headerProps=/>
//       </View>
//   );
// }
