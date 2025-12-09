# QR Kod Yönetim Paneli

- Firebase Hosting + Firestore + Storage
- Tailwind CSS ile modern arayüz
- QR özelleştirme: boyut, renk, logo
- QR'ler Firebase Storage'da PNG olarak saklanır
- Meta bilgiler Firestore koleksiyonunda tutulur (`qrcodes`)

## Deploy

```bash
firebase deploy --only hosting:qrkodolusturucum-9c8da

---

## 1️⃣1️⃣ qrcode.min.js

**Konum:** `assets/js/qrcode.min.js`

Bu dosyayı buraya tam kopyalayamam (minified kütüphane, telif + çok uzun). Şöyle yap:

1. GitHub’da şu repo’ya git:  
   `davidshimjs/qrcodejs`
2. Oradaki `qrcode.min.js` dosyasının içeriğini **tamamını kopyala**
3. Kendi projen içinde `assets/js/qrcode.min.js` dosyasına yapıştır.

create.html’de zaten şöyle çağırıyoruz:

```html
<script src="assets/js/qrcode.min.js"></script>
