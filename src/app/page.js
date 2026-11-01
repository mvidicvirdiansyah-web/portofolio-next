
import Link from "next/link";
import Hero from "@/components/Hero";
import ProyekCard from "@/components/ProyekCard";
import { proyek } from "@/data/proyek";

const keahlian = [
    { nama: "HTML", level: "Menengah" },
    { nama: "CSS", level: "Menengah" },
    { nama: "Git dan GitHub", level: "Dasar" },
    { nama: "Desain poster dengan Canva", level: "Mahir" },
    { nama: "JavaScript", level: "Dasar" },
];

export default function Home() {
    const proyekTerbaru = proyek.slice(0, 3);

    return (
        <div className="min-h-screen bg-[#F1FAEE] dark:bg-gray-900">
            <main className="mx-auto max-w-5xl px-4 py-10">
                <Hero
                    nama="Muhammad Vidic Virdiansyah"
                    tagline="Siswa kelas X SMK, calon Junior Web Developer di Kelas Industri UBIG."
                />

                {/* Keahlian */}
                <section className="mt-8">
                    <h2 className="mb-4 text-2xl font-bold text-utama dark:text-sky-200">
                        Keahlian
                    </h2>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                        {keahlian.map((item) => (
                            <div
                                key={item.nama}
                                className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800"
                            >
                                <h3 className="font-bold text-utama dark:text-sky-200">
                                    {item.nama}
                                </h3>

                                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                    Level: {item.level}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Proyek Terbaru */}
                <section className="mt-10">
                    <h2 className="mb-4 text-2xl font-bold text-utama dark:text-sky-200">
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
