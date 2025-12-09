import { initializeApp } 
  from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } 
  from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } 
  from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyCfS90Hjilrbk2EBd-Ps9dk4LEaeEkylvM",
  authDomain: "qrkodolusturucum.firebaseapp.com",
  projectId: "qrkodolusturucum",
  storageBucket: "qrkodolusturucum.firebasestorage.app",
  messagingSenderId: "696857744828",
  appId: "1:696857744828:web:caffcf582a5572d38107b9"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
