
"use client";

import { useState } from "react";

const kelasInput =
    "mt-1 w-full rounded-lg border border-gray-300 bg-white p-2 text-gray-800 placeholder:text-gray-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder:text-gray-400";

const kelasLabel =
    "block font-semibold text-gray-800 dark:text-gray-100";

export default function FormKontak() {
    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState({});

    function kirim(e) {
        e.preventDefault();

        const errorBaru = {};

        if (nama.trim() === "") {
            errorBaru.nama = "Nama wajib diisi.";
        }

        if (!email.includes("@")) {
            errorBaru.email =
                "Email harus memuat tanda @, contoh nama@gmail.com.";
        }

        setError(errorBaru);
    }

    return (
        <form onSubmit={kirim} noValidate className="space-y-4">
            <div>
                <label htmlFor="nama" className={kelasLabel}>
                    Nama lengkap
                </label>

                <input
                    type="text"
                    id="nama"
                    name="nama"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    placeholder="Contoh: Budi Santoso"
                    className={kelasInput}
                />

                {error.nama && (
                    <p className="mt-1 text-sm text-aksen dark:text-red-300">
                        {error.nama}
                    </p>
                )}
            </div>

            <div>
                <label htmlFor="email" className={kelasLabel}>
                    Email
                </label>

                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nama@gmail.com"
                    className={kelasInput}
                />

                {error.email && (
                    <p className="mt-1 text-sm text-aksen dark:text-red-300">
                        {error.email}
                    </p>
                )}
            </div>

            <div>
                <label htmlFor="hp" className={kelasLabel}>
                    Nomor HP
                </label>

                <input
                    type="tel"
                    id="hp"
                    name="Nomor HP"
                    placeholder="081234567890"
                    required
                    className={kelasInput}
                />
            </div>

            <div>
                <label htmlFor="keperluan" className={kelasLabel}>
                    Keperluan
                </label>

                <select
                    id="keperluan"
                    name="Keperluan"
                    required
                    defaultValue=""
                    className={kelasInput}
                >
                    <option value="" disabled>
                        -- Pilih keperluan --
                    </option>
                    <option value="Kerja sama">Kerja sama</option>
                    <option value="Pembuatan website">
                        Pembuatan website
                    </option>
                    <option value="Pertanyaan">Pertanyaan</option>
                    <option value="Lainnya">Lainnya</option>
                </select>
            </div>

            <div>
                <label htmlFor="pesan" className={kelasLabel}>
                    Pesan
                </label>

                <textarea
                    id="pesan"
                    name="Pesan"
                    rows={5}
                    placeholder="Tulis pesanmu di sini..."
                    required
                    className={kelasInput}
                />
            </div>

            <button
                type="submit"
                className="rounded-lg bg-aksen px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90"
            >
                Kirim Pesan
            </button>

            <p className="text-xs text-gray-500 dark:text-gray-400">
                Pengiriman pesan memerlukan aplikasi email yang tersedia
                di perangkatmu.
            </p>
        </form>
    );
}
