import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBhcs89gkGUNCb6S_VxIYtfeiIidoL82uA",
  authDomain: "deja-vu-9a3fd.firebaseapp.com",
  projectId: "deja-vu-9a3fd",
  storageBucket: "deja-vu-9a3fd.appspot.com",
  messagingSenderId: "1055026215636",
  appId: "1:1055026215636:web:778ce921dfea1e28729941"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
