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

// Yeni QR Kaydetme
export async function saveQRRecord(data) {
  const docRef = await addDoc(collection(db, "qrcards"), data);
  return docRef.id; // create.html bu ID’yi QR içinde kullanacak
}

// Listeleme (list.html için)
export async function getAllQR() {
  const q = query(collection(db, "qrcards"), orderBy("createdAt", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

// Silme
export async function deleteQR(id) {
  return await deleteDoc(doc(db, "qrcards", id));
}

// Kartvizit bilgisi çekme (view.html için)
export async function getQRById(id) {
  const ref = doc(db, "qrcards", id);
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;
  return snap.data();
}
