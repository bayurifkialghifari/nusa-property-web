# G-Land Padalarang Residence

Website properti multi-page berbahasa Indonesia, dibangun dengan Astro, TypeScript strict, CSS, serta React Three Fiber khusus untuk preview 3D pada halaman detail. Tidak ada backend kontak, analitik, embed peta, atau permintaan pihak ketiga saat halaman pertama dimuat.

## Menjalankan

Gunakan Node.js 22.12+ dan pnpm 11.25.0 (versi dikunci di `package.json`).

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Buka alamat lokal yang ditampilkan Astro. Untuk melihat hasil produksi:

```sh
pnpm build
pnpm preview --host 127.0.0.1
```

Hasil statis berada di `dist/`. Tidak diperlukan server aplikasi atau variabel rahasia.

## Verifikasi

```sh
pnpm check
pnpm typecheck
pnpm lint
pnpm build
```

Atau jalankan `pnpm verify`. `astro check` memeriksa komponen Astro; `tsc --noEmit` memeriksa modul TypeScript. Biome memeriksa berkas TypeScript, CSS, JSON konfigurasi, dan konfigurasi Astro yang didukung. Berkas `.astro` diperiksa melalui Astro, bukan Biome.

## Struktur

- `src/pages/index.astro`: susunan halaman.
- `src/pages/hunian/[slug].astro`: empat halaman detail hunian yang dibuat secara statis.
- `src/layouts/`: dokumen HTML, metadata, dan structured data.
- `src/components/`: komponen bagian, tombol/link, ikon, kartu, galeri, dan viewer 3D.
- `src/data/`: fakta proyek dan pilihan hunian.
- `src/scripts/`: peningkatan progresif navigasi dan dialog gambar.
- `src/styles/`: token dan fondasi CSS; gaya khusus komponen berada di komponennya.
- `public/images/` dan `public/fonts/`: gambar proyek dan font yang disajikan secara lokal.
- `DESIGN.md`, `STITCH_PROMPT.md`, dan `ASSETS.md`: kontrak visual, prompt desain, serta dokumentasi asal dan lisensi aset.

## Konten dan integrasi

Sumber konten: https://www.ganproperti.com/proyek.php?proyek=30. Sumber menjadi rujukan informasi, bukan target salinan tampilan.

Semua visual proyek diberi label **Visualisasi proyek**. Harga, spesifikasi, dan ketersediaan tidak diasumsikan. Fasilitas yang tercantum pada sumber tetap perlu dikonfirmasi dengan marketing.

Tombol kontak membuka WhatsApp demo ke nomor dummy `6280000000000` dengan pesan sesuai konteks. **Minta brosur & harga** memakai alur demo yang sama, bukan mengunduh berkas. Tidak ada formulir, pengiriman data otomatis, penyimpanan kontak, atau janji waktu respons. Peta dibuka hanya setelah pengunjung memilih tautan Google Maps dengan koordinat `-6.850577,107.4743523`.

Setiap kartu hunian memiliki halaman detail dengan gambar sumber, catatan visual, dan model 3D konseptual yang dapat diputar serta di-zoom. Galeri menggunakan tautan gambar biasa, ditingkatkan menjadi dialog native bila JavaScript tersedia. Navigasi dan seluruh informasi penting tetap tersedia tanpa JavaScript. Tautan eksternal membuka tab baru dengan `rel="noopener noreferrer"`.

## Pemeriksaan manual sebelum rilis

- Periksa desktop 1280/1440px, tablet 768px, ponsel 375px, reflow 320px, dan pembesaran teks 200%.
- Uji menu: buka/tutup, pilih bagian, Escape, serta resize ke desktop.
- Uji setiap gambar galeri: buka, tutup, klik backdrop, Escape, Tab/Shift+Tab, dan fokus kembali ke pemicu.
- Pastikan CTA tetap di ponsel tidak menutupi konten akhir, kontrol berfokus, atau dialog.
- Matikan JavaScript: navigasi, gambar, WhatsApp, dan Google Maps tetap berupa tautan yang bekerja.
- Uji `prefers-reduced-motion`; periksa kontras dan fokus keyboard.
- Periksa semua aset lokal, konsol, dan jaringan; halaman awal tidak boleh meminta sumber pihak ketiga.
- Periksa URL WhatsApp dan pesan yang didekode tanpa mengirim pesan sungguhan.
- Audit hasil produksi, bukan server development. Angka Lighthouse lokal bukan data pengalaman pengguna nyata.

## Checklist peluncuran

- Konfirmasi izin publikasi dan penggunaan ulang semua gambar/font sesuai `ASSETS.md`.
- Ganti nomor dummy dengan kontak resmi hanya setelah otorisasi pemilik proyek dikonfirmasi.
- Pastikan visualisasi tidak disajikan sebagai foto kondisi aktual atau janji unit yang tersedia.
- Atur properti `site` pada `astro.config.mjs` hanya setelah hostname produksi disetujui; metadata URL absolut dan canonical mengikuti nilai tersebut. Tidak ada domain rekaan di prototipe.
- Jalankan instalasi bersih menggunakan lockfile dan seluruh pemeriksaan di atas.
- Audit ulang aksesibilitas, performa, metadata sosial, HTTPS, dan cache pada hostname produksi setelah publikasi oleh pihak yang berwenang.

Tidak ada deployment atau pengiriman pesan otomatis.
