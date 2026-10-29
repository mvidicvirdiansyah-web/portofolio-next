
import Link from "next/link";

export const metadata = {
  title: "Kontak",
  description: "Hubungi Muhammad Vidic Virdiansyah.",
};

export default function Kontak() {
  return (
    <div className="min-h-screen bg-[#F1FAEE]">
      <main className="mx-auto max-w-5xl px-4 py-10">
        <h1 className="text-3xl font-bold text-utama">
          Hubungi Saya
        </h1>

        <p className="mt-2 text-sm text-gray-600">
          Punya pertanyaan atau ingin bekerja sama? Isi form berikut.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
          {/* Formulir Kontak */}
          <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm md:col-span-2">
            <form
              action="mailto:emailkamu@example.com"
              method="post"
              encType="text/plain"
              className="space-y-4"
            >
              <div>
                <label
                  htmlFor="nama"
                  className="block text-sm font-semibold"
                >
                  Nama lengkap
                </label>
                <input
                  type="text"
                  id="nama"
                  name="Nama"
                  placeholder="Contoh: Budi Santoso"
                  required
                  className="mt-1 w-full rounded-lg border border-gray-300 p-2 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="Email"
                  placeholder="nama@email.com"
                  required
                  className="mt-1 w-full rounded-lg border border-gray-300 p-2 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="hp"
                  className="block text-sm font-semibold"
                >
                  Nomor HP
                </label>
                <input
                  type="tel"
                  id="hp"
                  name="Nomor HP"
                  placeholder="081234567890"
                  required
                  className="mt-1 w-full rounded-lg border border-gray-300 p-2 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="keperluan"
                  className="block text-sm font-semibold"
                >
                  Keperluan
                </label>
                <select
                  id="keperluan"
                  name="Keperluan"
                  required
                  defaultValue=""
                  className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2"
                >
                  <option value="" disabled>
                    -- Pilih keperluan --
                  </option>
                  <option value="Kerja sama">
                    Kerja sama
                  </option>
                  <option value="Pembuatan website">
                    Pembuatan website
                  </option>
                  <option value="Pertanyaan">
                    Pertanyaan
                  </option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="pesan"
                  className="block text-sm font-semibold"
                >
                  Pesan
                </label>
                <textarea
                  id="pesan"
                  name="Pesan"
                  rows={5}
                  placeholder="Tulis pesanmu di sini..."
                  required
                  className="mt-1 w-full rounded-lg border border-gray-300 p-2 outline-none focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="rounded-lg bg-aksen px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Kirim Pesan
              </button>

              <p className="text-xs text-gray-500">
                Pengiriman pesan memerlukan aplikasi email yang
                tersedia di perangkatmu.
              </p>
            </form>
          </section>

          {/* Informasi Kontak */}
          <aside className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-bold text-utama">
              Temukan Saya di
            </h2>

            <div className="mt-3 space-y-3 text-sm">
              <div>
                <p className="font-semibold text-aksen">GitHub</p>
                <Link
                  href="https://github.com/mvidicvirdiansyah-web/portofolio-next"
                  target="_blank"
                  rel="noreferrer"
                  className="break-all text-aksen hover:underline"
                >
                  Kunjungi GitHub
                </Link>
              </div>

              <div>
                <p className="font-semibold text-aksen">Email</p>
                <a
                  href="mailto:emailkamu@example.com"
                  className="break-all text-aksen hover:underline"
                >
                  mvidicvirdiansyah@gmail.com
                </a>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
