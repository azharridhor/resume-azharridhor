# Azhar Ridho Rahmatillah — Resume Website

Resume website pribadi yang dibuat dengan **React 19 + Vite + Tailwind CSS + Framer Motion**. Situs ini menampilkan profil, pendidikan, keahlian, proyek, pengalaman, dan kontak dengan desain modern, responsif, dan mudah disesuaikan.

## 🚀 Sekilas

- Halaman single-page resume/portfolio
- Toggle dark mode / light mode dengan preferensi yang tersimpan
- Animasi halus menggunakan Framer Motion
- Desain responsif untuk desktop, tablet, dan mobile
- Tombol `Download CV` untuk mengekspor resume dalam bentuk PDF
- Konten dapat disesuaikan dari satu file data utama

## 🔧 Stack Teknologi

- React 19
- Vite
- Tailwind CSS
- Framer Motion
- html2canvas + jsPDF (Download PDF)

## ✨ Fitur Utama

- Landing hero dengan typing animation dan efek gradient
- Dark mode / Light mode tersimpan otomatis
- Struktur konten terpisah di `src/data/portfolio.js`
- Reusable section wrapper untuk animasi masuk
- Scroll progress bar dan tombol kembali ke atas
- Halaman 404 khusus
- SEO metadata dan file `manifest.json`

## 📁 Struktur Proyek

```text
src/
├── assets/
├── components/
│   ├── About.jsx
│   ├── BackToTop.jsx
│   ├── Contact.jsx
│   ├── CustomCursor.jsx
│   ├── Education.jsx
│   ├── Experience.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── LoadingScreen.jsx
│   ├── Navbar.jsx
│   ├── Projects.jsx
│   ├── ScrollProgressBar.jsx
│   ├── SectionWrapper.jsx
│   ├── Skills.jsx
│   ├── SoftSkills.jsx
│   └── SectionWrapper.jsx
├── data/
│   └── portfolio.js
├── hooks/
│   └── useTheme.js
├── pages/
│   └── NotFound.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## 🔧 Persiapan Lokal

```bash
npm install
npm run dev
```

Kunjungi `http://localhost:5173` setelah server berjalan.

## 🏗️ Build Produksi

```bash
npm run build
npm run preview
```

Hasil build tersedia di folder `dist/`.

## 📝 Mengubah Konten Resume

Semua konten website diatur dari file berikut:

```text
src/data/portfolio.js
```

Edit file tersebut untuk memperbarui informasi profil, kontak, skill, proyek, pendidikan, dan pengalaman.

## 📂 Assets & Download CV

- Foto profil ada di `public/profile-photo.png`
- File CV PDF dapat disimpan di `public/Resume_Azhar_Ridho_Rahmatillah.pdf`
- Gambar resume untuk download PDF dapat ditaruh di `public/cv-image.png`

## ☁️ Deployment

### Vercel

```bash
npm i -g vercel
vercel
```

### GitHub Pages

1. Install paket:
   ```bash
   npm install --save-dev gh-pages
   ```
2. Tambahkan script deploy di `package.json`:
   ```json
   "deploy": "vite build && gh-pages -d dist"
   ```
3. Jalankan:
   ```bash
   npm run deploy
   ```

## 🧩 Catatan

- Pastikan file `public/profile-photo.png` tersedia untuk menampilkan foto profil.
- Jika `npm install` diblokir oleh PowerShell, gunakan perintah:
  ```powershell
  powershell -ExecutionPolicy Bypass -NoProfile -Command "Set-Location -Path 'D:\Azhar\resume-website'; npm install"
  ```

---

Dibuat dengan ❤️ menggunakan React + Vite + Tailwind CSS.
