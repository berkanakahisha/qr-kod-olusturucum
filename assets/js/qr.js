import { storage } from "./firebase.js";
import {
  ref,
  uploadString,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";
import { saveQR } from "./firestore.js";

export async function uploadQR({ text, size, colorDark, colorLight, hasLogo }) {
  const canvas = document.querySelector("#qrcode canvas");
  if (!canvas) {
    alert("Önce QR oluşturmalısın.");
    return;
  }

  const dataURL = canvas.toDataURL("image/png");
  const filename = `qr_${Date.now()}.png`;
  const storageRef = ref(storage, "qrcodes/" + filename);

  await uploadString(storageRef, dataURL, "data_url");
  const url = await getDownloadURL(storageRef);

  await saveQR({ text, url, size, colorDark, colorLight, hasLogo });

  alert("QR Firebase'e kaydedildi!");
}
