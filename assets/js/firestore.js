import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  getDoc,
  orderBy,
  query
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Yeni QR kaydetme (kartvizit verileri)
export async function saveQRRecord(data) {
  const collectionRef = collection(db, "qrcards");
  const docRef = await addDoc(collectionRef, data);
  return docRef.id; // create.html QR oluştururken bu ID kullanılacak
}

// Tüm QR listeleme
export async function getAllQR() {
  const q = query(collection(db, "qrcards"), orderBy("createdAt", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

// ID ile kayıt çekme (view.html için)
export async function getQRById(id) {
  const ref = doc(db, "qrcards", id);
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;
  return snap.data();
}

// Kayıt silme
export async function deleteQR(id) {
  return await deleteDoc(doc(db, "qrcards", id));
}
