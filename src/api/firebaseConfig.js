import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
const firebaseConfig = {
  apiKey: "AIzaSyDeXMLm9nUrEQ8YPS_NX4ARKUVGQJ9XUsA",
  authDomain: "showroom-a27a7.firebaseapp.com",
  projectId: "showroom-a27a7",
  storageBucket: "showroom-a27a7.appspot.com",
  messagingSenderId: "873623834415",
  appId: "1:873623834415:android:48ad79fb243ca853b7dbda",
};
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export { auth };