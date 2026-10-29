
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center bg-[#F1FAEE] px-4 text-center">
      <h1 className="text-8xl font-extrabold text-red-800">
        404
      </h1>

      <h2 className="mt-4 text-3xl font-bold text-utama">
        Halaman tidak ditemukan
      </h2>

      <p className="mt-3 max-w-md text-gray-600">
        Maaf, halaman yang kamu cari tidak tersedia
        atau mungkin sudah dipindahkan.
      </p>

      <Link
        href="/"
        className="mt-6 rounded-lg bg-blue-950 px-6 py-3 font-semibold text-white transition hover:opacity-90"
      >
        Kembali ke Beranda
      </Link>
    </main>
  );
}
