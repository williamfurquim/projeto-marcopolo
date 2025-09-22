import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCpE9qmnykW4-gsAr__zu45tLb8VqVL9-o",
  authDomain: "projetomarcopolo-b1ea9.firebaseapp.com",
  databaseURL: "https://projetomarcopolo-b1ea9-default-rtdb.firebaseio.com",
  projectId: "projetomarcopolo-b1ea9",
  storageBucket: "projetomarcopolo-b1ea9.firebasestorage.app",
  messagingSenderId: "1010290388129",
  appId: "1:1010290388129:web:fba00c569f013d055a54e0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
