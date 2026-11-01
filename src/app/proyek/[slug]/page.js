
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { proyek } from "@/data/proyek";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const item = proyek.find((p) => p.slug === slug);

    if (!item) {
        return { title: "Proyek tidak ditemukan" };
    }

    return {
        title: item.judul,
        description: item.deskripsi,
    };
}

export default async function DetailProyek({ params }) {
    const { slug } = await params;

    const item = proyek.find(
        (p) => p.slug.toLowerCase() === slug.toLowerCase()
    );

    if (!item) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#F1FAEE] px-4 py-10 dark:bg-gray-900">
            <div className="mx-auto max-w-3xl">

                {/* Breadcrumb */}
                <nav
                    aria-label="Breadcrumb"
                    className="mb-6 text-sm text-gray-600 dark:text-gray-400"
                >
                    <ol className="flex flex-wrap items-center gap-2">
                        <li>
                            <Link
                                href="/"
                                className="hover:text-aksen dark:text-red-300 hover:underline"
                            >
                                Beranda
                            </Link>
                        </li>

                        <li aria-hidden="true">/</li>

                        <li>
                            <Link
                                href="/proyek"
                                className="hover:text-aksen dark:text-red-300 hover:underline"
                            >
                                Proyek
                            </Link>
                        </li>

                        <li aria-hidden="true">/</li>

                        <li
                            aria-current="page"
                            className="font-semibold text-utama dark:text-sky-200"
                        >
                            {item.judul}
                        </li>
                    </ol>
                </nav>

                <Link
                    href="/proyek"
                    className="text-sm font-semibold text-aksen hover:underline dark:text-red-300"
                >
                    &larr; Kembali ke daftar proyek
                </Link>

                <h1 className="mt-4 text-3xl font-bold text-utama dark:text-sky-200 md:text-4xl">
                    {item.judul}
                </h1>

                <p className="mt-2 text-gray-600 dark:text-gray-400">
                    {item.kategori} &middot; Dibuat di {item.minggu}
                </p>

                <Image
                    src={item.gambar}
                    alt={`Tangkapan layar ${item.judul}`}
                    width={640}
                    height={420}
                    className="mt-6 h-auto w-full rounded-xl border border-gray-200 dark:border-gray-700"
                />

                <p className="mt-6 text-lg text-gray-700 dark:text-gray-300">
                    {item.deskripsi}
                </p>

                <h2 className="mt-8 text-2xl font-bold text-utama dark:text-sky-200">
                    Yang Saya Pelajari
                </h2>

                <ul className="mt-3 list-disc pl-5 text-gray-700 dark:text-gray-300">
                    {item.fitur.map((f) => (
                        <li key={f}>{f}</li>
                    ))}
                </ul>

            </div>
        </main>
    );
}
