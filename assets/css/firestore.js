import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  orderBy,
  query,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

export async function saveQR({ text, url, size, colorDark, colorLight, hasLogo }) {
  return await addDoc(collection(db, "qrcodes"), {
    text,
    qr: url,
    size,
    colorDark,
    colorLight,
    hasLogo,
    createdAt: new Date().toISOString(),
  });
}

export async function getAllQR() {
  const q = query(collection(db, "qrcodes"), orderBy("createdAt", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}

export async function deleteQR(id) {
  return await deleteDoc(doc(db, "qrcodes", id));
}
