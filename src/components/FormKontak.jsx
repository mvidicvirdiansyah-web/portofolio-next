
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";


const kelasInput =
  "mt-1 w-full rounded-lg border border-gray-300 bg-white p-2 text-gray-800 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100";

const kelasLabel =
  "block font-semibold text-foreground";

const kelasError =
  "mt-1 text-sm text-red-600 dark:text-red-400";

export default function FormKontak() {
  // State untuk setiap input
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [hp, setHp] = useState("");
  const [keperluan, setKeperluan] = useState("");
  const [pesan, setPesan] = useState("");

  // State untuk validasi dan pesan berhasil
  const [error, setError] = useState({});
  const [berhasil, setBerhasil] = useState(false);

  function kirim(e) {
    e.preventDefault();

    const errorBaru = {};

    // Validasi nama
    if (nama.trim() === "") {
      errorBaru.nama = "Nama wajib diisi.";
    }

    // Validasi email
    if (!email.includes("@")) {
      errorBaru.email = "Email harus memuat tanda @.";
    }

    // Validasi nomor HP
    if (hp.length < 10) {
      errorBaru.hp = "Nomor HP minimal 10 karakter.";
    }

    // Validasi keperluan
    if (keperluan === "") {
      errorBaru.keperluan = "Silakan pilih keperluan.";
    }

    // Validasi pesan
    if (pesan.trim().length < 10) {
      errorBaru.pesan = "Pesan minimal 10 karakter.";
    }

    setError(errorBaru);

    // Jika tidak ada error, tampilkan pesan berhasil
    setBerhasil(Object.keys(errorBaru).length === 0);
  }

  function ubahInput(setter) {
    return (e) => {
      setter(e.target.value);
      setBerhasil(false);
    };
  }

  return (
    <form onSubmit={kirim} className="space-y-5">

      {/* Nama */}
      <div>
        <label htmlFor="nama" className={kelasLabel}>
          Nama Lengkap
        </label>

        <input
          type="text"
          id="nama"
          value={nama}
          onChange={ubahInput(setNama)}
          className={kelasInput}
          placeholder="Masukkan nama lengkap"
        />

        {error.nama && (
          <p className={kelasError}>{error.nama}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className={kelasLabel}>
          Email
        </label>

        <input
          type="email"
          id="email"
          value={email}
          onChange={ubahInput(setEmail)}
          className={kelasInput}
          placeholder="nama@email.com"
        />

        {error.email && (
          <p className={kelasError}>{error.email}</p>
        )}
      </div>

      {/* Nomor HP */}
      <div>
        <label htmlFor="hp" className={kelasLabel}>
          Nomor HP
        </label>

        <input
          type="tel"
          id="hp"
          value={hp}
          onChange={ubahInput(setHp)}
          className={kelasInput}
          placeholder="Contoh: 081234567890"
        />

        {error.hp && (
          <p className={kelasError}>{error.hp}</p>
        )}
      </div>

      {/* Keperluan */}
      <div>
        <label htmlFor="keperluan" className={kelasLabel}>
          Keperluan
        </label>

        <select
          id="keperluan"
          value={keperluan}
          onChange={ubahInput(setKeperluan)}
          className={kelasInput}
        >
          <option value="">Pilih keperluan</option>
          <option value="bertanya">Bertanya</option>
          <option value="kerja-sama">Kerja sama proyek</option>
          <option value="lainnya">Lainnya</option>
        </select>

        {error.keperluan && (
          <p className={kelasError}>{error.keperluan}</p>
        )}
      </div>

      {/* Pesan */}
      <div>
        <label htmlFor="pesan" className={kelasLabel}>
          Pesan
        </label>

        <textarea
          id="pesan"
          rows="5"
          value={pesan}
          onChange={ubahInput(setPesan)}
          className={kelasInput}
          placeholder="Tuliskan pesan minimal 10 karakter"
        />

        {error.pesan && (
          <p className={kelasError}>{error.pesan}</p>
        )}
      </div>

      {/* Tombol kirim */}

<Button
    type="submit"
    size="lg"
    className="rounded-xl bg-[#E63946] px-8 py-4 font-semibold text-white shadow-md shadow-red-500/20 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:bg-[#C1121F] hover:shadow-xl hover:shadow-red-500/40 active:translate-y-0 active:scale-95"
>
    Kirim Pesan
</Button>
 <p className="text-xs text-gray-500 dark:text-gray-400">
  Form ini belum mengirim pesan. Pengiriman pesan diaktifkan di Minggu 15.
</p>

      {/* Pesan berhasil */}
      {berhasil && (
        <p className="rounded-lg bg-green-100 p-4 font-semibold text-green-800 dark:bg-green-900/40 dark:text-green-300">
          Pesan berhasil melewati pemeriksaan dan formulir sudah valid!
        </p>
      )}
    </form>
  );
}
