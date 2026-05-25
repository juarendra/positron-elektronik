# POSITRON ELEKTRONIK Website

Static website untuk katalog demo IoT monitoring. Default bahasa Inggris, dengan tombol
bahasa Indonesia di halaman. Bisa dibuka langsung dari `index.html`
atau di-host gratis memakai GitHub Pages, Cloudflare Pages, Netlify, atau Vercel.

## Edit Cepat

- Nama brand saat ini: `POSITRON ELEKTRONIK`
- Nomor WhatsApp saat ini: `+62 858-8380-2041`
- Link WhatsApp: `https://wa.me/6285883802041`
- Ganti paket harga di section `Paket awal`

## Preview Lokal

```bash
python3 -m http.server 4173
```

Buka `http://localhost:4173`.

## Hosting Gratis

Folder ini sudah siap untuk Netlify dan GitHub Pages:

- `netlify.toml` untuk deploy Netlify
- `.nojekyll` untuk GitHub Pages

### GitHub Pages

1. Buat repository baru di GitHub.
2. Upload isi folder ini.
3. Buka Settings > Pages.
4. Pilih branch `main` dan folder `/`.

### Netlify

1. Login Netlify.
2. Drag-and-drop folder ini ke Netlify Deploy.
3. Netlify akan membuat URL gratis.

### Cloudflare Pages

1. Buat project Pages.
2. Connect repository GitHub.
3. Build command dikosongkan.
4. Output directory isi `/`.
