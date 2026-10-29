
import Link from "next/link";
import Hero from "@/components/Hero";
import ProyekCard from "@/components/ProyekCard";
import { proyek } from "@/data/proyek";

export default function Home() {
  const proyekTerbaru = proyek.slice(0, 3);

  return (
    <div className="min-h-screen bg-[#F1FAEE]">
      <main className="mx-auto max-w-5xl px-4 py-10">
        <Hero
          nama="Muhammad Vidic Virdiansyah"
          tagline="Siswa kelas X SMK, calon Junior Web Developer di Kelas Industri UBIG."
        />

        <section className="mt-8 w-fit rounded-xl border border-gray-200 bg-white p-6">
          <h2 className="text-2xl font-bold text-utama">
            Tentang Saya
          </h2>

          <p className="py-2">
            Saya adalah seorang Web Developer yang tertarik
            dalam membuat website modern, responsif, dan
            mudah digunakan. Saya juga memiliki passion untuk
            terus belajar dan mengembangkan diri dalam dunia
            teknologi.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-bold text-utama">
            Proyek Terbaru
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {proyekTerbaru.map((item) => (
              <ProyekCard
                key={item.slug}
                proyek={item}
              />
            ))}
          </div>

          <Link
            href="/proyek"
            className="mt-6 inline-block rounded-lg bg-utama px-5 py-2 font-semibold text-white transition hover:opacity-90"
          >
            Lihat Semua Proyek
          </Link>
        </section>
      </main>
    </div>
  );
}
